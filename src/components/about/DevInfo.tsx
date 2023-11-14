import * as D from './DevlopersStyle';
import profileImage from '../../img/about/profile.png';

interface InfoProp {
    name: string;
    from: string;
    position?: string | null;
    profile?: string;
}

const DevInfo: React.FC<InfoProp> = ({
    name,
    from,
    position,
    profile = profileImage,
}) => {
    return (
        <D.InfoBox>
            <img src={profile} alt="" className="image" />
            <div className="info">
                <p className="name">{name}</p>
                <p className="from">{from}</p>
                {position && <p className="position">{position}</p>}
            </div>
        </D.InfoBox>
    );
};

export default DevInfo;