import React from 'react'
import classes from './SignUpBut.module.css'
function SignUpBut(props) {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span >
        SignUp
      </span>     
    </button>
  )
}

export default SignUpBut
