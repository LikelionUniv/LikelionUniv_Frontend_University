import React, { useState, useEffect } from 'react';
import * as D from './style/DonateDetail.style';
import { useNavigate, useParams } from 'react-router-dom';
import eye from '../../img/donate/eye.svg';
import download from '../../img/donate/download.svg';
import request from '../../utils/request';
import { downloadFile } from '../layout/Footer';
import { LeftArrow } from '../../img/project/detail';

interface IDonateDetail {
    donationHistoryId: number;
    authorId: number;
    authorName: string;
    authorProfileImage: string;
    title: string;
    body: string;
    isAuthor: boolean;
    createdDate: string;
    viewCount: number;
    attachments: IAttachment[];
}

interface DonateDetailParam {
    donationHistoryId: number;
}

interface IAttachment {
    fileName: string;
    fileExtension: string;
    fileUrl: string;
}

function DonateDetail() {
    const { donationHistoryId } = useParams();

    const [data, setData] = useState<IDonateDetail>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await request<
                null,
                IDonateDetail,
                DonateDetailParam
            >({
                uri: `/api/v1/donation_history/${donationHistoryId}`,
                method: 'get',
                params: {
                    donationHistoryId: Number(donationHistoryId),
                },
            });

            setData(response.data);
        };

        fetchData();
    }, [donationHistoryId]);

    const downloadThisFile = (url: string, fileName: string) => {
        downloadFile(url, fileName);
    };

    const navigate = useNavigate();

    const goList = () => {
        navigate('/donate');
    };

    return (
        <D.Container>
            {data !== undefined && (
                <>
                    <D.Title>{data.title}</D.Title>
                    <D.Body>
                        <D.Nav>
                            <D.Left>
                                <D.Profile
                                    src={`https://${data.authorProfileImage}`}
                                    alt="profile"
                                />
                                <D.User>{data.authorName}</D.User>
                            </D.Left>
                            <D.Right>
                                <D.CreatedAt>{data.createdDate}</D.CreatedAt>
                                <D.Eye src={eye} alt="eye" />
                                <D.ViewCount>{data.viewCount}</D.ViewCount>
                            </D.Right>
                        </D.Nav>
                        <D.Attatchments>
                            {data.attachments.map((attachment, index) => (
                                <D.Attatchment key={index}>
                                    {attachment.fileName}
                                    <D.Download
                                        src={download}
                                        alt="download"
                                        onClick={() =>
                                            downloadThisFile(
                                                attachment.fileUrl,
                                                attachment.fileName,
                                            )
                                        }
                                    />
                                </D.Attatchment>
                            ))}
                        </D.Attatchments>
                        <D.Payload>{data.body}</D.Payload>
                        <D.BackBtn onClick={goList}>
                            <D.BtnIcon src={LeftArrow} alt="arrow" />
                            <D.BtnText>목록으로 돌아가기</D.BtnText>
                        </D.BackBtn>
                    </D.Body>
                </>
            )}
        </D.Container>
    );
}

export default DonateDetail;
