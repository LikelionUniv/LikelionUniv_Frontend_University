import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './routes/SignUp';
import LoginPage from './routes/LoginPage';
import Project from './routes/Project';
import Chat from './routes/Chat';
import Root from './routes/root';
import Recruit from './routes/Recruit';

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
                element: <LoginPage />,
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
                path: '/recruit',
                element: <Recruit />,
            },
        ],
    },
]);

export default router;
