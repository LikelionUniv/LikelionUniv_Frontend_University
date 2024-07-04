import * as M from './ApplicationModalStyle';
import Line from '../../../img/recruit/line.svg';

interface ApplicationModalProps {
    isOpen: boolean;
    closeModal: () => void;
    onSubmit: () => void;
    header: string;
    title: string;
    content: string;
    content2?: string;
    button: string;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({
    isOpen,
    closeModal,
    onSubmit,
    header,
    title,
    content,
    content2,
    button,
}) => {
    return (
        <M.Overlay>
            <M.Content>
                <M.ModalHeader>
                    <M.HeaderName> {header} </M.HeaderName>
                    <M.StyledCloseIcon onClick={closeModal} />
                </M.ModalHeader>
                <img src={Line} alt="-" />
                <M.ModalTitle>{title}</M.ModalTitle>
                <M.ModalText>{content}</M.ModalText>
                <M.ModalGraphic />
                <M.ButtonDiv>
                    <M.DeleteButton onClick={closeModal}>
                        취소하기
                    </M.DeleteButton>
                    <M.Button onClick={() => onSubmit()}>{button}</M.Button>
                </M.ButtonDiv>
            </M.Content>
        </M.Overlay>
    );
};

export default ApplicationModal;
