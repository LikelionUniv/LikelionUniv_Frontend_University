import axios from 'axios'

// 인가코드 서버로 전송 , idtoken return 
export const requestIdtoken = async (authorizationCode :any ,provider : string|undefined) => {
    return await axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/v1/auth/${provider}/idtoken?code=${authorizationCode}`,
            { withCredentials: true }
      )
      .then((response) => {
        //idtoken return
        return response.data.data.idToken;
      })
      .catch((e) => {
        console.log(e.response.data);
        return "인가 코드 인증 오류";
      });
  };

  // 기존 회원인지 아닌지 t/f 리턴 , True일 경우 localStorage에 accesstoken , refresh token 저장
  export const requestLogin = async (provider : string|undefined, idtoken : any) => {
    return await axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/v1/auth/${provider}/login?idtoken=${idtoken}`,
            { withCredentials: true }
        )
      .then((response) => {
        /// header에 access token 설정
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
        console.log(e.response.data);
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
