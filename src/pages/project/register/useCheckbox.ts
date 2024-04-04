import { useState } from 'react';

interface ICheckbox {
    id: number;
    isChecked: boolean;
    label: string;
}

function useCheckbox(initialList: ICheckbox[]) {
    const [checkboxList, setCheckboxList] = useState<ICheckbox[]>(initialList);
    const [defaultDone, setDefaultDone] = useState<boolean>(false);

    // 체크를 했을 때 실행되는 함수
    const checkHandler = (id: number, checked: boolean) => {
        const updatedList = checkboxList.map(item =>
            item.id === id ? { ...item, isChecked: checked } : item,
        );
        setCheckboxList(updatedList);

        return updatedList;
    };

    const checkDefaultHandler = (idList: number[]) => {
        const updatedList = checkboxList.map(item =>
            idList.includes(item.id) ? { ...item, isChecked: true } : item,
        );
        setCheckboxList(updatedList);
        setDefaultDone(true);

        return updatedList;
    };

    return {
        checkboxList,
        checkHandler,
        checkDefaultHandler,
        defaultDone,
    };
}

export default useCheckbox;
