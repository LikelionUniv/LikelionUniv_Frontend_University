import * as D from './DetailStyle';
import Header from './Header';
import Like from './Like';
import { ReactComponent as ArrowIcon } from '../../../img/community/arrow_left.svg';
import Comment from './Comment';

const CommunityDetail = () => {
  
  return (
    <D.Container>
        <div className='back'>
            <ArrowIcon/> 플젝 모집
        </div>
        <Header />
        {/*TextArea 본문의 경우 quill editor를 통해 글 작성자가 쓴 그대로 html형식으로 받아질 예정*/}
        <D.TextArea> 
        [디자이너 모집] 🦁멋사 플젝 디자이너 모집🦁
        안녕하세요! 멋쟁이사자처럼 홍익대학교 11기 대표입니다.
        멋쟁이사자처럼은 테크 기반 아이디어 실현을 위한 전국 규모의 창업 연합 동아리입니다.
        멋쟁이사자처럼은 현재 60여개의 국내 대학의 연합으로 이루어져 있습니다.
        </D.TextArea>
        <Like/>
        <Comment />
    </D.Container>
  )
}

export default CommunityDetail
