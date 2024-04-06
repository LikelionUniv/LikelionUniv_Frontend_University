import React from 'react';
import * as D from './DonateDetail.style';
import { useNavigate, useParams } from 'react-router-dom';
import eye from '../../../img/donate/eye.svg';
import download from '../../../img/donate/download.svg';

import DefaultImage from '../../../img/univ/_default.png';
import useGetDonateDetail from '../../../query/get/useGetDonateDetail';
import { downloadFile } from '../../../components/layout/Footer';
import { LeftArrow } from '../../../img/project/detail';

function DonateDetailInner() {
    const { donationHistoryId } = useParams();
    const { data } = useGetDonateDetail({
        donationHistoryId: Number(donationHistoryId),
    });

    const downloadThisFile = (url: string, fileName: string) => {
        downloadFile(url, fileName);
    };

    const navigate = useNavigate();

    const goList = () => {
        navigate('/donate');
    };

    const makeProfileImage = () => {
        if (data.authorProfileImage === null) {
            return DefaultImage;
        }

        return `https://${data.authorProfileImage}`;
    };

    return (
        <>
            <D.Title>{data.title}</D.Title>
            <D.Body>
                <D.Nav>
                    <D.Left>
                        <D.Profile src={makeProfileImage()} alt="profile" />
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
    );
}

export default DonateDetailInner;
