import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'


export default function Protected({children, authentication = true}) {


    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if(authentication && authStatus !== authentication){
            
        } else if(!authentication && authStatus !== authentication){
            
        }
        setLoader(false)
    }, [authStatus, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}