import axios from 'axios'

// 인가코드 서버로 전송 , idtoken return 
export const requestIdtoken = async (authorizationCode :any ,provider : string|undefined) => {
    return await axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/v1/auth/${provider}/idtoken?code=${authorizationCode}`,
            { 
              withCredentials: true ,
            }
      )
      .then((response) => {
        //idtoken return
        console.log("idToken 가져옴!")
        localStorage.setItem('idtoken' , response.data.data.idToken);
        return Promise.resolve(response.data.data.idToken);
      })
      .catch((e) => {
        console.log('idToken 못 가져옴!');
        return "인가 코드 인증 오류";
      });
  };

  // 기존 회원인지 아닌지 t/f 리턴 , True일 경우 localStorage에 accesstoken , refresh token 저장
  export const requestLogin = async (provider : string|undefined, idtoken : any) => {
    console.log(idtoken);
    return await axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/v1/auth/${provider}/login?idtoken=${idtoken}`,{
            // headers : {
            //   'Authorization': `Bearer ${idtoken}`,
            //   'Accept': '*/*'
            // },
            // withCredentials: true 
        })
      .then((response) => {
        const isUser = response.data.data.isRegistered;
        if(isUser){
          const {accessToken , refreshToken} = response.data.data

          // axios header에 accessToken 정보 포함.
          axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
          localStorage.setItem('access-token', accessToken);
          localStorage.setItem('refresh-token',refreshToken);
        }
        
        return isUser;

      })
      .catch((e) => {
        console.log(e);
        return "로그인 요청 실패"
      });
  };

  // 유저정보 GET
  export const requestUserInfo = async () =>{

    const token = localStorage.getItem('access-token');
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return await axios
      .get(`${process.env.REACT_APP_BASE_URL}/v1/auth/userinfo`,
      {
        withCredentials: true,
      })
      .then((response) => {
        return response.data.data;
      })
      .catch((e) => {
        return "회원정보 요청 실패";
      })
  }

  const requestSignup = async (provider : string|undefined) =>{
    const idtoken = localStorage.getItem('idtoken');
    console.log(idtoken);
    
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/v1/auth/${provider}/signup?idtoken=${idtoken}`,
         FormData,
         {
            withCredentials : true,
        });
        
        //응답 성공 시
        if(response.data.isSuccess){
            localStorage.removeItem('idtoken');
            return true;
        }
        else {
            alert("서버 통신 오류! 다시 시도해주세요!");
        }
    }
    catch(error) {
        console.error("요청 실패" , error);
    }
}

  