import { useState, useCallback, ChangeEvent } from 'react';

function useInput<T>(
    initalValue: T,
): [
    T,
    (e: ChangeEvent<HTMLInputElement>) => void,
    React.Dispatch<React.SetStateAction<T>>,
] {
    const [value, setValue] = useState<typeof initalValue>(initalValue);

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value as T);
    }, []);

    return [value, onChange, setValue];
}

export default useInput;
