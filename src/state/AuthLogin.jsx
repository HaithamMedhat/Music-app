import  React  from 'react';
import { useState } from 'react';

export const AuthContext = React.createContext({
    token : '',
    getToken : ()=>{},
    logoutHandler : ()=>{},
    loginHandler : ()=>{},
})

const AuthContextProvider = (props)=>{
    const initialToken = localStorage.getItem('token')
    const [tokenId , setToken] = useState(initialToken);
    const isLogged = !!tokenId;
    const loginHandler = (token)=>{
        localStorage.setItem('token',token)
        setToken(token)
    }
    const logoutHandler = ()=>{
        localStorage.removeItem('token')
        setToken(null);
    }
    const contextValue = {
        token : tokenId,
        isLoggedIn : isLogged,
        logout : logoutHandler,
        login : loginHandler,
    }
    return(  <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContextProvider; 