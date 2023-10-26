import { createBrowserRouter } from 'react-router-dom';
import SignUp from './routes/SignUp';
import LoginPage from './routes/LoginPage';
import LandingPage from './routes/LandingPage';
import Project from './routes/Project';
import Chat from './routes/Chat';
import Root from './routes/root';
import Mypage from './routes/Mypage';
import Recruit from './routes/Recruit';

import UnivPage from './routes/UnivPage';
import ProjectDetail from './components/project/Detail/ProjectDetail';
import ProjectRegister from './components/project/register/ProjectRegister';
import ProjectList from './components/project/ProjectList';
import Community from './routes/Community';
import Modal from 'react-modal'

Modal.setAppElement('#root')

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <LandingPage />,
            },
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
                children: [
                    {
                        path: '',
                        element: <ProjectList />
                    },
                    {
                        path: 'register',
                        element: <ProjectRegister />
                    },
                    {
                        path: ':projectId',
                        element: <ProjectDetail />
                    } 
                ]
            },
            {
                path: '/chat',
                element: <Chat />,
            },
            {
                path: '/recruit',
                element: <Recruit />,
                children: [],
            },
            {
                path: '/univ',
                element: <UnivPage />,
            },
            {
                path: '/community',
                element: <Community />
            },
            {
                path: '/chat',
                element: <Chat />
            }
        ],
    },
]);

export default router;
