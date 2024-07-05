import { useNavigate } from 'react-router-dom';

import * as A from './CompleteApplicationStyle';

const CompleteApplication = () => {
    const navigate = useNavigate();
    return (
        <A.Wrapper>
            <A.Container>
                <A.ItemBox>
                    <div className="img"></div>
                    <p>
                        신청이 완료되었습니다!
                        <br />
                        메일로 전송된 참가 확인서를 확인해보세요!
                    </p>
                    <A.Button
                        onClick={() => {
                            navigate('/mypage');
                        }}
                    >
                        마이페이지로 이동하기
                    </A.Button>
                </A.ItemBox>
            </A.Container>
        </A.Wrapper>
    );
};

export default CompleteApplication;
