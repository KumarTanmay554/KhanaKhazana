import { createContext, useContext } from "react";


export const closeLoginContext = createContext({cart:false,hideLogin:()=>{}})

export default function useLogin(){
    return useContext(closeLoginContext);
} 