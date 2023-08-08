// 역할, 트랙 select 스타일
const roleTrackStyle = {
    indicatorSeparator: () => ({
        backgroundColor: 'transparent',
    }),
    valueContainer: () => ({
        display: 'flex',
        paddingLeft: '10px',
    }),
    placeholder: () => ({
        color: 'var(--grey-600, #adb3ba)',
    }),
    control: (provided: any, state: any) => ({
        ...provided,
        fontFamily: 'Pretendard',
        fontSize: '16px',
        fontWeight: '500',
        paddingLeft: '6px',
        border: state.isFocused
            ? ' 1px solid #ff7710'
            : '1px solid var(--grey-400, #DCDFE3)',
        width: state.isFocused ? '138px' : '138px',
        height: state.isFocused ? '48px' : '48px',
        borderRadius: '6px',
        backgroundColor: 'white',
        boxShadow: '0 0 0 0px transparent',
        '&:hover': {
            borderColor: '#ff7710',
            border: '1px solid #ff7710',
        },
    }),
    menu: (provided: any) => ({
        ...provided,
        borderRadius: '6px',
        boxShadow: '0 0 0 0px transparent',
        border: '1px solid var(--grey-400, #DCDFE3)',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }),
    menuList: (provided: any) => ({
        ...provided,
        backgroundColor: 'transparent',
        maxHeight: '136px', // gap을 반영한 스크롤 없는 최소 높이
        width: '138px', // 너비 조정
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        padding: '4px',
        paddingLeft: '12px',
        fontFamily: 'Pretendard',
        fontSize: '16px',
        fontWeight: '500',
        width: '128px',
        height: '40px',
        color: 'var(--grey-900, #212224)',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        flexShrink: 0,
        backgroundColor: state.isFocused
            ? 'var(--grey-300, #EAECEE)'
            : state.isSelected
            ? 'var(--grey-300, #EAECEE)'
            : provided.backgroundColor,
        '&:active': {
            backgroundColor: 'var(--grey-400, #DCDFE3)',
        },
    }),
};

// 기수 select 스타일
const genStyle = {
    ...roleTrackStyle,
    menu: (provided: any) => ({
        ...provided,
        borderRadius: '6px',
        boxShadow: '0 0 0 0px transparent',
        border: '1px solid var(--grey-400, #DCDFE3)',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
    }),
    menuList: (provided: any) => ({
        ...provided,
        backgroundColor: 'transparent',
        maxHeight: '136px',
        width: '133px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        paddingLeft: '4px',
        '::-webkit-scrollbar': {
            width: '4px',
        },
        '::-webkit-scrollbar-track': {
            margin: '4px 0',
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
        padding: '4px',
        paddingLeft: '12px',
        fontFamily: 'Pretendard',
        fontSize: '16px',
        fontWeight: '500',
        width: '122px',
        height: '40px',
        color: 'var(--grey-900, #212224)',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        flexShrink: 0,
        backgroundColor: state.isFocused
            ? 'var(--grey-300, #EAECEE)'
            : state.isSelected
            ? 'var(--grey-300, #EAECEE)'
            : provided.backgroundColor,
        '&:active': {
            backgroundColor: 'var(--grey-400, #DCDFE3)',
        },
    }),
};
const schoolStyle = {
    ...genStyle,
    control: (provided: any, state: any) => ({
        ...provided,
        fontFamily: 'Pretendard',
        fontSize: '16px',
        fontWeight: '500',
        paddingLeft: '6px',
        border: state.isFocused
            ? ' 1px solid #ff7710'
            : '1px solid var(--grey-400, #DCDFE3)',
        width: '464px',
        height: state.isFocused ? '48px' : '48px',
        borderRadius: '6px',
        backgroundColor: 'white',
        boxShadow: '0 0 0 0px transparent',
        '&:hover': {
            borderColor: '#ff7710',
            border: '1px solid #ff7710',
        },
    }),
    menuList: (provided: any) => ({
        ...provided,
        backgroundColor: 'transparent',
        maxHeight: '353px',
        width: '316px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        paddingLeft: '4px',
        marginRight: '3.5px',
        paddingTop: '0',
        paddingBottom: '0',
        marginTop: '4px',
        '::-webkit-scrollbar': {
            width: '4px',
        },
        '::-webkit-scrollbar-track': {
            marginTop: '4px',
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
        padding: '4px',
        paddingLeft: '12px',
        fontFamily: 'Pretendard',
        fontSize: '16px',
        fontWeight: '500',
        width: '305px',
        height: '40px',
        color: 'var(--grey-900, #212224)',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        flexShrink: 0,
        backgroundColor: state.isFocused
            ? 'var(--grey-300, #EAECEE)'
            : state.isSelected
            ? 'var(--grey-300, #EAECEE)'
            : provided.backgroundColor,
        '&:active': {
            backgroundColor: 'var(--grey-400, #DCDFE3)',
        },
    }),
};

export { roleTrackStyle, genStyle, schoolStyle };
