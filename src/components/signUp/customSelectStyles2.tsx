/* 지역 select 스타일 부분 */

export const customSelectStyles2 = {
    menuList: (provided: any) => ({
        ...provided,
        backgroundColor: 'white',
        maxHeight: '133px',
        width: '318px', // 너비 조정
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
        width: state.isFocused ? '310px' : '310px',
        height: '41px',
        color: state.isSelected ? 'black' : 'black',
        borderRadius:
            state.isFocused || state.isSelected ? '4px' : provided.borderRadius,
        backgroundColor: state.isFocused
            ? '#EAECEE'
            : state.isSelected
            ? '#EAECEE' // 선택된 옵션 회색으로 설정
            : provided.backgroundColor,
    }),
    control: (provided: any, state: any) => ({
        ...provided,
        fontFamily: 'Pretendard',
        fontSize: '16PX',
        border: state.isFocused ? ' 1px solid #ff7710' : '1px solid #ff7710',
        borderRadius: '5px',
        backgroundColor: 'white',
        borderColor: 'var(--grey-300, #EAECEE)',
        '&:hover': {
            borderColor: 'var(--grey-300, #EAECEE)',
            border: '1px solid #ff7710',
        },
    }),
    dropdownIndicator: (provided: any) => ({
        ...provided,
        color: '#2c3e50',
    }),
};
