import Select, { components } from 'react-select';
import { MypageOptionType } from './type';
import { ReactComponent as Arrow } from '../../img/arrow.svg';
import { startTransition, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { likeOptionAtom } from '../../atoms/mypageData';

interface SortType {
    select: string;
}

export const options: MypageOptionType[] = [
    { value: 'created_date', label: '최신순' },
    { value: 'like', label: '좋아요순' },
    { value: 'comment', label: '댓글순' },
];

const SortBox = (props: SortType) => {
    const [selectOption, setSelectedOption] = useRecoilState(likeOptionAtom);
    useEffect(() => {
        setSelectedOption({
            ...selectOption,
            sortData: null,
        });
    }, [props.select]);

    const handleSortChange = (selectedOption: MypageOptionType | null) => {
        startTransition(() => {
            setSelectedOption({
                ...selectOption,
                sortData: selectedOption,
            });
        });

        if (!selectedOption) return;
    };

    const DropdownIndicator = (props: any) => {
        return (
            <components.DropdownIndicator {...props}>
                <Arrow
                    style={{
                        transform: props.selectProps.menuIsOpen
                            ? 'rotate(0deg)'
                            : 'rotate(180deg)',
                        stroke: props.selectProps.menuIsOpen
                            ? '#212224'
                            : '#212224',
                    }}
                ></Arrow>
            </components.DropdownIndicator>
        );
    };

    return (
        <>
            <Select
                options={options}
                value={selectOption.sortData}
                styles={orderStyle}
                isSearchable={false}
                placeholder="최신순"
                components={{ DropdownIndicator }}
                maxMenuHeight={136}
                onChange={handleSortChange}
                blurInputOnSelect={true}
            />
        </>
    );
};

export default SortBox;

const orderStyle = {
    indicatorSeparator: () => ({
        backgroundColor: 'transparent',
    }),
    // valueContainer: () => ({
    //     display: 'flex',
    // }),
    placeholder: () => ({
        color: 'var(--Grey-900, #212224)',
        fontSize: '16px',
        marginTop: '-20px',
    }),
    control: (provided: any, state: any) => ({
        ...provided,
        paddingLeft: '2px',
        fontFamily: 'Pretendard',
        fontSize: '16px',
        fontWeight: '500',
        border: '1px solid var(--grey-400, #DCDFE3)',
        width: state.isFocused ? '106px' : '106px',
        height: state.isFocused ? '40px' : '40px',
        borderRadius: '6px',
        backgroundColor: 'white',
        boxShadow: '0 0 0 0px transparent',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            border: '1px solid var(--grey-400, #DCDFE3)',
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
        width: '106px',
    }),
    menuList: (provided: any) => ({
        ...provided,
        backgroundColor: 'transparent',
        maxHeight: '136px',
        width: '100px',
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
        width: '100px',
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
