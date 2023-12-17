import { useEffect } from 'react';

declare global {
    interface Window {
        dataLayer: any[];
    }
}

const LoadScript = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-HHBKFPN6V6';
        script.async = true;

        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
            window.dataLayer.push(args);
        }
        gtag('js', new Date());
        gtag('config', 'G-HHBKFPN6V6');

        document.body.appendChild(script);
    }, []);

    return null;
};

export default LoadScript;
