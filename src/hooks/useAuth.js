import { useContext } from "react";
import { AuthContext } from "../contexts";

export default function useAuth() {
  const { authInfo, setAuthInfo } = useContext(AuthContext);
  return { authInfo, setAuthInfo };
}
