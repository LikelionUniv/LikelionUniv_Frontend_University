import * as D from './DevlopersStyle';
import profileImage from '../../../img/about/profile.png';
import emailImage from '../../../img/about/Union.png';

interface InfoProp {
    name: string;
    from: string;
    position?: string | null;
    profile?: string;
    email?: string;
}

const DevInfo: React.FC<InfoProp> = ({
    name,
    from,
    position,
    profile = profileImage,
    email,
}) => {
    return (
        <D.InfoBox>
            <img src={profile} alt="" className="image" />
            <div className="info">
                <p className="name">{name}</p>
                <p className="from">{from}</p>
                {position && <p className="position">{position}</p>}
                {email && (
                    <p className="email">
                        <img src={emailImage} alt="" />
                        {email}
                    </p>
                )}
            </div>
        </D.InfoBox>
    );
};

export default DevInfo;
