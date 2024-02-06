import '../styles/signUp.css';
import Sform from '../components/signUp/Sform';
import SignupModal from '../components/login/mobile/SignupModal';
import MMoreInfo from '../components/login/mobile/MMoreInfo';
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
