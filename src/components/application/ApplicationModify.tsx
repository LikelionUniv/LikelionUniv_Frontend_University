import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch, Controller } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as z from 'zod';

import * as A from './ApplicationStyle';

import { applicationSchema } from '../application/ApplicationSchema';
import ApplicationModal from './modal/ApplicationModal';
import SelectedOption from './SelectedOption';
import Dropdown from './Dropdown';
import AddHypen from './AddHypen';
import useGetUserInfo from './../../query/get/useGetUserInfo';
import request from '../../api/request';
import CompleteApplication from './CompleteApplication';

type ApplicationFormType = z.infer<typeof applicationSchema>;

interface FormId {
    hackathonId: number;
}

const trackOption = ['PM', 'DESIGNER', 'FRONTEND', 'BACKEND'];

const ApplicationModalTxt = {
    header: '12기 중앙해커톤 참가 신청',
    title: '모든 정보를 정확하게 입력하셨나요?',
    content: '참가신청 기간 동안 신청정보 수정이 가능합니다.',
    button: '수정하기',
};

interface ThackathonData {
    hackathonParts: string[];
    teamName: string;
    offlineParticipation: boolean;
    reasonForNotOffline?: null | string;
    hackathonFormId?: number;
    name?: string;
    email?: string;
    universityName?: string;
    major?: string;
    phone?: string;
}

const ApplicationForm = () => {
    const { hackathonId } = useParams();
    const [isRadio, setIsRadio] = useState(true);
    const [hackathonData, setHackathonData] = useState<null | ThackathonData>(
        null,
    );
    const [isSuccess, setIsSuccess] = useState(false);

    const formatPhoneNumber = (value: string) => {
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;

        if (phoneNumberLength < 4) return phoneNumber;
        if (phoneNumberLength < 8) {
            return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
        }
        return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
            3,
            7,
        )}-${phoneNumber.slice(7, 11)}`;
    };

    const fetchData = async () => {
        try {
            const response = await request<null, null, null>({
                uri: `/api/v1/hackathons/${hackathonId}`,
                method: 'get',
            });

            setHackathonData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const navigate = useNavigate();
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { userinfo } = useGetUserInfo();
    const {
        handleSubmit,
        register,
        control,
        setValue,
        trigger,
        formState: { dirtyFields, errors },
    } = useForm<ApplicationFormType>({
        mode: 'onChange',
        resolver: zodResolver(applicationSchema),
        defaultValues: {
            phone: '',
            hackathonParts: [],
        },
    });

    const selectedParticipation = useWatch({
        control,
        name: 'offlineParticipation',
    });

    const reasonForNotOffline = useWatch({
        control,
        name: 'reasonForNotOffline',
    });
    const selectedParts = useWatch({
        control,
        name: 'hackathonParts',
    });

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
        setValue('hackathonParts', newValue.length > 0 ? newValue : []);
    };

    useEffect(() => {
        fetchData();
    }, []);

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

    useEffect(() => {
        if (hackathonData) {
            if (hackathonData?.email) {
                setValue('email', hackathonData.email);
            }
            if (hackathonData?.phone) {
                setValue('phone', formatPhoneNumber(hackathonData.phone));
            }
            if (hackathonData?.teamName) {
                setValue('teamName', hackathonData.teamName);
            }
            if (hackathonData?.hackathonParts) {
                let arr = [];
                for (let i = 0; i < hackathonData.hackathonParts.length; i++) {
                    arr.push(hackathonData.hackathonParts[i]);
                    setValue('hackathonParts', arr);
                }
            }

            setIsRadio(hackathonData.offlineParticipation);
            setValue(
                'offlineParticipation',
                hackathonData.offlineParticipation,
            );
            setValue(
                'reasonForNotOffline',
                hackathonData.reasonForNotOffline === ''
                    ? ''
                    : hackathonData.reasonForNotOffline!,
            );
        }
    }, [hackathonData]);

    useEffect(() => {
        if (isRadio || isRadio === undefined) {
            setValue('reasonForNotOffline', '기본값');
        } else {
            setValue('reasonForNotOffline', '');
        }
    }, [selectedParticipation]);

    const handleModalSubmit = async () => {
        try {
            const response = await request<any, FormId, null>({
                uri: `/api/v1/hackathons/${hackathonId}`,
                method: 'PATCH',
                data: hackathonData,
            });
            setIsSuccess(true);
            return response.data;
        } catch (error) {
            console.error('서버 요청 오류:', error);
        }
    };

    const onSubmit = (data: ApplicationFormType) => {
        if (!data.offlineParticipation && !data.reasonForNotOffline) return;
        let datas = {
            phone: data.phone,
            hackathonParts: data.hackathonParts,
            teamName: data.teamName,
            offlineParticipation: data.offlineParticipation,
            reasonForNotOffline: data.reasonForNotOffline,
        };

        setHackathonData(datas);
        setIsModalOpen(true);
    };

    return (
        <A.Wrapper>
            {isSuccess ? (
                <CompleteApplication />
            ) : (
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
                            {errors.email ? (
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
                            {errors.phone ? (
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
                            {errors.hackathonParts ? (
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
                                        trackOption.find(o => o === option) ||
                                        '';
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
                            {errors.teamName ? (
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
                            오프라인 참가 여부 (마케팅 활용에 동의 합니다)
                            {/* {!dirtyFields.offlineParticipation ||
                            errors.offlineParticipation ||
                            (selectedParticipation === false &&
                                (!dirtyFields.reasonForNotOffline ||
                                    errors.reasonForNotOffline)) */}
                            {reasonForNotOffline === '' &&
                            !reasonForNotOffline ? (
                                <A.StyledNotCheckedIcon />
                            ) : (
                                <A.StyledCheckedIcon />
                            )}
                        </A.Ndiv>
                        <A.Ntxt $offlinetxt>
                            *8월 6일~8월 7일 무박 2일로 진행되는 오프라인 해커톤
                            참여 여부를 선택해주세요.
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
                                                    field.value ||
                                                    isRadio === true
                                                }
                                                onChange={() => {
                                                    field.onChange(true);
                                                    setIsRadio(true);
                                                }}
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
                                                checked={isRadio === false}
                                                onChange={() => {
                                                    field.onChange(false);
                                                    setIsRadio(false);
                                                }}
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
                                    {...control.register('reasonForNotOffline')}
                                />
                                <A.Ntxt>*최대 100자까지 입력가능해요.</A.Ntxt>
                            </>
                        )}
                        <A.Button type="submit" disabled={false}>
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
            )}
        </A.Wrapper>
    );
};

export default ApplicationForm;
