import React, { useState, useEffect, useRef } from 'react';
import * as P from './ProjectRegisterStyle';
import Gallery from '../../img/project/gallery.svg';
import Hyphen from '../../img/project/hyphen.svg';
import Cancel from '../../img/project/cancel.svg';
import Vertical from '../../img/project/vertical.svg';
import FirstVertical from '../../img/project/firstVertical.svg';
import { checkboxes, genOptions, output, projectCategory } from './RegisterOptions';
import { ActionMeta } from 'react-select';
import DropDown, { OptionType } from './DropDown';
import SchoolDropDown from './SchoolDropDown';
import Checkbox from './Checkbox';
import useCheckbox from './useCheckbox';

/* form type */
interface FormState {
    category: string;
    output: string;
    start: Date | null;
    end: Date | null;
    serviceName: string;
    introduce: string;
    detailIntroduce: string;
    serviceLink: string;
    stack: number[];
    generation: number;
    university: string;
    teamMember: string;
}

const ProjectRegister = () => {
    const [formState, setFormState] = useState<FormState>({
        category: '',
        output: '',
        start: null,
        end: null,
        serviceName: '',
        introduce: '',
        detailIntroduce: '',
        serviceLink: '',
        stack: [],
        generation: 0,
        university: '',
        teamMember: '',
    });

    const [isFill, setIsFill] = useState<boolean>(false); // 필드가 다 채워졌는지를 체크하는 state
    const [images, setImages] = useState<string[]>([]) // image 배열
    
    const handleSelectChange = (field: keyof FormState) =>
    (
        selectedOption: OptionType | null,
        actionMeta: ActionMeta<OptionType>,
    ) => {
        if (selectedOption) {
            setFormState(prev => ({
                ...prev,
                [field]: selectedOption.value,
            }));
        }
    };

    const handleInputChange = (field: keyof FormState, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => (        
        setFormState(prev => ({
            ...prev,
            [field]: event.target.value
        }))
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFill) return;

        console.log(formState);
    };

    const {checkboxList, checkHandler} = useCheckbox(checkboxes);
    const [etcCheck, setEtcCheck] = useState<boolean>(false);

    const handleCheckboxChange = (id: number, checked: boolean) => {
        const state = checkHandler(id, checked)

        setFormState(prev => ({
            ...prev,
            stack: state.filter(checkbox => checkbox.isChecked).map(checkbox => checkbox.id),
        }));
    };

    const fileRef = useRef<HTMLInputElement | null>(null);

    // 파일을 입력받아 state에 반영
    const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (files != null) {
            const newUrls: string[] = []

            for (let i = 0; i < files.length; i++) {
                const file = files[i]
                const newUrl = await readUrl(file)
                newUrls.push(newUrl)
            }
            setImages(newUrls);
        };
    };

    // img의 url을 읽는 함수
    const readUrl = async (file: File): Promise<string> => {
        return await new Promise<string>((resolve) => {
          const fileReader = new FileReader()
          fileReader.onload = () => {
            const url = fileReader.result?.toString() ?? ''
            resolve(url)
          }
          fileReader.readAsDataURL(file)
        })
    };

    const handleImgBtn = () => {
        if (fileRef.current) {
            fileRef.current.click();
        }
    };

    useEffect(() => {
        console.log(images);
    }, [images])

    useEffect(() => {                        
        if (
            formState.category === '' ||
            formState.output === '' ||
            formState.start === null ||
            formState.end === null ||
            formState.serviceName === '' ||
            formState.introduce === '' ||
            formState.detailIntroduce === '' ||
            formState.stack.length === 0 ||
            formState.generation === 0 ||
            formState.university === '' ||
            formState.teamMember === ''
        ) {
            setIsFill(false);
        } else {
            setIsFill(true);
        }
    }, [formState])

    return (
        <P.Container>
            <P.Title>프로젝트 등록</P.Title>
            <P.Caption>
                <P.Label>이미지</P.Label>
                <P.ImgRegisterBtn onClick={handleImgBtn}>
                    <img src={Gallery} alt='gallery' />
                    이미지 추가
                </P.ImgRegisterBtn>
            </P.Caption>
            <input type='file' style={{display: 'none'}} ref={fileRef} onChange={handleFileSelect} multiple />

            <P.ImgRegisterGuide>
                <P.Li>
                    <P.Accent>썸네일은 첫번째 이미지</P.Accent>로 등록됩니다.
                </P.Li>
                <P.Li>
                    이미지의 해상도는 <P.Accent>1920X1080</P.Accent> 사이즈를 권장하며, 더 작은 이미지는 깨져서 보일 수 있습니다.
                </P.Li>
            </P.ImgRegisterGuide>

            {images.length === 0
                ? <P.ImageMent>프로젝트 이미지를 추가해주세요</P.ImageMent>
                : (
                <P.Images>
                    {images.map((image, idx) => (
                        <P.Img key={`img-${idx}`} src={image}>
                            <P.DeleteBtn isFirst={idx === 0}>
                                <P.ImgNumber>{idx + 1}</P.ImgNumber>
                                <img src={idx === 0 ? FirstVertical : Vertical} alt='vertical' />
                                <img src={Cancel} alt='cancel' />
                            </P.DeleteBtn>
                        </P.Img>
                    ))}
                </P.Images>
            )}
            <P.Form onSubmit={handleSubmit}>
                <P.Field>
                    <P.Label>활동유형</P.Label>
                    <DropDown placeholder='활동 선택' options={projectCategory} onChange={handleSelectChange('category')} />
                </P.Field>
                <P.Field>
                    <P.Label>아웃풋 형태</P.Label>
                    <DropDown placeholder='아웃풋 형태 선택' options={output} onChange={handleSelectChange('output')} />
                </P.Field>
                <P.Field>
                    <P.Label>제작 기간</P.Label>
                    <P.FlexField>
                        <P.PeriodInput type='date' placeholder='YYYY-MM-DD' value={formState.start ? formState.start.toString().substring(0, 10) : ''} onChange={(event) => handleInputChange('start', event)} />
                        <img src={Hyphen} alt='hyphen' />
                        <P.PeriodInput type='date' placeholder='YYYY-MM-DD' value={formState.end ? formState.end.toString().substring(0, 10) : ''} onChange={(event) => handleInputChange('end', event)} />
                    </P.FlexField>
                </P.Field>
                <P.Field>
                    <P.Label>서비스 이름</P.Label>
                    <P.Input type='text' placeholder='서비스의 이름을 입력해주세요.' value={formState.serviceName} onChange={(event) => handleInputChange('serviceName', event)} />
                </P.Field>
                <P.Field>
                    <P.Label>한줄 소개</P.Label>
                    <P.Input type='text' placeholder='서비스의 한줄 소개를 입력해주세요.' value={formState.introduce} onChange={(event) => handleInputChange('introduce', event)} />
                </P.Field>
                <P.Field>
                    <P.Label>상세 소개</P.Label>
                    <P.Textarea placeholder='서비스의 상세 소개를 입력해주세요.' value={formState.detailIntroduce} onChange={(event) => handleInputChange('detailIntroduce', event)} />
                </P.Field>
                <P.Field>
                    <P.Label>서비스 링크</P.Label>
                    <P.Input type='text' placeholder='서비스로 연결되는 링크를 입력해주세요.' value={formState.serviceLink} onChange={(event) => handleInputChange('serviceLink', event)} />
                </P.Field>
                <P.Field>
                    <P.Label>기술 스택</P.Label>
                    <P.CheckBoxDiv>
                        <P.CheckEtc>
                            <Checkbox checkboxId={0} label={'기타 직접 입력'} value={0} checked={etcCheck} onChange={() => setEtcCheck(prev => !prev)} />
                        </P.CheckEtc>
                        {checkboxList.map(checkbox => (
                            <P.CheckArea key={checkbox.id} $id={checkbox.id}>
                                <Checkbox checkboxId={checkbox.id} label={checkbox.label} value={checkbox.id} checked={checkbox.isChecked} onChange={(event) => handleCheckboxChange(checkbox.id, event.target.checked)} />
                            </P.CheckArea>
                        ))}
                    </P.CheckBoxDiv>
                </P.Field>
                <P.Field>
                    <P.Label>기수/학교</P.Label>
                    <P.FlexField>
                        <DropDown placeholder='기수 선택' options={genOptions} onChange={handleSelectChange('generation')} />
                        <P.Gap />
                        <SchoolDropDown onChange={handleSelectChange('university')}  />
                    </P.FlexField>
                </P.Field>
                <P.Field>
                    <P.Label>팀원</P.Label>
                    <P.Input type='text' placeholder='팀원 이름을 작성해주세요.' value={formState.teamMember} onChange={(event) => handleInputChange('teamMember', event)}  />
                </P.Field>
                <P.RegisterBtn type='submit' active={isFill}>등록하기</P.RegisterBtn>
            </P.Form>
        </P.Container>
    );
};

export default ProjectRegister;
