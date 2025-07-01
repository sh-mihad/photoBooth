import { useState } from 'react'
import { AuthContext } from '../contexts'

export default function AuthProvider({children}) {
  const [authInfo,setAuthInfo] = useState()
  return (
    <AuthContext.Provider value={{authInfo,setAuthInfo}}>
        {children}
    </AuthContext.Provider>
  )
}
