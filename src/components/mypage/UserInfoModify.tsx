import { useState } from 'react';
import styled from 'styled-components';

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
    university: number;
    description: string;
    generation: number;
    role: number;
    track: number;
}

const UserInfoModify = () => {
    const [formState, setFormState] = useState<FormState>({
        name: '',
        university: 0,
        description: '',
        generation: 0,
        role: 0,
        track: 0,
    });

    // const handleSelectChange =
    //     (field: keyof FormState) =>
    //     (
    //         selectedOption: OptionType | null,
    //         actionMeta: ActionMeta<OptionType>,
    //     ) => {
    //         if (selectedOption) {
    //             setFormState(prev => ({
    //                 ...prev,
    //                 [field]: selectedOption.value,
    //             }));
    //         }
    //     };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 모든 필드 완성되었는지 검사하는 로직 추가함
        if (
            formState.name === '' ||
            formState.university === 0 ||
            formState.description === '' ||
            formState.generation === 0 ||
            formState.role === 0 ||
            formState.track === 0
        )
            alert('모든 항목을 입력했는지 확인해주세요.');
        else {
            /* button click으로 해서 정보 저장됨 확인 */
            console.log(formState);
        }
    };

    return (
        <Wrapper>
            <Form>
                <div className="Stitle">내 정보 수정</div>
                <Ndiv>이름</Ndiv>
                <Nform
                    placeholder="자신의 이름을 작성해주세요."
                    value={formState.name}
                    onChange={e =>
                        setFormState({ ...formState, name: e.target.value })
                    }
                />
                <Ndiv>한 줄 소개</Ndiv>
                <Nformarea
                    placeholder="한 줄 소개글을 작성해보세요."
                    value={formState.description}
                    maxLength={49}
                    onChange={e =>
                        setFormState({
                            ...formState,
                            description: e.target.value,
                        })
                    }
                />
                <p>{formState.description.length}/50</p>
                {/* <Ndiv>학교</Ndiv>
            <SchoolDropDown onChange={handleSelectChange('university')} /> */}

                {/* <div className="SformDiv">
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
            </div> */}
                <button className="saveBtn" onClick={handleSubmit}>
                    저장하기
                </button>
            </Form>
        </Wrapper>
    );
};

export default UserInfoModify;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Form = styled.form`
    width: 465px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;

    & > p {
        color: var(--Grey-600, #adb3ba);
        text-align: right;
        font-size: 16px;
        font-weight: 500;
    }
`;

const Ndiv = styled.div`
    color: var(--black, #000);
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 12px;
`;

const Nform = styled.input`
    width: 464px;
    height: 48px;
    font-family: Pretendard;
    font-size: 16px;
    color: var(--grey-900, #212224);
    font-weight: 500;
    line-height: 150%;
    border-radius: 6px;
    border: 1px solid var(--grey-400, #dcdfe3);
    background: var(--white, #fff);
    margin-bottom: 34px;
    box-sizing: border-box;
    padding: 12px 16px;
    outline: 0;
    &::placeholder {
        color: var(--grey-600, #adb3ba);
    }
    &:focus {
        border: 1px solid var(--orange-600, #ff7710);
    }
`;

const Nformarea = styled.textarea`
    width: 464px;
    height: 100px;
    font-size: 16px;
    color: var(--grey-900, #212224);
    resize: none;
    font-weight: 500;
    line-height: 150%;
    border-radius: 6px;
    border: 1px solid var(--grey-400, #dcdfe3);
    margin-bottom: 8px;
    background: var(--white, #fff);
    padding: 24px 16px;
    outline: 0;
    &::placeholder {
        color: var(--grey-600, #adb3ba);
    }
    &:focus {
        border: 1px solid var(--orange-600, #ff7710);
    }
`;
