import React, { useState, useEffect, useRef } from 'react';
import * as P from '../register/ProjectRegisterStyle';
import Gallery from '../../../img/project/gallery.svg';
import Hyphen from '../../../img/project/hyphen.svg';
import Cancel from '../../../img/project/cancel.svg';
import Vertical from '../../../img/project/vertical.svg';
import FirstVertical from '../../../img/project/firstVertical.svg';
import { ActionMeta } from 'react-select';
import DropDown, { OptionType } from '../register/DropDown';
import Checkbox from '../register/Checkbox';
import useCheckbox from '../register/useCheckbox';

import AutoHeightTextarea from '../register/AutoHeightTextarea';
import useArray from '../../../hooks/useArray';
import request from '../../../utils/request';
import { useNavigate, useParams } from 'react-router-dom';
import ImageUpload, { PresignedUrlResponse } from '../../utils/ImageUpload';
import useEnrolledUser from '../register/user/userStore/useEnrolledUser';
import { Gen, IDropdown, Output, Tech, Thon, Univ } from '../register/RegisterOptions';
import UserFind from '../register/user/UserFind';
import UserEnrolled from '../register/user/UserEnrolled';
import { ProjectRegisterType } from '../register/ProjectRegister';
import { Project } from '../ProjectList';
import useFetch from './../../../hooks/useFetch';
import useFetchAsyncFunc from '../../../hooks/useFetchAsyncFunc';

/* form type */
interface FormState {
    activity: string;
    activityEtc: string;
    outPut: string;
    serviceName: string;
    ordinal: string;
    univ: string;
    startDate: string;
    endDate: string;
    projectTeches: string[];
    projectTechEtc: string;
    description: string;
    content: string;
    productionUrl: string;
    images: Image[];
    members: number[];
}

interface PostId {
    id: number;
}

interface Image {
    file: File;
    src: string;
}

