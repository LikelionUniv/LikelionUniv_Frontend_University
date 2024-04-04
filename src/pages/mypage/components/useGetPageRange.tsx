const useGetPageRange = (pageRange: number) => {
    const totalPageRange: number[] = [
        5 * pageRange - 4,
        5 * pageRange - 3,
        5 * pageRange - 2,
        5 * pageRange - 1,
        5 * pageRange,
    ];

    return totalPageRange;
};

export default useGetPageRange;
