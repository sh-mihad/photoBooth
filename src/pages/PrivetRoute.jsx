import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function PrivetRoute({ children }) {
    const { authInfo } = useAuth()
  
    return authInfo?.user?._id ? children : <Navigate to={"/login"}/>
}
