import axios from 'axios'

export const userProfileApi = async (user_id : number) =>{

    //
    const userid = 3

    return await axios
            .get(`${process.env.REACT_APP_BASE_URL}/v1/user/${userid}/profile`)
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
export const userFollowApi = async (user_id: number , page: number , follow: string) => {
    const userid = 3

    return await axios 
        .get(`${process.env.REACT_APP_BASE_URL}/v1/user/${userid}/${follow}?page=${page}&size=16`)
        .then((response) => {
            // console.log("userFollow ",response.data.data );
            return response.data;
        })
        .catch((error)=>{
            console.log("UserFollowError ",error);
            return error;
        })
}

export const followAddApi = async (user_id: number) => {

    return await axios 
        .post(`${process.env.REACT_APP_BASE_URL}/v1/follow/${user_id}`)
        .then((response) => {
            // console.log("followAdd ",response);
            return response.data;
        })
        .catch((error)=>{
            // console.log("followAddError ",error);
            return error;
        })
}

export const followDeleteApi = async (user_id: number) => {
    const userid = 3

    return await axios 
        .delete(`${process.env.REACT_APP_BASE_URL}/v1/follow/${userid}`)
        .then((response) => {
            // console.log("followDelete ",response.data.data );
            return response.data;
        })
        .catch((error)=>{
            // console.log("followDeleteError ",error);
            return error;
        })
}

