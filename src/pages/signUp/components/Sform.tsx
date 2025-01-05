import styled from 'styled-components';
import './signUp.css';
import SchoolDropDown from './SchoolDropDown';
import { useState } from 'react';
import { ActionMeta } from 'react-select';
import DropDownOrdinal, { OptionType } from './DropDownOrdinal';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../../../api/axios';
import { LoginComplete } from '../../login/components/LoginComplete';

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

/* dropdown option 부분 */
const genOptions: { value: number; label: string }[] = [];
for (let i = 11; i >= 1; i--) {
    genOptions.push({ value: i, label: `${i}기` });
}

const trackOptions = [
    { value: 0, label: '알럼나이' },
    { value: 1, label: '1기' },
    { value: 2, label: '2기' },
    { value: 3, label: '3기' },
    { value: 4, label: '4기' },
    { value: 5, label: '5기' },
    { value: 6, label: '6기' },
    { value: 7, label: '7기' },
    { value: 8, label: '8기' },
    { value: 9, label: '9기' },
    { value: 10, label: '10기' },
    { value: 11, label: '11기' },
    { value: 12, label: '12기' },
    { value: 13, label: '13기' },
];

const roleOptions = [
    { value: 1, label: '대표' },
    { value: 2, label: '운영진' },
    { value: 3, label: '아기사자' },
];

/* form type */
interface FormState {
    name: string;
    universityName: string;
    major: string;
}

const Sform = () => {
    const [formState, setFormState] = useState<FormState>({
        name: '',
        universityName: '',
        major: '',
    });

    const handleSelectChange =
        (field: keyof FormState) =>
        (
            selectedOption: OptionType | null,
            actionMeta: ActionMeta<OptionType>,
        ) => {
            if (selectedOption) {
                let label: string;
                if (field === 'universityName') {
                    label = selectedOption.label;
                }
                setFormState(prev => ({
                    ...prev,
                    [field]: label,
                }));
            }
        };

    const { provider } = useParams();
    const [isSuccess, updateIsSuccess] = useState<boolean>(false);

    const requestSignup = async () => {
        const idtoken = localStorage.getItem('idtoken');
        try {
            const response = await axiosInstance.post(
                `/api/v1/auth/${provider}/signup?idtoken=${idtoken}`,
                formState,
            );
            //응답 성공 시
            if (response.data.isSuccess) {
                localStorage.removeItem('idtoken');
                updateIsSuccess(true);
            } else {
                alert('서버 통신 오류! 다시 시도해주세요!');
            }
        } catch (error) {
            console.error('요청 실패', error);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 모든 필드 완성되었는지 검사하는 로직 추가함
        if (
            formState.name === '' ||
            formState.universityName === '' ||
            formState.major === ''
            // formState.generation === 0 ||
            // formState.role === 0 ||
            // formState.track === 0
        )
            alert('모든 항목을 입력했는지 확인해주세요.');
        else {
            /* button click으로 해서 정보 저장됨 확인 */
            // console.log(formState);
            requestSignup();
        }
    };

    const handleOrdinal = () => {};

    return (
        <>
            {!isSuccess ? (
                <form className="formDiv">
                    <div className="Stitle">내 정보</div>
                    <Ndiv>이름</Ndiv>
                    <Nform
                        placeholder="자신의 이름을 작성해주세요."
                        value={formState.name}
                        onChange={e =>
                            setFormState({ ...formState, name: e.target.value })
                        }
                    />
                    <Ndiv>학교</Ndiv>
                    <SchoolDropDown
                        onChange={handleSelectChange('universityName')}
                    />
                    <Ndiv>학과</Ndiv>
                    <Nform
                        placeholder="학과를 입력해주세요."
                        value={formState.major}
                        onChange={e =>
                            setFormState({
                                ...formState,
                                major: e.target.value,
                            })
                        }
                    />

                    <Ndiv>기수 선택</Ndiv>
                    {/* <Wapper> */}
                    <DropDownOrdinal
                        options={trackOptions}
                        onChange={handleOrdinal}
                        placeholder={'기수를 선택해주세요.'}
                    />
                    {/* </Wapper> */}
                    <button className="saveBtn" onClick={handleSubmit}>
                        저장하기
                    </button>
                </form>
            ) : (
                <LoginComplete />
            )}
        </>
    );
};

const Wapper = styled.div`
    background-color: red;
    & > div {
        width: 100%;
    }
`;
export default Sform;