const ProjectUpdate = () => {
    const {projectId} = useParams();

    const {data: project} = useFetch<Project, null>({
        uri: `/api/v1/project/${projectId}`
    });

    useEffect(() => {
        if (project !== undefined) {
            setFormState({
                activity: project.activity,
                activityEtc: '',
                outPut: project.outPut,
                serviceName: project.serviceName,
                startDate: project.startDate,
                endDate: project.endDate,
                projectTeches: [],
                projectTechEtc: '',
                description: project.description,
                content: project.content,
                productionUrl: project.productionUrl,
                images: [],
                ordinal: project.ordinal.toString(),
                univ: project.univ,
                members: [],
            });
        }
    }, [project]);
    
    const [isFill, setIsFill] = useState<boolean>(false); // 필드가 다 채워졌는지를 체크하는 state
    const { array: images, pushMany: setImages, remove } = useArray<Image>([]); // image 배열
    const {
        userLength: memberLength,
        userIdList: memberIdList,
        clearUser,
    } = useEnrolledUser();

    const navigate = useNavigate();

    const [formState, setFormState] = useState<FormState>({
        activity: '',
        activityEtc: '',
        outPut: '',
        serviceName: '',
        startDate: '',
        endDate: '',
        projectTeches: [],
        projectTechEtc: '',
        description: '',
        content: '',
        productionUrl: '',
        images: [],
        ordinal: '',
        univ: '',
        members: memberIdList,
    });

    const [activeThonEtc, setActiveThonEtc] = useState<boolean>(false);

    // 드롭다운을 관리하는 함수
    // 카테고리와 아웃풋에서 기타를 눌렀을 때 추가 입력창 생성
    const handleSelectChange =
        (field: keyof FormState) =>
        (
            selectedOption: OptionType | null,
            actionMeta: ActionMeta<OptionType>,
        ) => {
            if (selectedOption) {
                setFormState(prev => ({
                    ...prev,
                    [field]: selectedOption.label,
                }));

                if (field === 'activity') {
                    setActiveThonEtc(selectedOption.label === '기타');
                }
            }
        };

    // 입력창을 관리하는 함수
    const handleInputChange = (
        field: keyof FormState,
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) =>
        setFormState(prev => ({
            ...prev,
            [field]: event.target.value,
        }));

    const processActivityEtc = (): string => {
        if (activeThonEtc) {
            return formState.activityEtc;
        }

        return formState.activity;
    };

    const processOrdinal = (): number => {
        return Number(formState.ordinal.slice(0, -1));
    };

    const processTech = (): string[] => {
        if (etcCheck) {
            const teches = [
                ...formState.projectTeches,
                formState.projectTechEtc,
            ];
            return teches.filter(tech => tech !== '');
        }

        return formState.projectTeches;
    };

    const processImages = async (): Promise<string[]> => {
        const imageFiles: File[] = formState.images.map(image => image.file);
        const presignedUrlImages: PresignedUrlResponse[] = [];

        // presigned url 얻어와서 S3에 등록
        for (const file of imageFiles) {
            const url = await ImageUpload.getPresignedUrl(file);
            await ImageUpload.enrollImagesToS3(file, url.presignedUrl);
            presignedUrlImages.push(url);
        }

        return presignedUrlImages.map(image => image.imageUrl);
    };

    const processSendData = async (): Promise<ProjectRegisterType> => {
        return {
            activity: processActivityEtc(),
            outPut: formState.outPut,
            serviceName: formState.serviceName,
            ordinal: processOrdinal(),
            univ: formState.univ,
            startDate: formState.startDate,
            endDate: formState.endDate,
            description: formState.description,
            content: formState.content,
            productionUrl: formState.productionUrl,
            projectTeches: processTech(),
            imageUrl: await processImages(),
            members: memberIdList,
        };
    };

    // 폼 제출할 때 실행되는 함수
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFill) return;

        const data = await processSendData();

        const response = await request<ProjectRegisterType, PostId, null>({
            uri: '/api/v1/project/',
            method: 'post',
            data,
        });

        alert(`${response?.data.id}번의 게시글이 생성되었습니다.`);
        clearUser();
        navigate('/project');
    };

    const { checkboxList, checkHandler, checkDefaultHandler, defaultDone } = useCheckbox(Tech.loadTech());
    const [etcCheck, setEtcCheck] = useState<boolean>(false);

    if (project !== undefined && !defaultDone) {
        checkDefaultHandler(Tech.loadCurrentTech(project.projectTech));
    }

    // 체크박스 선택을 관리하는 함수
    const handleCheckboxChange = (id: number, checked: boolean) => {
        const state = checkHandler(id, checked);

        setFormState(prev => ({
            ...prev,
            projectTeches: state
                .filter(checkbox => checkbox.isChecked)
                .map(checkbox => checkbox.label),
        }));
    };

    const fileRef = useRef<HTMLInputElement | null>(null);

    // 파일을 입력받아 state에 반영
    const handleFileSelect = async (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const files = event.target.files;

        if (files != null) {
            const imageMeta: Image[] = [];

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const url = await readUrl(file);
                imageMeta.push({ file: files[i], src: url });
            }
            setImages(imageMeta);
        }
    };

    // img의 url을 읽는 함수
    const readUrl = async (file: File): Promise<string> => {
        return await new Promise<string>(resolve => {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                const url = fileReader.result?.toString() ?? '';
                resolve(url);
            };
            fileReader.readAsDataURL(file);
        });
    };

    // 이미지 버튼을 눌렀을 때 파일 선택 창을 띄우는 함수
    const handleImgBtn = () => {
        if (fileRef.current) {
            fileRef.current.click();
        }
    };

    // 이미지가 변동되면 form에 이미지 변경사항 반영
    useEffect(() => {
        setFormState(prev => ({
            ...prev,
            images,
        }));
    }, [images]);

    // 학교 목록을 불러오는 api
    const { data: univList } = useFetchAsyncFunc<IDropdown[]>({
        initValue: [],
        asyncFunc: Univ.loadUniv,
    });

    const getDefaultUniv = (): IDropdown => {
        return univList.find(univ => project?.univ === univ.label) as IDropdown;
    }

    useEffect(() => {
        if (
            formState.images.length === 0 ||
            formState.activity === '' ||
            formState.outPut === '' ||
            formState.startDate === '' ||
            formState.endDate === '' ||
            formState.serviceName === '' ||
            formState.description === '' ||
            formState.content === '' ||
            formState.projectTeches.length === 0 ||
            formState.productionUrl === '' ||
            formState.ordinal === '' ||
            formState.univ === '' ||
            memberLength === 0 ||
            (formState.activity === '기타' && formState.activityEtc === '') ||
            (etcCheck && formState.projectTechEtc === '')
        ) {
            setIsFill(false);
        } else {
            setIsFill(true);
        }
    }, [formState, etcCheck, memberLength]);

    useEffect(() => {
        return () => {
            clearUser();
        };
    }, [clearUser]);

    return (
        <P.Container>
            {project !== undefined && (
                <>
                <P.Title>프로젝트 등록</P.Title>
            <P.Caption>
                <P.Label>이미지</P.Label>
                <P.ImgRegisterBtn onClick={handleImgBtn}>
                    <img src={Gallery} alt="gallery" />
                    이미지 추가
                </P.ImgRegisterBtn>
            </P.Caption>
            <input
                type="file"
                style={{ display: 'none' }}
                ref={fileRef}
                onChange={handleFileSelect}
                multiple
            />

            <P.ImgRegisterGuide>
                <P.Li>
                    <P.Accent>썸네일은 첫번째 이미지</P.Accent>로 등록됩니다.
                </P.Li>
                <P.Li>
                    이미지의 해상도는 <P.Accent>1920X1080</P.Accent> 사이즈를
                    권장하며, 더 작은 이미지는 깨져서 보일 수 있습니다.
                </P.Li>
            </P.ImgRegisterGuide>

            {images.length === 0 ? (
                <P.ImageMent>프로젝트 이미지를 추가해주세요</P.ImageMent>
            ) : (
                <P.Images>
                    {images.map((image, idx) => (
                        <P.Img key={`img-${idx}`} src={image.src}>
                            <P.DeleteBtn
                                isFirst={idx === 0}
                                onClick={() => remove(idx)}
                            >
                                <P.ImgNumber>{idx + 1}</P.ImgNumber>
                                <img
                                    src={idx === 0 ? FirstVertical : Vertical}
                                    alt="vertical"
                                />
                                <img src={Cancel} alt="cancel" />
                            </P.DeleteBtn>
                        </P.Img>
                    ))}
                </P.Images>
            )}
            <P.Form onSubmit={handleSubmit}>
                <P.Field>
                    <P.Label>활동유형</P.Label>
                    <DropDown
                        placeholder="활동 선택"
                        options={Thon.loadThon()}
                        defaultValue={Thon.loadCurrentThon(project.activity)}
                        onChange={handleSelectChange('activity')}
                    />
                    {activeThonEtc ? (
                        <P.Input
                            type="text"
                            className="etc"
                            placeholder="활동 이름을 입력해주세요."
                            value={formState.activityEtc}
                            onChange={event =>
                                handleInputChange('activityEtc', event)
                            }
                        />
                    ) : null}
                </P.Field>
                <P.Field>
                    <P.Label>아웃풋 형태</P.Label>
                    <DropDown
                        placeholder="아웃풋 형태 선택"
                        options={Output.loadOutput()}
                        defaultValue={Output.loadCurrentOutput(project.outPut)}
                        onChange={handleSelectChange('outPut')}
                    />
                </P.Field>
                <P.Field>
                    <P.Label>제작 기간</P.Label>
                    <P.FlexField>
                        <P.PeriodInput
                            type="date"
                            placeholder="YYYY-MM-DD"
                            value={
                                formState.startDate
                                    ? formState.startDate
                                          .toString()
                                          .substring(0, 10)
                                    : ''
                            }
                            onChange={event =>
                                handleInputChange('startDate', event)
                            }
                        />
                        <img src={Hyphen} alt="hyphen" />
                        <P.PeriodInput
                            type="date"
                            placeholder="YYYY-MM-DD"
                            value={
                                formState.endDate
                                    ? formState.endDate
                                          .toString()
                                          .substring(0, 10)
                                    : ''
                            }
                            onChange={event =>
                                handleInputChange('endDate', event)
                            }
                        />
                    </P.FlexField>
                </P.Field>
                <P.Field>
                    <P.Label>서비스 이름</P.Label>
                    <P.Input
                        type="text"
                        placeholder="서비스의 이름을 입력해주세요."
                        value={formState.serviceName}
                        onChange={event =>
                            handleInputChange('serviceName', event)
                        }
                    />
                </P.Field>
                <P.Field>
                    <P.Label>한줄 소개</P.Label>
                    <P.Input
                        type="text"
                        placeholder="서비스의 한줄 소개를 입력해주세요."
                        value={formState.description}
                        onChange={event =>
                            handleInputChange('description', event)
                        }
                    />
                </P.Field>
                <P.Field>
                    <P.Label>상세 소개</P.Label>
                    <AutoHeightTextarea
                        placeholder="서비스의 상세 소개를 입력해주세요."
                        value={formState.content}
                        onChange={event => handleInputChange('content', event)}
                    />
                </P.Field>
                <P.Field>
                    <P.Label>서비스 링크</P.Label>
                    <P.Input
                        type="text"
                        placeholder="서비스로 연결되는 링크를 입력해주세요."
                        value={formState.productionUrl}
                        onChange={event =>
                            handleInputChange('productionUrl', event)
                        }
                    />
                </P.Field>
                <P.Field>
                    <P.Label>기술 스택</P.Label>
                    <P.CheckBoxDiv>
                        <P.CheckEtc>
                            <Checkbox
                                checkboxId={0}
                                label={'기타 직접 입력'}
                                value={0}
                                checked={etcCheck}
                                onChange={() => setEtcCheck(prev => !prev)}
                            />
                        </P.CheckEtc>
                        <P.TechGrid>
                            {checkboxList.map(checkbox => (
                                <Checkbox
                                    checkboxId={checkbox.id}
                                    label={checkbox.label}
                                    value={checkbox.id}
                                    checked={checkbox.isChecked}
                                    onChange={event =>
                                        handleCheckboxChange(
                                            checkbox.id,
                                            event.target.checked,
                                        )
                                    }
                                />
                            ))}
                        </P.TechGrid>
                    </P.CheckBoxDiv>
                    {etcCheck ? (
                        <P.Input
                            type="text"
                            className="etc"
                            placeholder="기술 스택을 입력해주세요."
                            value={formState.projectTechEtc}
                            onChange={event =>
                                handleInputChange('projectTechEtc', event)
                            }
                        />
                    ) : null}
                </P.Field>
                <P.Field>
                    <P.Label>기수/학교</P.Label>
                    <P.FlexField>
                        <DropDown
                            placeholder="기수 선택"
                            options={Gen.loadAllGen()}
                            defaultValue={Gen.loadCurrentGen(project.ordinal)}
                            onChange={handleSelectChange('ordinal')}
                        />
                        <P.Gap />
                        <DropDown
                            placeholder="학교 선택"
                            options={univList}
                            defaultValue={getDefaultUniv()}
                            onChange={handleSelectChange('univ')}
                        />
                    </P.FlexField>
                </P.Field>
                <P.Field>
                    <P.Label>팀원</P.Label>
                    <UserFind />
                    <UserEnrolled defaultMembers={project.members} />
                </P.Field>
                <P.RegisterBtn type="submit" active={isFill}>
                    등록하기
                </P.RegisterBtn>
            </P.Form>
                </>
            )}
        </P.Container>
    );
};

export default ProjectUpdate;
