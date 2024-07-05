import React, { Component } from 'react';
import * as A from './SelectedOptionStyle';

interface SelectedOptionProps {
    option: string;
    optionText: string;
    width: number;
    handleCancelOption: (option: string) => void;
}

const SelectedOption: React.FC<SelectedOptionProps> = ({
    option,
    optionText,
    width,
    handleCancelOption,
}) => {
    return (
        <A.SelectedOptionsWrapper key={option}>
            <A.SelectedOption>
                <A.SelectedLabel width={width}>{optionText}</A.SelectedLabel>
                <A.StyledCancelIcon
                    onClick={() => handleCancelOption(option)}
                />
            </A.SelectedOption>
        </A.SelectedOptionsWrapper>
    );
};

export default SelectedOption;
