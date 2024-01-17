import styled from 'styled-components';
import ChatBox from './ChatBox';
// import { imgBtnClickAtom } from './../../atoms';
// import { useRecoilValue } from 'recoil';
// import ImgModal from './ImgAttachment';

const Home = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--Grey-200, #f2f4f6);
    padding: 40px 0px;
`;

const ChatHome = () => {
    // const isImgClick = useRecoilValue(imgBtnClickAtom);

    return (
        <Home>
            <ChatBox />

            {/* {isImgClick ? <ImgModal /> : null} */}
        </Home>
    );
};

export default ChatHome;
