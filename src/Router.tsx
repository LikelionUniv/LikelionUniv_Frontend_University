import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import SignUp from './pages/signUp/SignUp';
import LoginPage from './pages/login/LoginPage';
import LandingPage from './pages/landing/LandingPage';
import Project from './pages/project/Project';
import Chat from './pages/chat/Chat';
import Root from './pages/root/root';
import Mypage from './pages/mypage/Mypage';
import MypageRoot from './pages/mypage/MypageRoot';
import UnivPage from './pages/univ/UnivPage';
import ProjectDetail from './pages/project/Detail/ProjectDetail';
import RecruitPage from './pages/recruit/RecruitPage';
import AboutPage from './pages/about/AboutPage';
import BabyLion from './pages/recruit/apply/mobile/BabyLion';
import UserModify from './pages/mypage/modify/UserModify';
import Userpage from './pages/userpage/Userpage';
import CommunityDetail from './pages/community/components/detail/CommunityDetail';
import CommunityPage from './pages/community/CommunityPage';
import DonatePage from './pages/donate/DonatePage';
import ProtectedRouter from './components/ProtectedRouter';
import AdminProtectedRouter from './components/AdminProtectedRouter';
import NotFound from './pages/error/NotFound';
import Admin from './pages/admin/Admin';
import User from './pages/admin/components/User';
import RecruitAlarm from './pages/admin/components/RecruitAlarm';
import CommunityWrite from './pages/community/components/write/CommunityWrite';
import Community from './pages/community/components/Community';
import DonateDetail from './pages/donate/components/DonateDetail';
import DonateComponent from './pages/donate/components/DonateComponent';
import { Redirect } from './pages/login/components/Redirect';
import ProjectList from './pages/project/components/ProjectList';
import ProjectRegisterWrapper from './pages/project/register/ProjectRegisterWrapper';
import ProjectUpdateWrapper from './pages/project/update/ProjectUpdateWrapper';
import UnivRecruit from './pages/univRecruit/UnivRecruit';
import HackathonPage from './pages/admin/components/hackathon/hackathonPage';
// import HackathonsApplication from './routes/HackathonsApplicationPage';
import HackathonsApplicationPage from './routes/HackathonsModifyPage';

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
                element: (
                    <ProtectedRouter>
                        <Userpage />
                    </ProtectedRouter>
                ),
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
                        element: <ProjectRegisterWrapper />,
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
                        element: (
                            <>
                                <Suspense fallback={<div>loading...</div>}>
                                    <CommunityDetail />
                                </Suspense>
                            </>
                        ),
                    },
                    {
                        path: 'write',
                        element: <CommunityWrite />,
                    },
                ],
            },
            // {
            //     path: '/chat',
            //     element: <Chat />,
            // },
            {
                path: '/about',
                element: <AboutPage />,
            },
            {
                path: '/likeliononlyadminuser2013',
                element: (
                    <AdminProtectedRouter>
                        <Admin />
                    </AdminProtectedRouter>
                ),
                children: [
                    {
                        path: '',
                        element: <User />,
                    },
                    {
                        path: 'recruitalarm',
                        element: <RecruitAlarm />,
                    },
                    {
                        path: 'hackathon',
                        element: <HackathonPage />,
                    },
                ],
            },
            {
                path: '*',
                element: <NotFound />,
            },
            // {
            //     path: 'hackathons',
            //     element: <HackathonsApplication />,
            // },
            {
                path: 'hackathons/:hackathonId',
                element: <HackathonsApplicationPage />,
            },
        ],
    },
    {
        path: '/oauth/:provider/redirect',
        element: <Redirect />,
    },
]);

export default router;
