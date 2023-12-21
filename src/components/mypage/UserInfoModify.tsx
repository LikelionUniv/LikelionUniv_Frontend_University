import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Avatar, Button } from './Common';
import SchoolDropDown from '../signUp/SchoolDropDown';
import DropDown from '../signUp/DropDown';
import { OptionType } from '../signUp/DropDown';
import { ActionMeta } from 'react-select';
import {useRecoilState} from 'recoil'
import {UserProfileAtom} from '../../store/mypageData'
import {IuserModify} from './type'
import {userInfoModifyApi} from '../../api/mypage/userinfo'
import { useNavigate } from 'react-router-dom';

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

const UserInfoModify = () => {
    //초기 렌더링 시 유저 기본정보 받아와서 formState에 채워넣기
    const [formState, setFormState] = useState<IuserModify>({
        name : '',
        introduction: '',
        profileImage: '',
        part: '',
    });

    const navigate = useNavigate();
    const [userProfile , updateUserProfile] = useRecoilState(UserProfileAtom);

    useEffect( ()=>{
        console.log("초기 렌더링 시 유저 정보 상태 저장")
        console.log(userProfile);

        setFormState({
            name : userProfile.name,
            introduction : userProfile.introduction,
            profileImage : userProfile.profileImage ,
            part : userProfile.part,
        });
    }
    ,[])

    const handleSelectChange =
        (field: keyof IuserModify) =>
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

    // 이미지 파일 받아오기
    const fileRef = useRef<HTMLInputElement | null>(null);

    //사진 변경하기 클릭 -> 파일 선택창 띄움
    const handleImgBtn = () => {
        console.log(fileRef);
        if (fileRef.current) {
            fileRef.current.click();
        }
    };

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files;

        if (file != null) {
            const newUrl: string = await readUrl(file[0]);

            // console.log(newUrl)

            //setImgUrl(newUrl)

            setFormState(prev => ({
                ...prev,
                profileImage: newUrl,
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

        if (
            formState.name === '' ||
            formState.introduction === '' ||
            formState.profileImage === '' ||
            formState.part === ''
        )
            alert('모든 항목을 입력했는지 확인해주세요.');
        else {
            /* button click으로 해서 정보 저장됨 확인 */
            console.log(formState);
            //수정 API 요청
            const res =  await userInfoModifyApi(userProfile.id , formState);
            console.log(res.response.data.isSuccess)
            //성공 시 마이페이지로 이동
            if(res.response.data.isSuccess) {
                alert("성공적으로 저장되었습니다.")
                updateUserProfile({
                    ...userProfile,
                    name : formState.name,
                    introduction : formState.introduction,
                    profileImage : formState.profileImage,
                    part : formState.part,
                })
                navigate(-1);
            }
            else{
                alert("저장에 실패했습니다.")
                navigate(-1);
            }
            //실패 시 마이페이지로 이동
        }
    };

    return (
        <Wrapper>
            <Container>
                <div className="Stitle">내 정보 수정</div>

                <FlexBox>
                    <Avatar_sm imgurl={formState.profileImage} />
                    <ImageBtn onClick={handleImgBtn}>사진 변경하기</ImageBtn>
                    <input
                        type="file"
                        style={{ display: 'none' }}
                        ref={fileRef}
                        onChange={handleFileSelect}
                    />
                    {/* <img src={imgUrl} /> */}
                </FlexBox>

                <Form>
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

                    {/* <Ndiv>전화번호</Ndiv>
                    <Nform
                        placeholder="전화번호"
                        value={formState.phone}
                        onChange={e =>
                            setFormState({
                                ...formState,
                                phone: e.target.value,
                            })
                        }
                    /> */}

                    {/* <Ndiv>학교</Ndiv>
                    <SchoolDropDown
                        onChange={handleSelectChange('university')}
                    /> */}

                    <div className="SformDiv">
                        {/* <div className="SfromDiv2">
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
                        </div> */}

                        <div className="SfromDiv2">
                            <Ndiv>트랙</Ndiv>
                            <DropDown
                                options={trackOptions}
                                onChange={handleSelectChange('part')}
                            />
                        </div>
                    </div>
                    <Button_sm onClick={handleSubmit}>저장하기</Button_sm>
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
    margin:100px 0 ;
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

const Avatar_sm = styled(Avatar)`
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

const Button_sm = styled(Button)`
    width: 100px;
    height: 44px;
    margin-top: 64px;
    align-self: self-end;
`;
