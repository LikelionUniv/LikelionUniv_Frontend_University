/* 아래 3개 select 스타일 부분 */
export const customSelectStyles3 = {
    control: (provided: any, state: any) => ({
        ...provided,
        fontFamily: 'Pretendard',
        fontSize: '16PX',
        border: state.isFocused ? ' 1px solid #ff7710' : '1px solid #ff7710',
        width: state.isFocused ? '138px' : '138px',
        height: state.isFocused ? '48px' : '48px',
        borderRadius: '5px',
        backgroundColor: 'white',
        borderColor: 'var(--grey-300, #EAECEE)',
        '&:hover': {
            borderColor: 'var(--grey-300, #EAECEE)',
            border: '1px solid #ff7710',
        },
    }),
    menuList: (provided: any) => ({
        ...provided,

        backgroundColor: 'white',
        maxHeight: '133px',
        width: '138px', // 너비 조정
        color: 'black',
        // Add this
        '::-webkit-scrollbar': {
            width: '4px',
        },
        '::-webkit-scrollbar-track': {
            borderRadius: '3px',
        },
        '::-webkit-scrollbar-thumb': {
            background: '#D1D4D8',
            borderRadius: '3px',
        },
        '::-webkit-scrollbar-thumb:hover': {
            background: '#D1D4D8',
        },
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        margin: '0 auto',
        fontFamily: 'Pretendard',
        fontSize: '16PX',
        width: state.isFocused ? '130px' : '130px',
        height: '41px',
        color: state.isSelected ? 'black' : 'black',
        borderRadius: state.isFocused ? '4px' : provided.borderRadius,
        backgroundColor: state.isFocused
            ? '#EAECEE'
            : state.isSelected
            ? '#EAECEE' // 선택된 옵션 회색으로 설정
            : provided.backgroundColor,
    }),
};
