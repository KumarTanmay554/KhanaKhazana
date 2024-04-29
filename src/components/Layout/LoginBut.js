import React from 'react'
import classes from './LoginBut.module.css'
function LoginBut(props) {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span >
        Login
      </span>     
    </button>
  )
}

export default LoginBut