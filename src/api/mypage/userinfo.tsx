import axios from 'axios';
import { IuserModify } from '../../components/mypage/type';
import { axiosInstance } from '../../utils/axios';
export const userProfileApi = async (user_id: number) => {
    const userid = 3;

    return await axiosInstance
        .get(`${process.env.REACT_APP_BASE_URL}/v1/user/${user_id}/profile`)
        .then(response => {
            console.log('UserProfile', response.data.data);
            return response.data.data;
        })
        .catch(error => {
            console.log('userProflieError', error);
            return error;
        });
};

//size 파라미터 수정 필요.
export const userFollowApi = async (
    user_id: number,
    page: number,
    follow: string,
) => {
    const userid = 3;

    return await axios
        .get(
            `${process.env.REACT_APP_BASE_URL}/v1/user/${user_id}/${follow}?page=${page}&size=16`,
        )
        .then(response => {
            // console.log("userFollow ",response.data.data );
            return response.data;
        })
        .catch(error => {
            console.log('UserFollowError ', error);
            return error;
        });
};

export const followAddApi = async (user_id: number) => {
    return await axios
        .post(`${process.env.REACT_APP_BASE_URL}/v1/follow/${user_id}`)
        .then(response => {
            // console.log("followAdd ",response);
            return response.data;
        })
        .catch(error => {
            // console.log("followAddError ",error);
            return error;
        });
};

export const followDeleteApi = async (user_id: number) => {
    const userid = 3;

    return await axios
        .delete(`${process.env.REACT_APP_BASE_URL}/v1/follow/${user_id}`)
        .then(response => {
            // console.log("followDelete ",response.data.data );
            return response.data;
        })
        .catch(error => {
            // console.log("followDeleteError ",error);
            return error;
        });
};

export const userInfoModifyApi = async (
    user_id: number,
    user_info: IuserModify,
) => {
    return await axios
        .patch(
            `${process.env.REACT_APP_BASE_URL}/v1/user/${user_id}/profile`,
            user_info,
        )
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
};

export const requestPresignedUrl = async (
    user_id: number,
    extension: string,
) => {
    return await axios
        .get(`${process.env.REACT_APP_BASE_URL}/v1/image/user/${user_id}`, {
            params: {
                fileNameExtension: extension,
            },
        })
        .then(response => {
            return response.data.data;
        })
        .catch(error => {
            return error;
        });
};

export const imageUploadToS3 = async (user_id: number, file: File) => {
    const fileName = file.name.split('.');
    const extension = fileName[fileName.length - 1];

    const url = await requestPresignedUrl(user_id, extension);

    if (url.presignedUrl === undefined) return 'PresignedUrl Undefined';

    return await axios
        .put(url.presignedUrl, file)
        .then(response => {
            console.log(response);
            return url.imageUrl;
        })
        .catch(error => {
            return error;
        });
};
