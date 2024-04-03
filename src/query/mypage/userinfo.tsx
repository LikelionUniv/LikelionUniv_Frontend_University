import { IuserModify } from '../../components/mypage/type';
import { axiosInstance } from '../../api/axios';

export const userProfileApi = async (user_id: number) => {
    return await axiosInstance
        .get(`/api/v1/user/${user_id}/profile`)
        .then(response => {
            // console.log('UserProfile', response.data.data);
            return response.data.data;
        })
        .catch(error => {
            // console.log('userProflieError', error);
            return error;
        });
};

//size 파라미터 수정 필요.
export const userFollowApi = async (
    user_id: number,
    page: number,
    follow: string,
) => {
    return await axiosInstance
        .get(`/api/v1/user/${user_id}/${follow}?page=${page}&size=16`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            // console.log('UserFollowError ', error);
            return error;
        });
};

export const followAddApi = async (user_id: number) => {
    return await axiosInstance
        .post(`/api/v1/follow/${user_id}`)
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
    return await axiosInstance
        .delete(`/api/v1/follow/${user_id}`)
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
    return await axiosInstance
        .patch(`/api/v1/user/${user_id}/profile`, user_info)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
};
