import { styled } from 'styled-components';
import cancel from '../../../../img/admin/Cancel.svg';

interface HackathonModalProps {
    onCancel: () => void;
    reason: string;
}

function HackathonModal({ onCancel, reason }: HackathonModalProps) {
    return (
        <>
            <BackgroundOverlay>
                <Wrapper>
                    <Title>불참 사유</Title>
                    <CancelIcon src={cancel} onClick={onCancel} alt="취소" />
                    <Divider />
                    <Text>{reason}</Text>
                </Wrapper>
            </BackgroundOverlay>
        </>
    );
}
export default HackathonModal;
const BackgroundOverlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
`;

export const Wrapper = styled.div`
    width: fit-content;
    height: fit-content;
    background-color: white;
    padding: 32px 24px 24px 24px;
    max-width: 518px;
    min-height: 350px;
    border-radius: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    @media screen and (max-width: 767px) {
        min-width: 80%;
        top: 54%;
        height: 400px;
        overflow: scroll;
    }
`;
const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-bottom: 10px;
`;
const CancelIcon = styled.img`
    margin-top: 10px;
    width: 18px;
    height: 18px;
    position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
`;
const Divider = styled.div`
    height: 1px;
    background-color: var(--Grey-900, #dcdfe3);
    width: 100%;
    margin: 13px 0px 0px 0px;
`;
const Text = styled.div`
    max-width: 550px;
    text-align: center;
    height: 350px;
    overflow: scroll;
    text-overflow: scroll;
`;
