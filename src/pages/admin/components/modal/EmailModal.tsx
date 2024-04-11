import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import cancel from '../../../../img/admin/Cancel.svg';
import { useSelectedUsers } from '../SelectedUserContext';
import { axiosInstance } from '../../../../api/axios';

interface SelectedFile {
    id: number;
    name: string;
    file: File;
}

interface EmailModalProps {
    onCancel: () => void;
}

const EmailModal: React.FC<EmailModalProps & { selectedEmails: string[] }> = ({
    onCancel,
    selectedEmails,
}) => {
    const [sender] = useState('LIKELION UNIVERSITY');
    const [receivers, setreceivers] = useState<string[]>([]);
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [attachment, setAttachment] = useState<File | null>(null);
    const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>([]);
    const { selectedUserIds } = useSelectedUsers();
    const [isButtonActive, setIsButtonActive] = useState(false);
    const [inputreceivers, setInputreceivers] = useState('');
    const [isSending, setIsSending] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const filesArray = Array.from(event.target.files).map(file => ({
                id: Math.random(),
                name: file.name,
                file: file,
            }));
            setSelectedFiles(filesArray);
        }
    };

    const removeFile = (id: number) => {
        setSelectedFiles(selectedFiles.filter(file => file.id !== id));
    };

    useEffect(() => {
        setreceivers(selectedEmails);
        setInputreceivers(selectedEmails.join(', '));
    }, [selectedEmails]);

    useEffect(() => {
        setIsButtonActive(
            subject !== '' && content !== '' && receivers.length > 0,
        );
    }, [subject, content, receivers]);

    const handlereceiversChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputreceivers(e.target.value);
        const emails = e.target.value.split(',').map(email => email.trim());
        setreceivers(emails);
    };

    const handleSendEmail = async () => {
        if (!isButtonActive || isSending) return; // 이미 실행 중이면 중복 실행 방지

        setIsSending(true); // 버튼 비활성화
        document.body.style.cursor = 'wait';

        const formData = new FormData();

        const emailData = JSON.stringify({
            receivers: receivers,
            subject: subject,
            contentsType: 'html',
            contents: content,
        });
        const emailDataBlob = new Blob([emailData], {
            type: 'application/json',
        });
        formData.append('sendEmailDto', emailDataBlob);

        selectedFiles.forEach(selectedFile => {
            if (selectedFile.file) {
                formData.append(
                    'attachments',
                    selectedFile.file,
                    selectedFile.name,
                );
            }
        });

        try {
            const response = await axiosInstance.post(
                '/api/admin/v1/alarm/email',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                },
            );

            if (response.status === 200 || response.status === 504) {
                console.log('Email sent successfully');
                window.alert('이메일이 성공적으로 발송되었습니다!');
                onCancel();
            } else {
                console.error('Error sending email:', response.data);
                window.alert('이메일 발송에 실패했습니다.');
                onCancel();
            }
        } catch (error) {
            console.error('Error sending email:', error);
            window.alert('이메일 발송에 실패했습니다.');
            onCancel();
        } finally {
            setIsSending(false);
            document.body.style.cursor = 'default';
        }
    };

    return (
        <>
            <BackgroundOverlay />
            <Wrapper>
                <Title>이메일 보내기</Title>
                <CancelIcon src={cancel} onClick={onCancel} alt="취소" />

                <Divider />
                <Content>
                    <div className="BoxName">보내는 사람</div>
                    <input
                        className="InputBox"
                        type="text"
                        value={sender}
                        readOnly
                    />
                    <div className="BoxName">받는 사람</div>
                    <input
                        className="InputBox"
                        type="text"
                        value={inputreceivers}
                        onChange={handlereceiversChange}
                    />
                    <Divider />
                    <div className="BoxName">제목</div>
                    <input
                        className="InputBox"
                        type="text"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                    />
                    <div className="BoxName">내용</div>
                    <Textarea
                        className="InputBox"
                        placeholder="내용을 입력하세요..."
                        value={content}
                        onChange={e => setContent(e.target.value)}
                    />
                    <div className="FileBox">
                        <div className="BoxName">파일 첨부</div>
                        <div className="FileInput">
                            <label htmlFor="fileInput">
                                <FileInputLabel className="FileInput">
                                    <FileInput
                                        type="file"
                                        id="fileInput"
                                        onChange={handleFileChange}
                                        multiple
                                    />
                                </FileInputLabel>
                            </label>
                        </div>
                    </div>
                    {selectedFiles.map(file => (
                        <SelectedFileBox key={file.id}>
                            {file.name}
                            <CloseIcon onClick={() => removeFile(file.id)}>
                                X
                            </CloseIcon>
                        </SelectedFileBox>
                    ))}
                </Content>

                <Button
                    style={{
                        backgroundColor: isButtonActive ? '#ff7710' : '#ADB3BA',
                        cursor: isButtonActive ? 'pointer' : 'default',
                    }}
                    onClick={handleSendEmail}
                >
                    보내기
                </Button>
            </Wrapper>
        </>
    );
};

export default EmailModal;

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
    background-color: white;
    padding: 32px 24px 24px 24px;
    min-width: 588px;
    min-height: 600px;
    border-radius: 20px;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
`;
const Button = styled.div`
    margin: 10px;
    width: 95%;
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
    padding-bottom: 10px;
`;

const CancelIcon = styled.img`
    margin-top: 10px;
    width: 18px;
    height: 18px;
    position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
`;
export const Content = styled.div`
    flex-direction: column;
    display: flex;
    margin: 20px 40px 20px 20px;
    position: relative;

    .BoxName {
        margin: 20px 0px;
        font-weight: 700;
    }

    .InputBox {
        width: 100%;
        height: 48px;
        padding-left: 20px;
        border-radius: 6px;
        border: 1px solid #dcdfe3;
        margin-bottom: 0px;
        display: flex;
        align-items: center;
    }

    .FileBox {
        display: flex;
    }

    .FileInput {
        margin: 20px 10px;
    }
`;

const Divider = styled.div`
    height: 1px;
    background-color: var(--Grey-900, #dcdfe3);
    width: 100%;
    margin: 13px 0px 0px 0px;
`;

const Textarea = styled.textarea`
    width: 0 auto;
    height: 200px;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #dcdfe3;
    margin-bottom: 16px;
    resize: vertical;
    overflow-y: auto;
`;

const FileInput = styled.input`
    /* Hide the actual file input */
    display: none;
`;

const FileInputLabel = styled.label`
    &::before {
        content: '파일 추가하기';
        background-color: #ffffff;
        color: #4d5359;
        font-weight: 700;
        border: 1px solid #dcdfe3;
        padding: 7px 16px;
        border-radius: 10px;
        cursor: pointer;
    }
`;

const SelectedFileBox = styled.div`
    width: 100%;
    height: 20px;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #dcdfe3;
    margin: 5px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const CloseIcon = styled.span`
    cursor: pointer;
`;
