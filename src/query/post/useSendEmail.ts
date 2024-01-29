import {
    useMutation,
    UseMutationResult,
    useQueryClient,
} from '@tanstack/react-query';
import request from '../../utils/request';

interface EmailAlarmData {
    roles: string[];
    subject: string;
    contentsType: string;
    contents: string;
}

interface EmailResponse {
    timestamp: string;
    isSuccess: boolean;
    code: string;
    message: string;
    data: string;
}

async function sendEmail(emailData: EmailAlarmData): Promise<EmailResponse> {
    const response = await request<EmailAlarmData, EmailResponse, null>({
        uri: '/api/admin/v1/alarm',
        method: 'post',
        data: emailData,
    });
    return response.data;
}

function useSendEmail(): UseMutationResult<
    EmailResponse,
    Error,
    EmailAlarmData,
    unknown
> {
    const queryClient = useQueryClient();

    return useMutation<EmailResponse, Error, EmailAlarmData>({
        mutationFn: sendEmail,
        onSuccess: (data: EmailResponse) => {
            console.log('Email sent successfully:', data);
            // 성공 시 추가 로직 (예: 쿼리 데이터 무효화)
        },
        onError: (error: Error) => {
            console.error('Error sending email:', error);
            // 오류 시 추가 로직
        },
    });
}

export default useSendEmail;
