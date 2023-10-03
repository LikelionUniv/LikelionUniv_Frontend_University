import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './routes/SignUp';
import Project from './routes/Project';
import Chat from './routes/Chat';
import Root from './routes/root';
import LoginPage from './routes/LoginPage';
import Mypage from './routes/Mypage';
import Community from './routes/Community';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/signup',
                element: <SignUp />,
            },
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path : '/mypage',
                element: <Mypage/>
            },
            {
                path: '/project',
                element: <Project />,
            },
            {
                path: '/chat',
                element: <Chat />,
            },
            {
                path: '/community',
                element: <Community />,
            },
        ],
    },
]);

export default router;
