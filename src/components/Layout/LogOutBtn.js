import React from 'react'
import {useDispatch} from 'react-redux'
import { logout } from '../../auth/authSlice'



function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
         
        dispatch(logout())
        
    }
  return (
    <button
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn