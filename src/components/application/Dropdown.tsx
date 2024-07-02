import React, { useState, useEffect } from 'react';
import { Control, Controller } from 'react-hook-form';
import * as A from './DropdownStyle';
import * as M from './MobileDropdownStyle';
import Line from '../../img/recruit/line.svg';

import { ReactComponent as CheckboxCheckedIcon } from '../../img/application/checkboxChecked16.svg';
import { ReactComponent as CheckboxNotCheckedIcon } from '../../img/application/checkboxNotChecked16.svg';

interface DropdownProps {
    isOpen: boolean;
    trackOption: string[];
    control: Control<any>;
    closeDropdown: () => void;
}

const Dropdown = ({
    isOpen,
    trackOption,
    control,
    closeDropdown,
}: DropdownProps) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleClick = () => {
        closeDropdown();
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    if (!isOpen) return null;

    return (
        <>
            {windowWidth && windowWidth > 767 ? (
                <A.NdropdownAreaDiv>
                    {trackOption.map(track => (
                        <Controller
                            key={track}
                            name="hackathonParts"
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
                                                const newValue = e.target
                                                    .checked
                                                    ? [...fieldValue, track]
                                                    : fieldValue.filter(
                                                          value =>
                                                              value !== track,
                                                      );
                                                field.onChange(newValue);
                                            }}
                                        />
                                        <A.StyledCheckbox
                                            checked={fieldValue.includes(track)}
                                            onClick={() => {
                                                const newValue =
                                                    fieldValue.includes(track)
                                                        ? fieldValue.filter(
                                                              value =>
                                                                  value !==
                                                                  track,
                                                          )
                                                        : [
                                                              ...fieldValue,
                                                              track,
                                                          ];
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
            ) : (
                <M.Overlay>
                    <M.Content>
                        <M.ModalHeader>
                            <M.HeaderName>파트 선택</M.HeaderName>
                            <M.StyledCloseIcon onClick={handleClick} />
                        </M.ModalHeader>
                        <img src={Line} alt="-" />
                        {trackOption.map(track => (
                            <Controller
                                key={track}
                                name="hackathonParts"
                                control={control}
                                render={({ field }) => {
                                    const fieldValue = field.value as string[];
                                    return (
                                        <A.NdropdownListDiv>
                                            <M.NdropdownDiv>
                                                <A.NdropdownInput
                                                    type="checkbox"
                                                    value={track}
                                                    checked={fieldValue.includes(
                                                        track,
                                                    )}
                                                    onChange={e => {
                                                        const newValue = e
                                                            .target.checked
                                                            ? [
                                                                  ...fieldValue,
                                                                  track,
                                                              ]
                                                            : fieldValue.filter(
                                                                  value =>
                                                                      value !==
                                                                      track,
                                                              );
                                                        field.onChange(
                                                            newValue,
                                                        );
                                                    }}
                                                />
                                                <A.StyledCheckbox
                                                    checked={fieldValue.includes(
                                                        track,
                                                    )}
                                                    onClick={() => {
                                                        const newValue =
                                                            fieldValue.includes(
                                                                track,
                                                            )
                                                                ? fieldValue.filter(
                                                                      value =>
                                                                          value !==
                                                                          track,
                                                                  )
                                                                : [
                                                                      ...fieldValue,
                                                                      track,
                                                                  ];
                                                        field.onChange(
                                                            newValue,
                                                        );
                                                    }}
                                                >
                                                    {fieldValue.includes(
                                                        track,
                                                    ) ? (
                                                        <CheckboxCheckedIcon />
                                                    ) : (
                                                        <CheckboxNotCheckedIcon />
                                                    )}
                                                </A.StyledCheckbox>
                                                {track}
                                            </M.NdropdownDiv>
                                        </A.NdropdownListDiv>
                                    );
                                }}
                            />
                        ))}
                    </M.Content>
                </M.Overlay>
            )}
        </>
    );
};

export default Dropdown;
