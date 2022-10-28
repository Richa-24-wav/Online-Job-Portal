import HomePage from "../app/pages/Home";
import HirePage from "../app/pages/Hire";
import LoginPage from "../app/pages/Login";

const routes = [
    {
        id: 1,
        path: '/',
        title: 'Find job',
        component: <HomePage/>,
        exact: true,
        isProtected: false,
    },
    {
        id: 2,
        path: '/hire',
        title: 'Hire',
        component: <HirePage/>,
        exact: true,
        isProtected: true,
    },
    {
        id: 3,
        path: '/login',
        component: <LoginPage/>,
        exact: true,
        isProtected: false,
    },
    {
        id: 4,
        path: "*",
        component: <HomePage/>,
        isProtected: false,
    }
];

export default routes;

