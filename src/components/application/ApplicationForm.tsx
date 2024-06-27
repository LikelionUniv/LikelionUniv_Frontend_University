import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as z from 'zod';

import * as A from './ApplicationStyle';
import { applicationSchema } from '../application/ApplicationSchema';
import ApplicationModal from './modal/ApplicationModal';
import SelectedOption from './SelectedOption';
import Dropdown from './Dropdown';
import AddHypen from './AddHypen';

type ApplicationFormType = z.infer<typeof applicationSchema>;

interface ApplicationModalProps {
    isOpen: boolean;
    closeModal: () => void;
    onSubmit: () => void;
    header: string;
    title: string;
    content: string;
    button: string;
}

const trackOption = ['기획', '디자인', '프론트엔드', '백엔드'];

const ApplicationModalTxt = {
    header: '12기 중앙해커톤 참가 신청',
    title: '모든 정보를 정확하게 입력하셨나요?',
    content: '참가신청 내역은 신청 이후 마이페이지에서 수정 가능합니다.',
    button: '신청하기',
};

const ApplicationForm = () => {
    const navigate = useNavigate();
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState<ApplicationFormType | null>(null);

    const {
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        formState: { dirtyFields, errors, isValid },
    } = useForm<ApplicationFormType>({
        mode: 'onChange',
        resolver: zodResolver(applicationSchema),
        defaultValues: {
            part: [],
            phone: '',
        },
    });

    const selectedOption = useWatch({
        control,
        name: 'offline',
    });

    const selectedParts = useWatch({
        control,
        name: 'part',
    });

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const getWidthBasedOnLength = (length: number) => {
        if (length < 3) return 28;
        if (length < 4) return 42;
        if (length >= 4) return 70;
        return 0;
    };

    const handleCancelOption = (option: string) => {
        const newValue = selectedParts.filter(selected => selected !== option);
        setValue('part', newValue.length > 0 ? newValue : []);
    };

    const onSubmit = (data: ApplicationFormType) => {
        setFormData(data);
        setIsModalOpen(true);

        console.log('onSubmit' + data);
    };

    const handleModalSubmit = () => {
        console.log('handleModalSubmit' + formData);
        navigate(`/mypage`);
    };

    return (
        <A.Wrapper>
            <A.Container>
                <A.Stitle>
                    <A.StyledArrowIcon
                        onClick={() => {
                            navigate(-1);
                        }}
                    />
                    12기 중앙 해커톤 참가 신청
                </A.Stitle>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/*                 <form
                    onSubmit={handleSubmit(d => {
                        console.log(d);
                        openmodal();
                    })}
                > */}
                    <A.Ndiv>
                        이름
                        {!dirtyFields.name || errors.name ? (
                            <A.StyledNotCheckedIcon />
                        ) : (
                            <A.StyledCheckedIcon />
                        )}
                    </A.Ndiv>
                    <A.Nform {...register('name', { required: true })} />
                    <A.Ndiv>
                        메일
                        {!dirtyFields.email || errors.email ? (
                            <A.StyledNotCheckedIcon />
                        ) : (
                            <A.StyledCheckedIcon />
                        )}
                    </A.Ndiv>
                    <A.Nform {...register('email')} />
                    <A.Ndiv>
                        학교
                        {!dirtyFields.univ || errors.univ ? (
                            <A.StyledNotCheckedIcon />
                        ) : (
                            <A.StyledCheckedIcon />
                        )}
                    </A.Ndiv>
                    <A.Nform {...register('univ')} />
                    <A.Ndiv>
                        학과
                        {!dirtyFields.major || errors.major ? (
                            <A.StyledNotCheckedIcon />
                        ) : (
                            <A.StyledCheckedIcon />
                        )}
                    </A.Ndiv>
                    <A.Nform {...register('major')} />
                    <A.Ndiv>
                        전화번호
                        {!dirtyFields.phone || errors.phone ? (
                            <A.StyledNotCheckedIcon />
                        ) : (
                            <A.StyledCheckedIcon />
                        )}
                    </A.Ndiv>
                    <Controller
                        name="phone"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <AddHypen phone={value} onPhoneChange={onChange} />
                        )}
                    />
                    <A.Ndiv>
                        파트 선택
                        {!dirtyFields.part || errors.part ? (
                            <A.StyledNotCheckedIcon />
                        ) : (
                            <A.StyledCheckedIcon />
                        )}
                    </A.Ndiv>
                    <A.NdropdownDiv
                        style={{
                            border: isDropDownOpen
                                ? '1px solid var(--orange-600, #ff7710)'
                                : '1px solid var(--grey-400, #dcdfe3)',
                        }}
                    >
                        <A.NdropdownTxt
                            style={{
                                color: isDropDownOpen ? '#212224' : '#adb3ba',
                            }}
                        >
                            해커톤 파트를 선택해주세요.
                        </A.NdropdownTxt>
                        <A.NdropdownArrow
                            style={{
                                transform: isDropDownOpen
                                    ? 'rotate(0deg)'
                                    : 'rotate(180deg)',
                                stroke: isDropDownOpen ? '#4D5359' : '#ADB3BA',
                            }}
                            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                        />
                    </A.NdropdownDiv>
                    <Dropdown
                        isOpen={isDropDownOpen}
                        trackOption={trackOption}
                        control={control}
                    />
                    {!isDropDownOpen && (
                        <A.SelectedOptionsWrapper>
                            {selectedParts.map(option => {
                                const optionText =
                                    trackOption.find(o => o === option) || '';
                                const width = getWidthBasedOnLength(
                                    optionText.length,
                                );
                                return (
                                    <SelectedOption
                                        key={option}
                                        option={option}
                                        optionText={optionText}
                                        width={width}
                                        handleCancelOption={handleCancelOption}
                                    />
                                );
                            })}
                        </A.SelectedOptionsWrapper>
                    )}
                    <A.Ndiv>
                        팀명
                        {!dirtyFields.team || errors.team ? (
                            <A.StyledNotCheckedIcon />
                        ) : (
                            <A.StyledCheckedIcon />
                        )}
                    </A.Ndiv>
                    <A.Nform
                        placeholder="해커톤에 참여하는 팀명을 입력해주세요."
                        {...register('team')}
                    />
                    <A.Ntxt>*최대 10글자까지 입력가능해요.</A.Ntxt>
                    <A.Ndiv>
                        오프라인 참가 여부
                        {!dirtyFields.offline ||
                        (selectedOption === 'no' &&
                            (!dirtyFields.nonappearance ||
                                errors.nonappearance)) ? (
                            <A.StyledNotCheckedIcon />
                        ) : (
                            <A.StyledCheckedIcon />
                        )}
                    </A.Ndiv>
                    <A.Ntxt $offlinetxt>
                        *8월 6일~8월 7일 무박 2일로 진행되는 오프라인 해커톤
                        참여 여부를 선택해주세요.
                    </A.Ntxt>
                    <A.NradioWrapper>
                        <A.NradioDiv>
                            <A.Nlabel checked={selectedOption === 'yes'}>
                                <A.NradioInput
                                    type="radio"
                                    value="yes"
                                    {...register('offline')}
                                    checked={selectedOption === 'yes'}
                                />
                                네, 참여합니다.
                            </A.Nlabel>
                        </A.NradioDiv>
                        <A.NradioDiv>
                            <A.Nlabel checked={selectedOption === 'no'}>
                                <A.NradioInput
                                    type="radio"
                                    value="no"
                                    {...register('offline')}
                                    checked={selectedOption === 'no'}
                                />
                                아니오, 참가하지 않습니다.
                            </A.Nlabel>
                        </A.NradioDiv>
                    </A.NradioWrapper>
                    {selectedOption === 'no' && (
                        <>
                            <A.Nform
                                type="text"
                                placeholder="불참 사유를 입력해주세요."
                                {...register('nonappearance')}
                            />
                            <A.Ntxt>*최대 100자까지 입력가능해요.</A.Ntxt>
                        </>
                    )}
                    <A.Button type="submit" disabled={!isValid}>
                        신청하기
                    </A.Button>
                    {isModalOpen && (
                        <ApplicationModal
                            isOpen={isModalOpen}
                            closeModal={closeModal}
                            onSubmit={handleModalSubmit}
                            header={ApplicationModalTxt.header}
                            title={ApplicationModalTxt.title}
                            content={ApplicationModalTxt.content}
                            button={ApplicationModalTxt.button}
                        />
                    )}
                </form>
            </A.Container>
        </A.Wrapper>
    );
};

export default ApplicationForm;
