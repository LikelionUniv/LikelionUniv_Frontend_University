import styled from 'styled-components';
import '../../styles/signUp.css';
import DropDown from '../signUp/DropDown';
import SchoolDropDown from './SchoolDropDown';
import { useState } from 'react';
import { ActionMeta } from 'react-select';
import { OptionType } from '../signUp/DropDown';
import { useParams } from 'react-router-dom';
import { LoginComplete } from '../login/LoginComplete';
import { axiosInstance } from '../../utils/axios';

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
                `${process.env.REACT_APP_BASE_URL}/api/v1/auth/${provider}/signup?idtoken=${idtoken}`,
                formState,
                {
                    withCredentials: true,
                },
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

export default Sform;
