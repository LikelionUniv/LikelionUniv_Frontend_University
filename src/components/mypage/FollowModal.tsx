import { useRef } from 'react';

import * as FM from './FollowModal.style';
import { FollowBox } from './FollowBox';
import { ImodalProps } from './type';
import { useLoadFollow } from '../../api/mypage/useLoadFollow';
import { useIntersect } from '../../api/mypage/useIntersect';

interface FollowModalProps {
    isOpen: boolean;
    modalProps: ImodalProps;
    closeModal: () => void;
}

export const FollowModal = ({
    isOpen,
    modalProps,
    closeModal,
}: FollowModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const follow = modalProps.follow === '팔로워' ? 'follower' : 'following';
    const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
        useLoadFollow(modalProps.userid, follow);

    const ref = useIntersect(async (entry, observer) => {
        observer.unobserve(entry.target);
        if (hasNextPage && !isFetchingNextPage) fetchNextPage();
    });

    return (
        <FM.ModalWrapper>
            <FM.ModalBackground onClick={closeModal} />
            <FM.ModalContainer>
                <FM.ModalHeader>
                    {modalProps.follow}
                    <FM.ModlalClose onClick={closeModal} />
                </FM.ModalHeader>

                <FM.ModalContent ref={modalRef}>
                    {data?.pages.map(page =>
                        page.data.map(item => (
                            <FollowBox
                                key={item['userId']}
                                userId={item['userId']}
                                name={item['name']}
                                ordinal={item['ordinal']}
                                part={item['part']}
                                profileImage={item['profileImage']}
                                isFollowed={item['isFollowed']}
                                isMine={modalProps.isMine}
                            />
                        )),
                    )}
                    {isFetchingNextPage && <FM.Loading />}
                    <FM.Target ref={ref} />
                </FM.ModalContent>
            </FM.ModalContainer>
        </FM.ModalWrapper>
    );
};
