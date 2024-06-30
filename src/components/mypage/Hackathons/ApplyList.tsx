import * as A from './ApplytListStyle';
import { useNavigate } from 'react-router-dom';

const ApplyList = () => {
    const navigate = useNavigate();
    return (
        <A.Wrapper>
            <A.TextArea>
                <A.Title>멋쟁이사자처럼 대학 12기 중앙 해커톤</A.Title>
                <A.Date>2024.8.6~8.7</A.Date>
            </A.TextArea>
            <A.Button onClick={() => navigate('/mypage')}>
                {' '}
                신청 정보 수정하기
            </A.Button>

            {/*             <A.Button onClick={navigate(`/hackatons/${hackathonFormId}`)}>
                신청 정보 수정하기
            </A.Button> */}
        </A.Wrapper>
    );
};

export default ApplyList;
