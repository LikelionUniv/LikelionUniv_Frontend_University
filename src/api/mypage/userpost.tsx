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
                return result;
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
                return result;
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
                return result;
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
                return result;
            }
        });
};
