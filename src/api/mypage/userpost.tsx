import axios from 'axios';

export const mypageGetPostApi = async (user_id: number, page: number) => {
    const token = localStorage.getItem('access-token');
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/v1/user/${user_id}/posts?page=${page}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    withCredentials: true,
                },
            },
        );
        console.log(response.data.data);
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const result = error.response?.data?.detail;
            return result;
        }
    }
};

export const mypageGetCommentApi = async (user_id: number, page: number) => {
    const token = localStorage.getItem('access-token');
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/v1/user/${user_id}/posts/comment?page=${page}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    withCredentials: true,
                },
            },
        );
        console.log(response.data.data);
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const result = error.response?.data?.detail;
            return result;
        }
    }
};

export const myPageGetLikeApi = async (
    user_id: number,
    page: number,
    sort?: string,
    search?: string,
) => {
    const token = localStorage.getItem('access-token');
    try {
        let url = `${process.env.REACT_APP_BASE_URL}/v1/user/${user_id}/posts/like?page=${page}`;
        if (sort) {
            url += `&sort=${sort}`;
        }
        if (search) {
            url += `&search=${search}`;
        }
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
                withCredentials: true,
            },
        });
        console.log(response.data.data);
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const result = error.response?.data?.detail;
            return result;
        }
    }
};

export const mypageGetProjectApi = async () => {
    const token = localStorage.getItem('access-token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
