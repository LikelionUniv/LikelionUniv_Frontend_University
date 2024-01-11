import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Avatar, Button, convertRole } from './Common';
import DropDown from '../signUp/DropDown';
import { OptionType } from '../signUp/DropDown';
import { ActionMeta } from 'react-select';
import { IuserModify } from './type';
import ImageUpload from '../utils/ImageUpload';

import {
    useUpdateUserProfile,
    useCachedUserProfile,
} from '../../api/mypage/useUserProfile';

/* dropdown option 부분 */
const trackOptions = [
    { value: 1, label: '기획디자인' },
    { value: 2, label: '프론트엔드' },
    { value: 3, label: '백엔드' },
];

function findLabelByValue(value: number) {
    const foundOption = trackOptions.find(option => option.value === value);

    if (!foundOption) {
        return '해당하는 트랙이 없습니다.';
    }
    return foundOption.label;
}

const UserInfoModify = () => {
    //초기 렌더링 시 유저 기본정보 받아와서 formState에 채워넣기
    const [formState, setFormState] = useState<IuserModify>({
        name: '',
        introduction: '',
        profileImage: '',
        part: '',
    });
    const { mutate: userProfileUpdate } = useUpdateUserProfile();
    //const [userProfile, updateUserProfile] = useRecoilState(UserProfileAtom);
    const userProfile = useCachedUserProfile();
    //<img src = imgSrc/>
    const [imgSrc, setImgSrc] = useState('');

    // 초기 렌더링 시 유저 정보 뿌리기
    useEffect(() => {
        if (userProfile) {
            setFormState({
                name: userProfile.name,
                introduction: userProfile?.introduction,
                profileImage: userProfile.profileImage,
                part: userProfile.part,
            });
        }
    }, [userProfile]);

    const handleSelectChange =
        (field: keyof IuserModify) =>
        (
            selectedOption: OptionType | null,
            actionMeta: ActionMeta<OptionType>,
        ) => {
            if (selectedOption) {
                let label: string;
                if (field === 'part') {
                    label = findLabelByValue(selectedOption.value);
                }
                setFormState(prev => ({
                    ...prev,
                    [field]: convertRole(label),
                }));
            }
        };

    // 이미지 파일 받아오기
    const fileRef = useRef<HTMLInputElement | null>(null);
    //사진 변경하기 클릭 -> 파일 선택창 띄움
    const handleImgBtn = (e: React.MouseEvent) => {
        e.preventDefault();

        if (fileRef.current) {
            fileRef.current.click();
        }
    };
    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files;

        if (file != null) {
            const imgSrc: string = await readUrl(file[0]);
            const urls = await ImageUpload.getPresignedUrl(file[0]);
            await ImageUpload.enrollImagesToS3(file[0], urls.presignedUrl);

            setImgSrc(imgSrc);
            setFormState(prev => ({
                ...prev,
                profileImage: urls.imageUrl,
            }));
        }
    };
    //이미지 URL읽는 함수
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        //수정 API 요청
        userProfileUpdate(formState);
    };

    return (
        <Wrapper>
            <Container>
                <div className="Stitle">내 정보 수정</div>

                <Form>
                    <FlexBox>
                        <AvatarSmall
                            imgurl={
                                imgSrc === ''
                                    ? `https://${userProfile?.profileImage}`
                                    : imgSrc
                            }
                        />
                        <ImageBtn onClick={handleImgBtn}>
                            사진 변경하기
                        </ImageBtn>
                        <input
                            type="file"
                            style={{ display: 'none' }}
                            ref={fileRef}
                            onChange={handleFileSelect}
                        />
                    </FlexBox>
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
                        value={formState.introduction}
                        maxLength={49}
                        onChange={e =>
                            setFormState({
                                ...formState,
                                introduction: e.target.value,
                            })
                        }
                    />

                    <p>{formState.introduction?.length}/50</p>

                    <div className="SformDiv">
                        <div className="SfromDiv2">
                            <Ndiv>트랙</Ndiv>
                            <DropDown
                                options={trackOptions}
                                onChange={handleSelectChange('part')}
                            />
                        </div>
                    </div>
                    <ButtonSmall onClick={handleSubmit}>저장하기</ButtonSmall>
                </Form>
            </Container>
        </Wrapper>
    );
};

export default UserInfoModify;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Container = styled.div`
    margin: 100px 0;
`;

const Form = styled.form`
    width: 465px;
    //margin-top: 100px;
    display: flex;
    flex-direction: column;

    & > p {
        color: var(--Grey-600, #adb3ba);
        text-align: right;
        font-size: 16px;
        font-weight: 500;
    }
`;

const FlexBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 40px;
`;

const AvatarSmall = styled(Avatar)`
    width: 80px;
    height: 80px;
    margin-right: 8px;
`;

const ImageBtn = styled.button`
    width: 108px;
    height: 32px;
    border-radius: 6px;
    border: 1px solid var(--Grey-400, #dcdfe3);
    background-color: transparent;
    cursor: pointer;

    color: var(--Grey-800, #4d5359);
    text-align: center;
    font-size: 14px;
    font-weight: 700;
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
    box-sizing: border-box;
    width: 464px;
    height: 148px;
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

const ButtonSmall = styled(Button)`
    width: 100px;
    height: 44px;
    margin-top: 64px;
    align-self: self-end;
`;
