import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  user:null,
  onLogout: () => {},
  onLogin: (email, password) => {},
  setUser:(user)=>{}
});

export const AuthContextProvider = (props) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
        user:user,
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        setUser:setUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;