import { useSuspenseQuery } from '@tanstack/react-query';
import request from '../../utils/request';

interface useGetDonateDetailProps {
    donationHistoryId: number;
}

export interface IDonateDetail {
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

interface IAttachment {
    fileName: string;
    fileExtension: string;
    fileUrl: string;
}

interface DonateDetailParam {
    donationHistoryId: number;
}

function useGetDonateDetail({ donationHistoryId }: useGetDonateDetailProps) {
    const fetchDonateDetail = async () => {
        const response = await request<null, IDonateDetail, DonateDetailParam>({
            uri: `/api/v1/donation_history/${donationHistoryId}`,
            method: 'get',
            params: {
                donationHistoryId,
            },
        });

        return response.data;
    };

    const { data } = useSuspenseQuery({
        queryKey: ['donation-detail', donationHistoryId],
        queryFn: fetchDonateDetail,
    });

    return {
        data,
    };
}

export default useGetDonateDetail;
