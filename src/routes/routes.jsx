import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/home/HomePage";

const router = createBrowserRouter([
    {
       children:[
         {
        path: '/',
        element: <HomePage />
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