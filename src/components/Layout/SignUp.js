import React, { useState } from 'react'
import useLogin from '../../context/contextLogin'
import Modal from '../UI/Modal'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from 'firebase/auth'
import {auth} from '../../auth/firebase'

function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const {loginShow,hideLogin} = useLogin();

  const onChangeBtn=()=>{
      hideLogin()
  }

  
  const handleSignUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        signInWithEmailAndPassword(auth, email, password).then(
          updateProfile(auth.currentUser, {
            displayName: username,
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
  };

  const modalActions = (
      <div >
        <button  onClick={onChangeBtn} >
          Close
        </button>
      </div>
  );
  const cartModalContent = (
    <React.Fragment>
       {modalActions}
    </React.Fragment>
  );

  return (
    <Modal>
      
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="email"
        placeholder="Username"
        value={username}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
      />
      <button onClick={handleSignUp}>Sign up</button>
      {cartModalContent}

    </Modal>
  )
}

export default SignUp
