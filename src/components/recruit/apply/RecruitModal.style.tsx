import Modal from 'react-modal';
import styled from 'styled-components';

export const customStyles: Modal.Styles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
    },
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        maxWidth: '688px',
        width: '100%',
        height: '562px',
        flexShrink: '0',
        transform: 'translate(-50%, -50%)',
        background: 'white',
        borderRadius: '20px',
        padding: 0,
        boxShadow: '0px 12px 20px 0px rgba(0, 0, 0, 0.07)',
        boxSizing: 'border-box',
        overflowY: 'hidden',
    },
};

export const ModalHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 56px;
    padding: 0 16px;

    border-bottom: 1px solid var(--Grey-400, #dcdfe3);
    box-sizing: border-box;
`;

export const ModalTitle = styled.div`
    color: var(--Grey-900, #212224);
    text-align: center;

    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

export const Blank = styled.div`
    width: 10px;
    height: 10px;
`;

export const Close = styled.img`
    &:hover {
        cursor: pointer;
    }
`;

export const Content = styled.section`
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 48px 32px 44px 40px;

    box-sizing: border-box;
`;

export const Title = styled.div`
    margin-bottom: 24px;

    color: var(--Grey-900, #212224);

    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
`;

export const Btn = styled.button<{ active: boolean }>`
    display: flex;
    width: 100%;

    margin-top: 48px;
    padding: 17px 32px;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 8px;
    background: ${props => (props.active ? '#FF7710' : '#212224')};

    color: var(--White, #fff);
    text-align: center;

    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;

    box-sizing: border-box;

    &:hover {
        cursor: pointer;
    }
`;
