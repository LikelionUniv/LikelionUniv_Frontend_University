import MMoreInfo from '../../../components/login/mobile/MMoreInfo';
import '../signUp/components/signUp.css';
import Sform from './components/Sform';
//import '../components/LoadScript';

const SignUp = () => {
    return (
        <>
            <MMoreInfo />
            <div className="sDiv">
                <Sform />
            </div>
        </>
    );
};

export default SignUp;
