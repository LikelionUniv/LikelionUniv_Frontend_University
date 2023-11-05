import * as IF from './Information.style';
import Arrow from '../../img/landing/orange_arrow.png';

const InfoPlanBox = () => {
  return (
    <IF.PlanBox>
        <img src={Arrow} alt="" className='img'/>
        <div className='week'>WEEK 1</div>
        <div className='content'>활동 내용 설명을 작성해야해요</div>

    </IF.PlanBox>
    
  )
}

export default InfoPlanBox