import { createContext, useContext } from "react";

export const closeContext = createContext({cart:false,hideCart:()=>{}})

export default function useCart(){
    return useContext(closeContext);
}    