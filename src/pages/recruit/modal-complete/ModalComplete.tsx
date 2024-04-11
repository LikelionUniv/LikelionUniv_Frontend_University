import React from 'react';
import * as MC from './ModalComplete.style';
import Complete from '../../../img/recruit/complete.png';

const constants = {
    text: '모집 알림 신청이 완료되었습니다!',
    btn: '확인',
};

interface IModalComplete {
    closeModal: () => void;
}

function ModalComplete({ closeModal }: IModalComplete) {
    return (
        <MC.Container>
            <MC.Img src={Complete} alt="complete" />
            <MC.Text>{constants.text}</MC.Text>
            <MC.Btn onClick={closeModal}>{constants.btn}</MC.Btn>
        </MC.Container>
    );
}

export default ModalComplete;
