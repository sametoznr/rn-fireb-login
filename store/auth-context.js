import AsyncStorage from "@react-native-async-storage/async-storage"
import { createContext } from "react"
import { useState,useEffect } from "react"


export const AuthContext = createContext ({
token:'',
isAuthenticated:false,
authcan:(token)=>{},
logout:()=>{}

})

function AuthContextProvider({children}){
    const [authToken, setAuthToken] = useState(null)
    
useEffect(()=>{

async function fetchtoken() {
    
   const storedToken= await  AsyncStorage.getItem('token')

   if(storedToken){
    setAuthToken(storedToken);
   }
}

fetchtoken()

},[])

     function authcan(token){
    setAuthToken(token)
    AsyncStorage.setItem('token',token)
     }

      function logout(token){
    setAuthToken(null)
        AsyncStorage.removeItem('token')

     }
const value={token:authToken,
    isAuthenticated:!!authToken,
    authcan:authcan,
    logout:logout,
}

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}


export default AuthContextProvider;