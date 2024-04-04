import * as IF from './Information.style';
import Arrow from '../../../img/landing/orange_arrow.png';

interface InfoPlanBoxProps {
    week: string;
    content: string;
}

const InfoPlanBox: React.FC<InfoPlanBoxProps> = ({ week, content }) => {
    return (
        <IF.PlanBox>
            <img src={Arrow} alt="" className="img" />
            <div className="week">{week}</div>
            <div className="content">{content}</div>
        </IF.PlanBox>
    );
};

export default InfoPlanBox;
