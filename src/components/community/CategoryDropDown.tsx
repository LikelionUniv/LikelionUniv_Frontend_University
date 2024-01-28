import React from 'react';
import Select, { components, MenuListProps } from 'react-select';
import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../img/community/arrow_gray.svg';

interface OptionType {
    value: number;
    label: string;
    isDisabled: boolean;
    mainCategory: string;
    subCategory: string;
}

const orderOptions: OptionType[] = [
    {
        value: 1,
        label: '전체 게시판',
        isDisabled: false,
        mainCategory: '전체 게시판',
        subCategory: '전체 게시판',
    },
    {
        value: 2,
        label: '멋대 중앙',
        isDisabled: true,
        mainCategory: '전체 게시판',
        subCategory: '전체 게시판',
    },
    {
        value: 3,
        label: '공지사항',
        isDisabled: false,
        mainCategory: '멋대 중앙',
        subCategory: '공지사항',
    },
    {
        value: 4,
        label: '질문건의',
        isDisabled: false,
        mainCategory: '멋대 중앙',
        subCategory: '질문건의',
    },
    {
        value: 5,
        label: '정보공유',
        isDisabled: false,
        mainCategory: '멋대 중앙',
        subCategory: '정보공유',
    },
    {
        value: 6,
        label: '자유게시판',
        isDisabled: true,
        mainCategory: '전체',
        subCategory: '전체',
    },
    {
        value: 7,
        label: '정보공유',
        isDisabled: false,
        mainCategory: '자유게시판',
        subCategory: '정보공유',
    },
    {
        value: 8,
        label: '팀원모집',
        isDisabled: false,
        mainCategory: '자유게시판',
        subCategory: '팀원모집',
    },
    {
        value: 9,
        label: '플젝모집',
        isDisabled: false,
        mainCategory: '자유게시판',
        subCategory: '플젝모집',
    },
    {
        value: 10,
        label: '플젝자랑',
        isDisabled: false,
        mainCategory: '자유게시판',
        subCategory: '플젝자랑',
    },
    {
        value: 11,
        label: '멋사 오버플로우',
        isDisabled: true,
        mainCategory: '전체',
        subCategory: '전체',
    },
    {
        value: 12,
        label: '프론트',
        isDisabled: false,
        mainCategory: '멋사 오버플로우',
        subCategory: '프론트',
    },
    {
        value: 13,
        label: '백',
        isDisabled: false,
        mainCategory: '멋사 오버플로우',
        subCategory: '백',
    },
    {
        value: 14,
        label: '기획',
        isDisabled: false,
        mainCategory: '멋사 오버플로우',
        subCategory: '기획',
    },
    {
        value: 15,
        label: '디자인',
        isDisabled: false,
        mainCategory: '멋사 오버플로우',
        subCategory: '디자인',
    },
    {
        value: 16,
        label: '기타',
        isDisabled: false,
        mainCategory: '멋사 오버플로우',
        subCategory: '기타',
    },
];

interface OrderProp {
    onCategoryChange: (mainCategory: string, subCategory: string) => void;
    mainCategory: string;
    subCategory: string;
}

const DropdownDivider = styled.div`
    width: 80%;
    border: 0.5px solid #dcdfe3;
    padding: 0 10px;
`;

const CustomMenuList: React.FC<MenuListProps<any, false>> = props => {
    const childrenArray = React.Children.toArray(props.children);
    return (
        <components.MenuList {...props}>
            {childrenArray.slice(0, 1)}
            <DropdownDivider />
            {childrenArray.slice(1, 5)}
            <DropdownDivider />
            {childrenArray.slice(5, 10)}
            <DropdownDivider />
            {childrenArray.slice(10)}
        </components.MenuList>
    );
};

const DropdownIndicator = (props: any) => {
    return (
        <components.DropdownIndicator {...props}>
            <Arrow
                style={{
                    transform: props.selectProps.menuIsOpen
                        ? 'rotate(180deg)'
                        : 'rotate(0deg)',
                }}
            />
        </components.DropdownIndicator>
    );
};

const CategoryDropDown: React.FC<OrderProp> = ({
    onCategoryChange,
    mainCategory,
    subCategory,
}) => {
    const selectedOption = orderOptions.find(
        option =>
            option.mainCategory === mainCategory &&
            option.subCategory === subCategory,
    );

    const handleCategoryChange = (selectedOption: OptionType | null) => {
        if (!selectedOption || selectedOption.isDisabled) return;
        onCategoryChange(
            selectedOption.mainCategory,
            selectedOption.subCategory,
        );
    };

    return (
        <Select
            options={orderOptions}
            styles={orderStyle}
            isSearchable={false}
            value={selectedOption}
            components={{ DropdownIndicator, MenuList: CustomMenuList }}
            maxMenuHeight={136}
            onChange={handleCategoryChange}
            blurInputOnSelect={true}
            isOptionDisabled={option => option.isDisabled}
        />
    );
};

export default CategoryDropDown;

const orderStyle = {
    indicatorSeparator: () => ({
        backgroundColor: 'transparent',
    }),
    valueContainer: () => ({
        display: 'flex',
    }),
    placeholder: () => ({
        color: 'var(--Grey-900, #212224)',
        fontSize: '16px',
    }),
    control: (provided: any, state: any) => ({
        ...provided,
        fontFamily: 'Pretendard',
        fontSize: '16px',
        fontWeight: '500',
        padding: '4px 0px 8px 16px',
        border: state.isFocused
            ? '1px solid var(--Grey-400, #DCDFE3)'
            : '1px solid var(--Grey-400, #DCDFE3)',
        width: state.isFocused ? '180px' : '180px',
        height: state.isFocused ? '40px' : '40px',
        borderRadius: '6px',
        backgroundColor: 'white',
        boxShadow: '0 0 0 0px transparent',
        '&:hover': {
            borderColor: '#DCDFE3',
            border: '1px solid #DCDFE3',
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
        width: '180px',
    }),
    menuList: (provided: any) => ({
        ...provided,
        backgroundColor: 'transparent',
        maxHeight: '320px',
        width: '180px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        '::-webkit-scrollbar': {
            width: '4px',
            height: '40px',
            borderRadius: '3px',
            background: 'var(--Grey-500, #D1D4D8)',
        },
        '::-webkit-scrollbar-track': {
            background: '#FFF',
        },
        '::-webkit-scrollbar-thumb': {
            background: '#D1D4D8',
        },
        '::-webkit-scrollbar-thumb:hover': {
            background: '#D1D4D8',
        },
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        padding: '4px',
        paddingLeft: '16px',
        fontFamily: 'Pretendard',
        fontSize: state.isDisabled ? '14px' : '16px',
        fontWeight: state.isDisabled ? '700' : '500',
        width: '164px',
        height: '40px',
        color: state.isDisabled ? '#ADB3BA' : 'var(--grey-900, #212224)',
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
