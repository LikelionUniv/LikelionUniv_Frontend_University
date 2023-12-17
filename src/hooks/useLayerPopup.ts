import { type RefObject, useEffect, useState, useCallback } from 'react';

interface useLayerPopupReturn {
    popupOpen: boolean;
    closePopup: () => void;
    openPopup: () => void;
}

function useLayerPopup(
    ref: RefObject<HTMLDivElement>,
    additionalWork: () => void = () => {},
): useLayerPopupReturn {
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            if (
                ref.current == null ||
                !ref.current.contains(event.target as HTMLElement)
            ) {
                setOpen(false);
                additionalWork();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    const closePopup = useCallback(() => {
        setOpen(false);
    }, []);

    const openPopup = useCallback(() => {
        setOpen(true);
    }, []);

    return {
        popupOpen: open,
        closePopup,
        openPopup,
    };
}

export default useLayerPopup;
