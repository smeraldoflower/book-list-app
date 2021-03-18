import React, {createContext, useState, useEffect} from 'react'

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        setLoginStatus();
        if(loginStatus){ localStorage.clear(); }
    }, []);

    return (
        <AuthContext.Provider value = {{loginStatus}}>
            { props.children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;