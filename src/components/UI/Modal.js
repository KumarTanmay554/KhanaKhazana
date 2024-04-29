import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';
import useCart from '../../context/context';
import useLogin from '../../context/contextLogin'
import useSignup from '../../context/contextSignup';

const Backdrop = () => {

    const {cartShow,hideCart} = useCart()
    const {loginShow,hideLogin} = useLogin()
    const {signShow,hideSignup} = useSignup()
    const onChangeBtn=()=>{
        hideCart()
        hideLogin()
        hideSignup()
    }

  return <div className={classes.backdrop} onClick={onChangeBtn} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;