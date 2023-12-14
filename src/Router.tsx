import { createBrowserRouter } from 'react-router-dom';
import SignUp from './routes/SignUp';
import LoginPage from './routes/LoginPage';
import LandingPage from './routes/LandingPage';
import Project from './routes/Project';
import Chat from './routes/Chat';
import Root from './routes/root';
import Mypage from './routes/Mypage';
import MypageRoot from './routes/MypageRoot';

import UnivPage from './routes/UnivPage';
import ProjectDetail from './components/project/Detail/ProjectDetail';
import ProjectRegister from './components/project/register/ProjectRegister';
import ProjectList from './components/project/ProjectList';
import Community from './routes/Community';
import RecruitPage from './routes/RecruitPage';
import AboutPage from './routes/AboutPage';
import BabyLion from './components/recruit/apply/mobile/BabyLion';
import Recruit from './components/univrecruit/UnivRecruit';
import UnivRecruit from './components/univrecruit/UnivRecruit';
import { Redirect } from './components/login/Redirect';
import UserModify from './routes/UserModify';
import Userpage from './routes/Userpage';

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
                path: '/signup/:provider',
                element: <SignUp />,
            },
            {
                path: '/login',
                element: <LoginPage />,
            },
            {
                path : '/oauth/:provider/redirect',
                element : <Redirect/>
            },
            {
                path: '/mypage',
                element: <MypageRoot />,
                children : [
                    {
                        path: '',
                        element: <Mypage/>
                    },
                    {
                        path:'modify',
                        element : <UserModify/>
                    },
                ]
            },
            {
                path:'/userpage/:user_id',
                element: <Userpage/>
            },
            {
                path: '/project',
                element: <Project />,
                children: [
                    {
                        path: '',
                        element: <ProjectList />,
                    },
                    {
                        path: 'register',
                        element: <ProjectRegister />,
                    },
                    {
                        path: ':projectId',
                        element: <ProjectDetail />,
                    },
                ],
            },
            {
                path: '/chat',
                element: <Chat />,
            },
            {
                path: '/recruit',
                element: <RecruitPage />,
                children: [
                    {
                        path: '',
                        element: <UnivRecruit />,
                    },
                    {
                        path: 'babylion',
                        element: <BabyLion />,
                    },
                ],
            },
            {
                path: '/univ',
                element: <UnivPage />,
            },
            {
                path: '/community',
                element: <Community />,
            },
            {
                path: '/chat',
                element: <Chat />,
            },
            {
                path: '/about',
                element: <AboutPage />,
            },
        ],
    },
]);

export default router;
