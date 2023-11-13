import { useState } from 'react';

interface useModalReturn {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

function useModal(): useModalReturn {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return { isModalOpen, openModal, closeModal };
}

export default useModal;
