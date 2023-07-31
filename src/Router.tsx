import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './routes/SignUp';
import Root from './routes/root';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/signUp',
                element: <SignUp />,
            },
            {
                path : '/login',
                element : <div/>,
            },
        ],
    },
]);

export default router;
