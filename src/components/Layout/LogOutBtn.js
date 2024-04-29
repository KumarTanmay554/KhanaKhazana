import React, { useContext } from 'react'
import { AuthContext } from '../../auth/authContext'
import classes from './LogoutBut.module.css'


function LogoutBtn() {
  const {setUser} = useContext(AuthContext)
    
    const logoutHandler = () => {
        setUser({})
    }
  return (
    <button className={classes.button}
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn