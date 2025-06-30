import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/home/HomePage";
import RootPage from "../pages/RootPage/RootPage";

const router = createBrowserRouter([
    {
       children:[
         {
        path: '/',
        element: <RootPage />,
        children:[
            {
                index:true,
                element : <HomePage/>
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
       ],
       errorElement:<ErrorPage/>
    }

])

export default router;