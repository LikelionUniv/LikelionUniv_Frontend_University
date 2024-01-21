import * as W from './WLogin.style'
import LoginImage from '../../img/login/Login.png';

interface LoginProps {
  google_login: () => void,
  kakao_login: () => void
}

export default function WLogin({google_login, kakao_login}:LoginProps) {

  return(
    <W.Container>
        <W.Item src={LoginImage} alt="login" />
        <W.Box>
            <W.Text>
                멋쟁이사자처럼 대학에
                <br />
                오신 걸 환영합니다.
            </W.Text>
            <W.GoogleBtn onClick={google_login}>
                <span>Google 계정으로 로그인</span>
            </W.GoogleBtn>
            <W.KakaoBtn onClick={kakao_login}>
                <span>카카오 로그인</span>
            </W.KakaoBtn>
        </W.Box>
    </W.Container>
  )
}