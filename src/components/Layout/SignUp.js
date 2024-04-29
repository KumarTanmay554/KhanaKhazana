import React, { useContext, useState } from "react";
import useLogin from "../../context/contextLogin";
import Modal from "../UI/Modal";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../auth/firebase";
import { AuthContext } from "../../auth/authContext";
import classes from "./SignUp.module.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { user, setUser } = useContext(AuthContext);
  const { loginShow, hideLogin } = useLogin();

  const onChangeBtn = () => {
    hideLogin();
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      // await signInWithEmailAndPassword(user, email, password);
      // await updateProfile(user.currentUser, {
      //   displayName: username,
      // });
      setUser(user.user);
      hideLogin();
    } catch (err) {
      alert(err);
    }
  };

  const modalActions = (
    <div>
      <button className={classes.button} onClick={onChangeBtn}>Close </button>
    </div>
  );
  const cartModalContent = <React.Fragment>{modalActions}</React.Fragment>;

  return (
    <Modal >
      <form className={classes.form}>
      <input className={classes.input}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
      />
      <input className={classes.input}
        onChange={(e) => setUsername(e.target.value)}
        type="email"
        placeholder="Username"
        value={username}
      />
      <input className={classes.input}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
      />
      <button className={classes.button} onClick={handleSignUp}>Sign up</button>
      {/* {cartModalContent} */}
      </form>
    </Modal>
  );
}

export default SignUp;
