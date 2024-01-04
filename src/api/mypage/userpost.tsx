import axios from 'axios';
import { axiosInstance } from '../../utils/axios';

export const mypageGetPostApi = async (user_id: number, page: number) => {
    return await axiosInstance
        .get(
            `${process.env.REACT_APP_BASE_URL}/v1/user/${user_id}/posts?page=${page}`,
        )
        .then(response => {
            return response.data.data;
        })
        .catch(error => {
            if (axios.isAxiosError(error)) {
                const result = error.response?.data?.detail;
                return undefined;
            }
        });
};

export const mypageGetCommentApi = async (user_id: number, page: number) => {
    return await axiosInstance
        .get(
            `${process.env.REACT_APP_BASE_URL}/v1/user/${user_id}/posts/comment?page=${page}`,
        )
        .then(response => {
            return response.data.data;
        })
        .catch(error => {
            if (axios.isAxiosError(error)) {
                const result = error.response?.data?.detail;
                return undefined;
            }
        });
};

export const myPageGetLikeApi = async (
    user_id: number,
    page: number,
    sort?: string,
    search?: string,
) => {
    let url = `${process.env.REACT_APP_BASE_URL}/v1/user/${user_id}/posts/like?page=${page}`;
    if (sort) {
        url += `&sort=${sort}`;
    }
    if (search) {
        url += `&search=${search}`;
    }
    return await axiosInstance
        .get(url)
        .then(response => {
            return response.data.data;
        })
        .catch(error => {
            if (axios.isAxiosError(error)) {
                const result = error.response?.data?.detail;
                return undefined;
            }
        });
};

export const mypageGetProjectApi = async (user_id: number, page: number) => {
    return await axiosInstance
        .get(
            `${process.env.REACT_APP_BASE_URL}/v1/user/${user_id}/projects?page=${page}`,
        )
        .then(response => {
            return response.data.data;
        })
        .catch(error => {
            if (axios.isAxiosError(error)) {
                const result = error.response?.data?.detail;
                return undefined;
            }
        });
};

//이거는 좋아요 취소까지 다 하는 건지 물어봤으니 만약에 아니라면 delete만 추가하면 될 것 같다.
export const mypageLikePostApi = async (postId: number) => {
    return await axiosInstance
        .post(`${process.env.REACT_APP_BASE_URL}/v1/community/post-likes`, {
            postId,
        })
        .then(response => {
            return response.data.data;
        })
        .catch(error => {
            if (axios.isAxiosError(error)) {
                return undefined;
            }
        });
};

export const mypageDeletePostApi = async (postId: number) => {
    return await axiosInstance
        .delete(
            `${process.env.REACT_APP_BASE_URL}/v1/community/posts/${postId}`,
        )
        .then(response => {
            return response.data.data;
        })
        .catch(error => {
            if (axios.isAxiosError(error)) {
                const result = error.response?.data?.detail;
                return undefined;
            }
        });
};
