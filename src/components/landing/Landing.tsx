import './landing.css';
import MainGraphic from './MainGraphic';
import Information from './Information';
import Footer from './Footer';
import { useEffect } from 'react';
const Landing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <MainGraphic />
            <Information />
            <Footer />
        </>
    );
};

export default Landing;
