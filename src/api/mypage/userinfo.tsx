import axios from 'axios'

export const userProfileApi = async (user_id : number) =>{
    return await axios
            .get(`${process.env.REACT_APP_BASE_URL}/v1/user/${user_id}/profile`)
            .then((response) => {
                console.log("UserProfile",response.data.data);
                return response.data.data;
            })
            .catch((error) => {
                console.log("userProflieError", error);
                return error;
            })
} 

//size 파라미터 수정 필요.
export const userFollowingApi = async (user_id: number , page: number) => {
    return await axios 
        .get(`${process.env.REACT_APP_BASE_URL}/v1/user/${user_id}/following?page=${page}&size=4`)
        .then((response) => {
            console.log("userFollowing ",response.data.data );
            return response.data.data;
        })
        .catch((error)=>{
            console.log("UserFollowingError ",error);
            return error;
        })
}

export const userFollowerApi = async (user_id: number , page: number) => {
    return await axios 
        .get(`${process.env.REACT_APP_BASE_URL}/v1/user/${user_id}/follower?page=${page}&size=4`)
        .then((response) => {
            console.log("userFollowing ",response.data.data );
            return response.data.data;
        })
        .catch((error)=>{
            console.log("UserFollowingError ",error);
            return error;
        })
}

