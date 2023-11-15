import { useState } from 'react';

function useCheckbox(
    initialList: { id: number; isChecked: boolean; label: string }[],
) {
    const [checkboxList, setCheckboxList] =
        useState<{ id: number; isChecked: boolean; label: string }[]>(
            initialList,
        );

    // 체크를 했을 때 실행되는 함수
    const checkHandler = (id: number, checked: boolean) => {
        const updatedList = checkboxList.map(item =>
            item.id === id ? { ...item, isChecked: checked } : item,
        );
        setCheckboxList(updatedList);

        return updatedList;
    };

    return {
        checkboxList,
        checkHandler,
    };
}

export default useCheckbox;
