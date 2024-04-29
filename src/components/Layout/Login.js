import React, { useContext, useState } from 'react'
import { AuthContext } from '../../auth/authContext';
import useLogin from '../../context/contextLogin';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Modal from '../UI/Modal';
import { auth } from '../../auth/firebase';
import useSignup from '../../context/contextSignup';
import classes from './Login.module.css';
function Login() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const { user, setUser } = useContext(AuthContext);
    const { loginShow, hideSignup } = useSignup();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
          const user = await signInWithEmailAndPassword(auth, email, password);
          setUser(user.user);
          hideSignup();
        } catch (err) {
          alert(err);
        }
      };
      const onChangeBtn = () => {
        hideSignup();
      };
      const modalActions = (
        <div>
          <button className={classes.button} onClick={onChangeBtn}>Close </button>
        </div>
      );
      const loginModalContent = <React.Fragment>{modalActions}</React.Fragment>;
    return (
        <Modal>
          <form className={classes.form} onSubmit={handleLogin}>
            <input className={classes.input}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input className={classes.input}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className={classes.button} type="submit">Login</button>
            {/* {loginModalContent} */}
          </form>
        </Modal>
      );
}

export default Login