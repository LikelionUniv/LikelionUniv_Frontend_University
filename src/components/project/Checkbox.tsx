import React from "react";
import styled from "styled-components";
import Check from '../../img/project/check.svg';

interface CheckboxProps {
    label: string;
    checkboxId: number;
    value: number;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox(props: CheckboxProps) {
    return (
      <CheckboxItem>
        <StyledInput
          type="checkbox"
          id={props.checkboxId.toString()}
          name={props.checkboxId.toString()}
          value={props.value}
          checked={props.checked}
          onChange={props.onChange}
          img={Check}
        />
        <CheckboxLabel>{props.label}</CheckboxLabel>
      </CheckboxItem>
      
    );
}

export default Checkbox;

const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxLabel = styled.label`
    margin-left: 8px;
    color: var(--Grey-700, #868C94);

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
`;

const StyledInput = styled.input<{ img: string }>`
  appearance: none;
  width: 15px;
  height: 15px;
  border: 1px solid #DCDFE3;
  border-radius: 3px;

  &:checked {
    font-weight: 900;
    background-position: 50%;
    background-image: url(${props => props.img});
    background-color: #FF7710;
    background-repeat: no-repeat;
    border: none;
  }
`;
