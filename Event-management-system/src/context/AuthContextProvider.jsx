import { createContext, useContext } from "react";


export const AuthContext = createContext({
  name : "hassan",
  email : "hassan@gmail.com"
});

export const AuthContextProvider = AuthContext.Provider

const useAuth = () =>{
  return useContext(AuthContext)
}

export default useAuth;
