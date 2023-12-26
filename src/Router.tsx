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
import Community from './components/community/Community';
import RecruitPage from './routes/RecruitPage';
import AboutPage from './routes/AboutPage';
import BabyLion from './components/recruit/apply/mobile/BabyLion';
import UnivRecruit from './components/univrecruit/UnivRecruit';
import { Redirect } from './components/login/Redirect';
import UserModify from './routes/UserModify';
import Userpage from './routes/Userpage';
import CommunityWrite from './components/community/write/CommunityWrite';
import CommunityDetail from './components/community/detail/CommunityDetail';
import CommunityPage from './routes/CommunityPage';
import DonatePage from './routes/DonatePage';
import DonateComponent from './components/donate/DonateComponent';
import DonateDetail from './components/donate/DonateDetail';
import ProjectUpdateWrapper from './components/project/update/ProjectUpdateWrapper';

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
                path: '/oauth/:provider/redirect',
                element: <Redirect />,
            },
            {
                path: '/mypage',
                element: <MypageRoot />,
                children: [
                    {
                        path: '',
                        element: <Mypage />,
                    },
                    {
                        path: 'modify',
                        element: <UserModify />,
                    },
                ],
            },
            {
                path: '/userpage/:user_id',
                element: <Userpage />,
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
                    {
                        path: ':projectId/update',
                        element: <ProjectUpdateWrapper />,
                    },
                ],
            },
            {
                path: '/chat',
                element: <Chat />,
            },
            {
                path: '/donate',
                element: <DonatePage />,
                children: [
                    {
                        path: '',
                        element: <DonateComponent />,
                    },
                    {
                        path: ':donationHistoryId',
                        element: <DonateDetail />,
                    },
                ],
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
                element: <CommunityPage />,
                children: [
                    {
                        path: '',
                        element: <Community />,
                    },
                    {
                        path: ':communityId',
                        element: <CommunityDetail />,
                    },
                    {
                        path: 'write',
                        element: <CommunityWrite />,
                    },
                ],
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
