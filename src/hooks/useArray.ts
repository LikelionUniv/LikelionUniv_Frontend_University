import { useState, useCallback } from 'react';

function useArray<T>(initialArray: T[]) {
    const [array, setArray] = useState<T[]>(initialArray)

    const push = useCallback((element: T) => {
        setArray(prev => [...prev, element])
    }, [])

    const pushMany = useCallback((elements: T[]) => {
        setArray(prev => [...prev, ...elements])
    }, [])

    const filter = useCallback((callback: any) => (
        setArray(prev => prev.filter(callback))
    ), [])

    const update = useCallback((index: number, newElement: T) => {
        setArray(prev => [
            ...prev.slice(0, index),
            newElement,
            ...prev.slice(index + 1, prev.length),
        ])
    }, [])

    const remove = useCallback((index: number) => {
        setArray(prev => [...prev.slice(0, index), ...prev.slice(index + 1, prev.length)])
    }, [])

    const clear = useCallback(() => {
        setArray([])
    }, [])

    return {array, set: setArray, push, pushMany, filter, update, remove, clear}
}

export default useArray
