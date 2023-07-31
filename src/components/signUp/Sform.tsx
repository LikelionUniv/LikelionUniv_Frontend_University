import styled from 'styled-components';
import '../../styles/signUp.css';
import DropDown from '../signUp/DropDown';
import SchoolDrop from './SchoolDrop';
import { useState } from 'react';
import { ActionMeta } from 'react-select';
import { OptionType } from '../signUp/DropDown';

const Ndiv = styled.div`
    color: var(--black, #000);
    /* Subtitle/18_Medium */
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 27px */
    margin-bottom: 12px;
`;

const Nform = styled.input`
    width: 464px;
    height: 48px;
    font-family: Pretendard;
    font-size: 16px;
    border-radius: 6px;
    border: 1px solid var(--grey-400, #dcdfe3);
    background: var(--white, #fff);
    margin-bottom: 34px;
    box-sizing: border-box;
    padding: 0 24px 0 24px;
`;

/* dropdown option 부분 */
const genOptions: { value: number; label: string }[] = [];
for (let i = 11; i >= 1; i--) {
    genOptions.push({ value: i, label: `${i}기` });
}

const trackOptions = [
    { value: 1, label: '기획디자인' },
    { value: 2, label: '프론트엔드' },
    { value: 3, label: '백엔드' },
];

const roleOptions = [
    { value: 1, label: '대표' },
    { value: 2, label: '운영진' },
    { value: 3, label: '아기사자' },
];

/* form type */
interface FormState {
    name: string;
    university: string;
    department: string;
    generation: number;
    role: number;
    track: number;
}

const Sform = () => {
    const [formState, setFormState] = useState<FormState>({
        name: '',
        university: '',
        department: '',
        generation: 0,
        role: 0,
        track: 0,
    });

    const handleSelectChange =
        (field: keyof FormState) =>
        (
            selectedOption: OptionType | null,
            actionMeta: ActionMeta<OptionType>
        ) => {
            if (selectedOption) {
                setFormState((prev) => ({
                    ...prev,
                    [field]: selectedOption.value,
                }));
            }
        };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        /* button click으로 해서 정보 저장됨 확인 */
        console.log(formState);
    };

    return (
        <>
            <form className="formDiv">
                <div className="Stitle">내 정보</div>

                <Ndiv>이름</Ndiv>
                <Nform
                    placeholder="자신의 이름을 작성해주세요."
                    value={formState.name}
                    onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                    }
                />
                <Ndiv>학교</Ndiv>
                <SchoolDrop
                    selectedUniversity={formState.university}
                    onChange={(selectedUniversity) =>
                        setFormState({
                            ...formState,
                            university: selectedUniversity,
                        })
                    }
                />
                <Ndiv>학과</Ndiv>
                <Nform
                    placeholder="학과를 입력해주세요."
                    value={formState.department}
                    onChange={(e) =>
                        setFormState({
                            ...formState,
                            department: e.target.value,
                        })
                    }
                />

                <div className="SformDiv">
                    <div className="SfromDiv2">
                        <Ndiv>기수</Ndiv>
                        <DropDown
                            options={genOptions}
                            onChange={handleSelectChange('generation')}
                        />
                    </div>
                    <div className="SfromDiv2">
                        <Ndiv>역할</Ndiv>
                        <DropDown
                            options={roleOptions}
                            onChange={handleSelectChange('role')}
                        />
                    </div>
                    <div className="SfromDiv2">
                        <Ndiv>트랙</Ndiv>
                        <DropDown
                            options={trackOptions}
                            onChange={handleSelectChange('track')}
                        />
                    </div>
                </div>

                <button className="saveBtn" onClick={handleSubmit}>
                    저장하기
                </button>
            </form>
        </>
    );
};

export default Sform;
