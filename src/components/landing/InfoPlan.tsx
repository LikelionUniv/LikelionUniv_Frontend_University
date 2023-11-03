import InfoPlanBox from './InfoPlanBox';
import * as IF from './Information.style';


const InfoPlan = () => {
  return (
    <div  style={{flexWrap: 'wrap', display: 'flex', gap: '24px'}}>
    <InfoPlanBox />
    <InfoPlanBox />
    <InfoPlanBox />
    <InfoPlanBox />
    <InfoPlanBox />
    <InfoPlanBox />
    </div>
  )
}

export default InfoPlan