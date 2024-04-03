import MMoreInfo from '../../../components/login/mobile/MMoreInfo';
import Sform from '../../../components/signUp/Sform';
import '../../../styles/signUp.css';
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
