import { ReactComponent as Logo } from '../../img/nav/logo.svg';
import * as IF from './Information.style';

const InfoSupport = () => {
    return (
        <div
            style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
            <IF.SupportBox>
                <div className="wrapper">
                    <div className="logo">
                        <Logo />
                    </div>
                </div>
                <div className="wrapper">
                    <div className="logo">
                        <Logo />
                    </div>
                </div>
                <div className="wrapper">
                    <div className="logo">
                        <Logo />
                    </div>
                </div>
            </IF.SupportBox>
            <IF.SupportBox>
                <div className="wrapper">
                    <div className="logo">
                        <Logo />
                    </div>
                </div>
                <div className="wrapper">
                    <div className="logo">
                        <Logo />
                    </div>
                </div>
                <div className="wrapper">
                    <div className="logo">
                        <Logo />
                    </div>
                </div>
            </IF.SupportBox>
        </div>
    );
};

export default InfoSupport;
