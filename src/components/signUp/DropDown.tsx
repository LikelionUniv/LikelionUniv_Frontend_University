import React from 'react';
import Select, { ActionMeta, components } from 'react-select';
import arrow from '../../img/arrow.svg';
import { customSelectStyles3 } from './customSelectStyles3';

export type OptionType = {
    value: number;
    label: string;
};
type DropDownProps = {
    options: OptionType[];
    onChange: (
        selectedOption: OptionType | null,
        actionMeta: ActionMeta<OptionType>,
    ) => void;
};

const DropDown = ({ options, onChange }: DropDownProps) => {
    // DropdownIndicator 컴포넌트 재정의(드롭다운 선택시 화살표 돌아가는)
    const DropdownIndicator = (props: any) => {
        return (
            <components.DropdownIndicator {...props}>
                <img
                    src={arrow}
                    style={{
                        transform: props.selectProps.menuIsOpen
                            ? 'rotate(180deg)'
                            : 'rotate(0deg)',
                    }}
                ></img>
            </components.DropdownIndicator>
        );
    };

    return (
        <Select
            options={options}
            styles={customSelectStyles3}
            placeholder="선택"
            components={{ DropdownIndicator }}
            maxMenuHeight={133}
            onChange={onChange}
        />
    );
};

export default DropDown;
