import React from 'react';
import { OptionType } from '../signUp/DropDown';
import Select, { components } from 'react-select';
import { ReactComponent as Arrow } from '../../img/arrow.svg';

const orderOptions = [
    { value: 1, label: '최신순' },
    { value: 2, label: '좋아요순' },
    { value: 3, label: '댓글순' },
];

interface OrderProp {
    onOrderChange: any;
}

const OrderDropDown: React.FC<OrderProp> = ({ onOrderChange }) => {
    const handleSortChange = (selectedOption: OptionType | null) => {
        if (!selectedOption) return;

        let orderValue;
        switch (selectedOption.value) {
            case 1:
                orderValue = 'CREATED_DATE_ORDER';
                break;
            case 2:
                orderValue = 'LIKE_COUNT_ORDER';
                break;
            case 3:
                orderValue = 'COMMENT_COUNT_ORDER';
                break;
            default:
                orderValue = 'CREATED_DATE_ORDER';
                break;
        }

        onOrderChange(orderValue);
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
        <div>
            <Select
                options={orderOptions}
                styles={orderStyle}
                isSearchable={false}
                placeholder="최신순"
                components={{ DropdownIndicator }}
                maxMenuHeight={136}
                onChange={handleSortChange}
                blurInputOnSelect={true}
            />
        </div>
    );
};

export default OrderDropDown;

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
        color: 'var(--Grey-900, #212224)',
        fontWeight: '500',
        border: state.isFocused
            ? ' 1px solid transparent'
            : '1px solid transparent',
        width: state.isFocused ? '106px' : '106px',
        height: state.isFocused ? '24px' : '24px',
        borderRadius: '6px',
        backgroundColor: 'white',
        boxShadow: '0 0 0 0px transparent',
        '&:hover': {
            borderColor: 'transparent',
            border: '1px solid transparent',
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
        width: '98px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        padding: '4px',
        paddingLeft: '20px',
        fontFamily: 'Pretendard',
        fontSize: '16px',
        fontWeight: '500',
        width: '98px',
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
