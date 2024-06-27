import { Control, Controller } from 'react-hook-form';
import * as A from './DropdownStyle';

import { ReactComponent as CheckboxCheckedIcon } from '../../img/application/checkboxChecked16.svg';
import { ReactComponent as CheckboxNotCheckedIcon } from '../../img/application/checkboxNotChecked16.svg';

interface DropdownProps {
    isOpen: boolean;
    trackOption: string[];
    control: Control<any>;
}

const Dropdown = ({ isOpen, trackOption, control }: DropdownProps) => {
    if (!isOpen) return null;

    return (
        <A.NdropdownAreaDiv>
            {trackOption.map(track => (
                <Controller
                    key={track}
                    name="part"
                    control={control}
                    render={({ field }) => {
                        const fieldValue = field.value as string[];
                        return (
                            <A.NdropdownListDiv>
                                <A.NdropdownInput
                                    type="checkbox"
                                    value={track}
                                    checked={fieldValue.includes(track)}
                                    onChange={e => {
                                        const newValue = e.target.checked
                                            ? [...fieldValue, track]
                                            : fieldValue.filter(
                                                  value => value !== track,
                                              );
                                        field.onChange(newValue);
                                    }}
                                />
                                <A.StyledCheckbox
                                    checked={fieldValue.includes(track)}
                                    onClick={() => {
                                        const newValue = fieldValue.includes(
                                            track,
                                        )
                                            ? fieldValue.filter(
                                                  value => value !== track,
                                              )
                                            : [...fieldValue, track];
                                        field.onChange(newValue);
                                    }}
                                >
                                    {fieldValue.includes(track) ? (
                                        <CheckboxCheckedIcon />
                                    ) : (
                                        <CheckboxNotCheckedIcon />
                                    )}
                                </A.StyledCheckbox>
                                {track}
                            </A.NdropdownListDiv>
                        );
                    }}
                />
            ))}
        </A.NdropdownAreaDiv>
    );
};

export default Dropdown;
