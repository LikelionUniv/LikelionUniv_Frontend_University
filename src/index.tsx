import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { RecoilRoot } from 'recoil';
import './styles/font.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactGA from 'react-ga';

// stale time 10분으로 설정
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 600 * 1000,
            retry: 0,
        },
    },
});

//Google Analytics
// const gaTrackingId = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID; // 환경 변수에 저장된 추적ID 가져오기

// if (gaTrackingId) {
//     ReactGA.initialize(gaTrackingId, { debug: true });
//     ReactGA.pageview(window.location.pathname);
// }

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <RouterProvider router={router}></RouterProvider>
            </RecoilRoot>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
