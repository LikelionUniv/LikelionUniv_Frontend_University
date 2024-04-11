import request from '../../api/request';
import axios from 'axios';

export interface PresignedUrlParam {
    fileNameExtension: string;
}

export interface PresignedUrlResponse {
    presignedUrl: string;
    imageUrl: string;
    fileName: string;
}

class ImageUpload {
    // presigned url 발급
    static async getPresignedUrl(file: File): Promise<PresignedUrlResponse> {
        const fileName = file.name.split('.');
        const extension = fileName[fileName.length - 1];
        const response = await request<
            null,
            PresignedUrlResponse,
            PresignedUrlParam
        >({
            uri: '/api/v1/image/project',
            method: 'get',
            params: {
                fileNameExtension: extension,
            },
        });

        if (response === undefined) {
            throw Error('서버 에러');
        }

        return response.data;
    }

    // s3에 이미지 등록
    static async enrollImagesToS3(file: File, presignedUrl: string) {
        const response = await axios.put(presignedUrl, file);
        if (response.status !== 200) {
            console.log('S3 오류');
            return;
        }
    }
}

export default ImageUpload;
