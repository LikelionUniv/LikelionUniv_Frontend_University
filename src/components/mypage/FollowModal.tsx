import { useCallback, useEffect, useRef, useState } from 'react';
import * as FM from './FollowModal.style';
import { FollowBox } from './FollowBox';
import { userFollowApi } from '../../api/mypage/userinfo';
import { ImodalProps, Ifollows } from './type';

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

    const [followList, setfollowList] = useState<Ifollows[]>([]);
    const [page, setPage] = useState(0);
    const [nextPage, setnextPage] = useState(false);
    const [isFetching, setFetching] = useState(false);

    // 초기 팔로우 정보 받기
    useEffect(() => {
        loadFollows();
    }, []);
    // 팔로우 목록 호출 콜백 함수
    const loadFollows = useCallback(async () => {
        try {
            const { data } = await userFollowApi(
                modalProps.userid,
                page,
                follow,
            );
            setfollowList(followList.concat(data.data));
            setPage(data.currentPage + 1);
            setnextPage(data.hasNext); //API 확인되면 수정
            setFetching(false);
        } catch (error) {
            console.log('loadFollowsError', error);
        }
    }, [page]);
    // 스크롤 이벤트 감지 함수
    useEffect(() => {
        const handleScroll = () => {
            const modal = modalRef.current;
            if (modal) {
                const { scrollTop, scrollHeight, clientHeight } = modal;
                if (clientHeight + scrollTop >= scrollHeight) {
                    setFetching(true);
                }
            }
        };
        setFetching(true);
        const modal = modalRef.current;
        if (modal) {
            modal.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    // Fetching 설정
    useEffect(() => {
        if (isFetching && nextPage) loadFollows();
        else if (!nextPage) setFetching(false);
    }, [isFetching]);

    return (
        <FM.ModalWrapper>
            <FM.ModalBackground onClick={closeModal} />
            <FM.ModalContainer>
                <FM.ModalHeader>
                    {modalProps.follow}
                    <FM.ModlalClose onClick={closeModal} />
                </FM.ModalHeader>

                <FM.ModalContent ref={modalRef}>
                    {followList.map((e, i) => (
                        <FollowBox
                            key={i}
                            userId={e.userId}
                            name={e.name}
                            ordinal={e.ordinal}
                            part={e.part}
                            profileImage={e.profileImage}
                            isFollowed={e.isFollowed}
                        />
                    ))}
                    {isFetching && <FM.Loading />}
                </FM.ModalContent>
            </FM.ModalContainer>
        </FM.ModalWrapper>
    );
};
