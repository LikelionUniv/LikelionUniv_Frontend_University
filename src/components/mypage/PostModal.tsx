import { useRef, useState } from 'react';
import { styled } from 'styled-components';

const PostModal = () => {
    //이거는 하나하나 만드는 거기 때문에 모달을 통합해서 하나로 하는 건 불가능... 수정할때는 해당 페이지로 가고 삭제할때는 리다이렉트가 필요
    const [modal, setModal] = useState<Boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);
    return (
        <>
            <div
                className="edit"
                onClick={(e: React.MouseEvent | React.TouchEvent) => {
                    e.stopPropagation();
                    setModal(!modal);
                }}
            ></div>
            {modal ? (
                <>
                    <MyPostModal ref={modalRef}>
                        <div
                            onClick={(
                                e: React.MouseEvent | React.TouchEvent,
                            ) => {
                                e.stopPropagation();
                                setModal(!modal);
                                alert('수정하는 곳으로 이동');
                            }}
                            className="inner"
                        >
                            수정하기
                        </div>
                        <div
                            onClick={(
                                e: React.MouseEvent | React.TouchEvent,
                            ) => {
                                e.stopPropagation();
                                setModal(!modal);
                                alert('삭제하기 기능 구현');
                            }}
                            className="inner"
                        >
                            삭제하기
                        </div>
                    </MyPostModal>
                </>
            ) : null}
        </>
    );
};

export default PostModal;

const MyPostModal = styled.div`
    position: absolute;
    top: 20px;
    right: 0px;
    z-index: 999;
    width: 104px;
    height: 90px;
    border-radius: 6px;
    border: 1px solid var(--grey-400, #dcdfe3);
    background-color: var(--white, #fff);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .inner {
        width: 96px;
        height: 41px;
        border-radius: 4px;
        color: var(--grey-900, #212224);
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
            background-color: var(--grey-300, #eaecee);
        }
        &:active {
            background-color: var(--grey-400, #dcdfe3);
        }
    }
`;
