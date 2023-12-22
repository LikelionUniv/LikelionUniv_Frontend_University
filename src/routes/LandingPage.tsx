import { useEffect } from 'react';
import Landing from '../components/landing/Landing';
import login from '../dev/login';
//import '../components/LoadScript';

const LandingPage = () => {
    // login dev
    useEffect(() => {
        const loginDev = async () => {
            await login();
        };

        loginDev();
    }, []);
    return <Landing />;
};

export default LandingPage;
