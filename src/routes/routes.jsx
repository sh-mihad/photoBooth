import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import CreateEditPost from "../pages/create-edit-post/CreateEditPost";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/home/HomePage";
import Notifications from "../pages/notifications/Notifications";
import PostDetails from "../pages/PostPage/PostDetails";
import EditProfile from "../pages/Profile/EditProfile";
import Profile from "../pages/Profile/Profile";
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
            },
            {
                path:"/notifications",
                element : <Notifications/>
            },
            {
                path:"/create-post",
                element : <CreateEditPost/>
            },
            {
                path:"/me",
                element : <Profile/>
            },
            {
                path:"/edit-profile",
                element : <EditProfile/>
            },
            {
                path:"/post/:id",
                element : <PostDetails/>
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
       errorElement:<ErrorPage/>
    }

])

export default router;