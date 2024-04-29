import React, {useContext, useEffect, useState} from 'react'
import { authContext } from '../../auth/authContext'


export default function Protected({children, authentication = true}) {


    const [loader, setLoader] = useState(true)
    const user = useContext(authContext)

    useEffect(() => {
        if(authentication && user !== authentication){
            
        } else if(!authentication && user !== authentication){
            
        }
        setLoader(false)
    }, [user, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}