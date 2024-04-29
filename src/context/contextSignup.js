import { createContext, useContext } from "react";

export const closeSignupContext=createContext({login:false,hideSignup:()=>{}})

export default function useSignup(){
    return(useContext(closeSignupContext))
}