import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
  const  islogin = localStorage.getItem('token')
  const [isLoggedIn, setIsLoggedIn] = useState(islogin);
  const [user,setUser] = useState(null);
  

  const logoutHandler = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };
const loginHandler=()=>{
    console.log("ran");
    setIsLoggedIn(true);
    console.log(isLoggedIn);
}
  

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;