import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as z from 'zod';

import * as A from './ApplicationStyle';
import request from '../../utils/request';
import { applicationSchema } from '../application/ApplicationSchema';
import ApplicationModal from './modal/ApplicationModal';
import SelectedOption from './SelectedOption';
import Dropdown from './Dropdown';
import AddHypen from './AddHypen';
import useGetUserInfo from './../../query/get/useGetUserInfo';
import CompleteApplication from './CompleteApplication';

type ApplicationFormType = z.infer<typeof applicationSchema>;

interface ApplicationSubmitFormType {
    name: string;
    email: string;
    universityId: number;
    major: string;
    phone: string;
    hackathonParts: string[];
    teamName: string;
    offlineParticipation: boolean;
    reasonForNotOffline: string | undefined;
}

interface ApplicationModalProps {
    isOpen: boolean;
    closeModal: () => void;
    onSubmit: () => void;
    header: string;
    title: string;
    content: string;
    button: string;
}

interface hackathonFormId {
    hackathonFormId: number;
}

interface UserBasicInfo {
    universityId: number;
    email: string;
}

const trackOption = ['PM', '디자인', '프론트엔드', '백엔드'];

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
    const [formData, setFormData] = useState<ApplicationFormType | undefined>(
        undefined,
    );
    const [userBasicInfo, setUserBasicInfo] = useState<UserBasicInfo | null>(
        null,
    );
    const [universityId, setUniversityId] = useState<number>(0);
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
    const { userinfo, error } = useGetUserInfo();
    const {
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        trigger,
        formState: { dirtyFields, errors, isValid },
    } = useForm<ApplicationFormType>({
        mode: 'onChange',
        resolver: zodResolver(applicationSchema),
        defaultValues: {
            phone: '',
            hackathonPart: [],
        },
    });

    const selectedParticipation = useWatch({
        control,
        name: 'offlineParticipation',
    });

    const selectedParts = useWatch({
        control,
        name: 'hackathonPart',
    });

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const closeDropdown = () => {
        setIsDropDownOpen(false);
    };

    const getWidthBasedOnLength = (length: number) => {
        if (length < 3) return 28;
        if (length < 4) return 42;
        if (length >= 4) return 70;
        return 0;
    };

    const handleCancelOption = (option: string) => {
        const newValue = selectedParts.filter(selected => selected !== option);
        setValue('hackathonPart', newValue.length > 0 ? newValue : []);
    };

    const onSubmit = (data: ApplicationFormType) => {
        setFormData(data);
        setIsModalOpen(true);
    };

    const handleModalSubmit = async () => {
        console.log('요청 데이터');
        console.log(formData);
        if (formData) {
            const submitData: ApplicationSubmitFormType = {
                name: formData.name,
                email: formData.email,
                universityId: universityId,
                major: formData.major,
                phone: formData.phone,
                hackathonParts: formData.hackathonPart,
                teamName: formData.teamName,
                offlineParticipation: formData.offlineParticipation,
                reasonForNotOffline: formData.reasonForNotOffline,
            };

            console.log(submitData);

            try {
                const response = await request<
                    ApplicationSubmitFormType,
                    hackathonFormId,
                    null
                >({
                    uri: '/api/v1/hackathons',
                    method: 'post',
                    data: submitData,
                });
                console.log('서버 응답 데이터:', response);
                return response.data;
            } catch (error) {
                console.error('서버 요청 오류:', error);
            }
        }
    };

    const fetchUserBasicInfo = async () => {
        const response = await request<null, UserBasicInfo, null>({
            uri: '/api/v1/auth/userInfo',
            method: 'get',
        });
        return response;
    };

    useEffect(() => {
        const fetchAndSetUserInfo = async () => {
            try {
                const userInfoResponse = await fetchUserBasicInfo();
                const userData = userInfoResponse.data;
                setUserBasicInfo(userData);
                if (userData) {
                    setValue('email', userData.email);
                    trigger('email');
                    console.log(userData.universityId);
                    setUniversityId(userData.universityId);
                }
                setIsSuccess(true);
            } catch (error) {
                console.error('Failed to fetch user info:', error);
                setIsSuccess(false);
            }
        };

        fetchAndSetUserInfo();
    }, [setValue, trigger]);

    useEffect(() => {
        if (userinfo?.name) {
            setValue('name', userinfo.name);
            trigger('name');
        }
        if (userinfo?.universityName) {
            setValue('universityName', userinfo.universityName);
            trigger('universityName');
        }
        if (userinfo?.major) {
            setValue('major', userinfo.major);
            trigger('major');
        }
    }, [userinfo, setValue, trigger]);

    return (
        <>
            {isSuccess ? (
                <CompleteApplication />
            ) : (
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
                            <A.Ndiv>
                                이름
                                {!userinfo?.name ? (
                                    <A.StyledNotCheckedIcon />
                                ) : (
                                    <A.StyledCheckedIcon />
                                )}
                            </A.Ndiv>
                            <A.Nform
                                {...register('name', { required: true })}
                                disabled={!!userinfo?.name}
                            />
                            <A.Ndiv>
                                메일
                                {!userBasicInfo?.email ? (
                                    <A.StyledNotCheckedIcon />
                                ) : (
                                    <A.StyledCheckedIcon />
                                )}
                            </A.Ndiv>
                            <A.Nform {...register('email')} />
                            <A.Ndiv>
                                학교
                                {!userinfo?.universityName ? (
                                    <A.StyledNotCheckedIcon />
                                ) : (
                                    <A.StyledCheckedIcon />
                                )}
                            </A.Ndiv>
                            <A.Nform
                                {...register('universityName')}
                                disabled={!!userinfo?.universityName}
                            />
                            <A.Ndiv>
                                학과
                                {!userinfo?.major ? (
                                    <A.StyledNotCheckedIcon />
                                ) : (
                                    <A.StyledCheckedIcon />
                                )}
                            </A.Ndiv>
                            <A.Nform
                                {...register('major')}
                                disabled={!!userinfo?.major}
                            />
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
                                    <AddHypen
                                        phone={value}
                                        onPhoneChange={onChange}
                                    />
                                )}
                            />
                            <A.Ndiv>
                                파트 선택
                                {!dirtyFields.hackathonPart ||
                                errors.hackathonPart ? (
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
                                        color: isDropDownOpen
                                            ? '#212224'
                                            : '#adb3ba',
                                    }}
                                >
                                    해커톤 파트를 선택해주세요.
                                </A.NdropdownTxt>
                                <A.NdropdownArrow
                                    style={{
                                        transform: isDropDownOpen
                                            ? 'rotate(0deg)'
                                            : 'rotate(180deg)',
                                        stroke: isDropDownOpen
                                            ? '#4D5359'
                                            : '#ADB3BA',
                                    }}
                                    onClick={() =>
                                        setIsDropDownOpen(!isDropDownOpen)
                                    }
                                />
                            </A.NdropdownDiv>
                            <Dropdown
                                isOpen={isDropDownOpen}
                                trackOption={trackOption}
                                control={control}
                                closeDropdown={closeDropdown}
                            />
                            {!isDropDownOpen && (
                                <A.SelectedOptionsWrapper>
                                    {selectedParts.map(option => {
                                        const optionText =
                                            trackOption.find(
                                                o => o === option,
                                            ) || '';
                                        const width = getWidthBasedOnLength(
                                            optionText.length,
                                        );
                                        return (
                                            <SelectedOption
                                                key={option}
                                                option={option}
                                                optionText={optionText}
                                                width={width}
                                                handleCancelOption={
                                                    handleCancelOption
                                                }
                                            />
                                        );
                                    })}
                                </A.SelectedOptionsWrapper>
                            )}
                            <A.Ndiv>
                                팀명
                                {!dirtyFields.teamName || errors.teamName ? (
                                    <A.StyledNotCheckedIcon />
                                ) : (
                                    <A.StyledCheckedIcon />
                                )}
                            </A.Ndiv>
                            <A.Nform
                                placeholder="해커톤에 참여하는 팀명을 입력해주세요."
                                {...register('teamName')}
                            />
                            <A.Ntxt>*최대 10글자까지 입력가능해요.</A.Ntxt>
                            <A.Ndiv>
                                오프라인 참가 여부
                                {!dirtyFields.offlineParticipation ||
                                errors.offlineParticipation ||
                                (selectedParticipation === false &&
                                    (!dirtyFields.reasonForNotOffline ||
                                        errors.reasonForNotOffline)) ? (
                                    <A.StyledNotCheckedIcon />
                                ) : (
                                    <A.StyledCheckedIcon />
                                )}
                            </A.Ndiv>
                            <A.Ntxt $offlinetxt>
                                *8월 6일~8월 7일 무박 2일로 진행되는 오프라인
                                해커톤 참여 여부를 선택해주세요.
                            </A.Ntxt>

                            <Controller
                                name="offlineParticipation"
                                control={control}
                                render={({ field }) => (
                                    <A.NradioWrapper>
                                        <A.NradioDiv>
                                            <A.Nlabel
                                                checked={field.value === true}
                                            >
                                                <A.NradioInput
                                                    type="radio"
                                                    {...field}
                                                    value="true"
                                                    checked={
                                                        field.value === true
                                                    }
                                                    onChange={() =>
                                                        field.onChange(true)
                                                    }
                                                />
                                                네, 참여합니다.
                                            </A.Nlabel>
                                        </A.NradioDiv>
                                        <A.NradioDiv>
                                            <A.Nlabel
                                                checked={field.value === false}
                                            >
                                                <A.NradioInput
                                                    type="radio"
                                                    {...field}
                                                    value="false"
                                                    checked={
                                                        field.value === false
                                                    }
                                                    onChange={() =>
                                                        field.onChange(false)
                                                    }
                                                />
                                                아니오, 참가하지 않습니다.
                                            </A.Nlabel>
                                        </A.NradioDiv>
                                    </A.NradioWrapper>
                                )}
                            />
                            {selectedParticipation === false && (
                                <>
                                    <A.Nform
                                        type="text"
                                        placeholder="불참 사유를 입력해주세요."
                                        {...control.register(
                                            'reasonForNotOffline',
                                        )}
                                    />
                                    <A.Ntxt>
                                        *최대 100자까지 입력가능해요.
                                    </A.Ntxt>
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
            )}
        </>
    );
};

export default ApplicationForm;
