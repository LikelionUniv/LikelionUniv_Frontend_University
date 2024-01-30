import React, { useState } from 'react';
import styled from 'styled-components';
import usePatchUser, { UserType } from '../../../query/patch/usePatchUser';
import Cancel from '../../../img/admin/Cancel.svg';

interface EditModalProps {
    userId: number;
    user: UserType;
    onClose: () => void;
}

const EditModal: React.FC<EditModalProps> = ({ userId, user, onClose }) => {
    const [editedData, setEditedData] = useState<UserType>({ ...user });
    const { mutate: updateUser } = usePatchUser({ userId });

    const handleChange = (field: keyof UserType, value: any) => {
        setEditedData(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        updateUser(editedData, {
            onSuccess: () => {
                onClose(); // 수정 성공 후 모달 닫기
            },
            onError: error => {
                console.error(error); // 에러 처리
            },
        });
    };

    const handleCancel = () => {
        onClose(); // 모달 닫기
    };
    return (
        <BackgroundOverlay>
            <Wrapper>
                <Title>회원 정보 수정하기</Title>
                <CancelIcon
                    style={{ width: '18px', height: '18px' }}
                    src={Cancel}
                    onClick={handleCancel}
                    alt="취소"
                />

                <Divider />
                <Content>
                    <div className="BoxName">이름</div>
                    <input
                        className="InputBox"
                        type="text"
                        value={editedData.name || ''}
                        onChange={e => handleChange('name', e.target.value)}
                    />
                    <div className="BoxName">전공</div>
                    <input
                        className="InputBox"
                        type="text"
                        value={editedData.major || ''}
                        onChange={e => handleChange('major', e.target.value)}
                    />
                    <div className="BoxName">이메일</div>
                    <input className="InputBox" type="text" readOnly />
                </Content>

                <DropDownContainer>
                    <DropDown>
                        <div className="DropdownName">기수 변경</div>
                        <select
                            className="DropdownList"
                            value={editedData.ordinal || ''}
                            onChange={e =>
                                handleChange(
                                    'ordinal',
                                    parseInt(e.target.value, 10),
                                )
                            }
                        >
                            {Array.from({ length: 12 }, (_, i) => i + 1).map(
                                num => (
                                    <option key={num} value={num}>
                                        {`${num}기`}
                                    </option>
                                ),
                            )}
                        </select>
                    </DropDown>

                    <DropDown>
                        <div className="DropdownName">트랙 변경</div>
                        <select
                            className="DropdownList"
                            value={editedData.part || ''}
                            onChange={e => handleChange('part', e.target.value)}
                        >
                            <option value="PM_DESIGNER">기획</option>
                            <option value="PM_DESIGNER">디자인</option>
                            <option value="FRONTEND">프론트엔드</option>
                            <option value="BACKEND">백엔드</option>
                        </select>
                    </DropDown>

                    <DropDown>
                        <div className="DropdownName">역할 변경</div>
                        <select
                            className="DropdownList"
                            value={editedData.role || ''}
                            onChange={e => handleChange('role', e.target.value)}
                        >
                            <option value="UNIVERSITY_ADMIN">대표</option>
                            <option value="MANAGER">운영진</option>
                            <option value="USER">아기사자</option>
                        </select>
                    </DropDown>
                </DropDownContainer>
                <Button onClick={handleSave}>수정하기</Button>
            </Wrapper>
        </BackgroundOverlay>
    );
};

export default EditModal;

const BackgroundOverlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
`;

export const Wrapper = styled.div`
    width: fit-content;
    height: fit-content;
    margin: 0 auto;
    margin-top: 32px;
    background-color: white;
    padding: 32px 24px 24px 24px;
    min-width: 588px;
    min-height: 600px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    border-radius: 20px;

    position: fixed;
`;

const Button = styled.div`
    margin: 20px;
    width: 90%;
    height: 40px;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    color: #fff;
    border: none;
    cursor: pointer;

    background-color: #ff7710;

    border-radius: 8px;
`;
const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const CancelIcon = styled.img`
    width: 18px;
    height: 18px;
    position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
`;

export const Content = styled.div`
    flex-direction: column;
    margin: 20px;

    .BoxName {
        margin: 20px 0px 20px 0px;
        font-weight: 700;
    }

    .InputBox {
        width: 95%;
        height: 48px;
        padding-left: 20px;

        border-radius: 6px;
        border: 1px solid #dcdfe3;
        margin-bottom: 16px;
        align-items: center;
    }
`;

const Divider = styled.div`
    height: 1px;
    background-color: var(--Grey-900, #dcdfe3);
    width: 100%;
    margin: 26px 0px 26px 0px;
`;

const DropDownContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const DropDown = styled.div`
    flex: 1;
    margin: 0px 20px 20px 20px;
    width: 100%;

    .DropdownName {
        margin-bottom: 10px;
        font-weight: 700;
    }

    .DropdownList {
        padding-left: 20px;
        width: 95%;
        height: 42px;
        border: 1px solid #dcdfe3;
    }
`;
