import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import CreateEditPost from "../pages/create-edit-post/CreateEditPost";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/home/HomePage";
import Notifications from "../pages/notifications/Notifications";
import PostDetails from "../pages/PostPage/PostDetails";
import PrivetRoute from "../pages/PrivetRoute";
import EditProfile from "../pages/Profile/EditProfile";
import Profile from "../pages/Profile/Profile";
import RootPage from "../pages/RootPage/RootPage";

const router = createBrowserRouter([
    {
        children: [
            {
                path: '/',
                element: <RootPage />,
                children: [
                    {
                        index: true,
                        element: <HomePage />
                    },
                    {
                        path: "/notifications",
                        element: <PrivetRoute><Notifications/></PrivetRoute>
                    },
                    {
                        path: "/create-post",
                        element: <PrivetRoute><CreateEditPost /></PrivetRoute>
                    },
                    {
                        path: "/me",
                        element: <PrivetRoute><Profile /></PrivetRoute>
                    },
                    {
                        path: "/edit-profile",
                        element: <PrivetRoute><EditProfile /></PrivetRoute>
                    },
                    {
                        path: "/post/:id",
                        element: <PrivetRoute><PostDetails /></PrivetRoute>
                    },
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
        errorElement: <ErrorPage />
    }

])

export default router;