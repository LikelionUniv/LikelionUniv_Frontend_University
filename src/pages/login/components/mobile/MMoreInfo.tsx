import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import * as MI from './MMoreInfo.style';
import SignupModal from './SignupModal';
import { axiosInstance } from '../../../../api/axios';
import { LoginComplete } from '../LoginComplete';
import DropDownOrdinal from '../../../signUp/components/DropDownOrdinal';

interface IForm {
    name: string;
    universityName: string;
    major: string;
}

function MMoreInfo() {
    const trackOptions = [
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

    const [universityName, setUniversityName] = useState('학교');
    const [ordinalNumber, setOrdinalNumber] = useState<undefined | number>(
        undefined,
    );
    const [modalOpen, setModalOpen] = useState(false);
    const { provider } = useParams();
    const [isSuccess, updateIsSuccess] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { isValid },
    } = useForm<IForm>();

    const requestSignup = async (data: IForm) => {
        const idtoken = localStorage.getItem('idtoken');

        try {
            const response = await axiosInstance.post(
                `/api/v1/auth/${provider}/signup?idtoken=${idtoken}`,
                data,
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

    const handleSelect = (univName: string) => {
        setUniversityName(univName);
        setValue('universityName', univName);
        setModalOpen(false);
    };

    const onSubmit = (data: IForm) => {
        if (!ordinalNumber) return;
        const totalData = { ...data, ordinal: ordinalNumber };

        requestSignup(totalData);
    };

    const handleOrdinal = (e: any) => {
        setOrdinalNumber(e.value);
    };
    if (isSuccess) return <LoginComplete />;
    return (
        <>
            <MI.Container>
                <MI.SubHeader>내 정보</MI.SubHeader>
                <MI.Form onSubmit={handleSubmit(onSubmit)}>
                    <MI.Field>
                        <MI.Label>이름</MI.Label>
                        <MI.Input
                            type="text"
                            placeholder="자신의 이름을 작성해주세요."
                            {...register('name', { required: true })}
                        />
                    </MI.Field>
                    <MI.Field>
                        <MI.Label>학교</MI.Label>
                        <MI.Input
                            placeholder={universityName}
                            {...register('universityName', { required: true })}
                            onClick={() => {
                                setModalOpen(true);
                            }}
                        />
                        <SignupModal
                            isOpen={modalOpen}
                            onSelect={handleSelect}
                            onClose={() => setModalOpen(false)}
                        />
                    </MI.Field>
                    <MI.Field>
                        <MI.Label>학과</MI.Label>
                        <MI.Input
                            type="text"
                            placeholder="학과"
                            {...register('major', { required: true })}
                        />
                    </MI.Field>
                    <MI.Field>
                        <MI.Label>기수</MI.Label>
                        <DropDownOrdinal
                            options={trackOptions}
                            onChange={handleOrdinal}
                            placeholder={'기수를 선택해주세요.'}
                        />
                    </MI.Field>

                    <MI.SaveBtn
                        type="submit"
                        active={isValid && ordinalNumber !== undefined}
                    >
                        저장하기
                    </MI.SaveBtn>
                </MI.Form>
            </MI.Container>
        </>
    );
}

export default MMoreInfo;
