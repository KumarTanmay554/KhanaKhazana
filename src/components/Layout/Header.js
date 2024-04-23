import { Fragment } from 'react';

import CartButton from './CartButton';
import Indian from '../../assets/Indian.jpg';
import classes from './Header.module.css';
import Home from './Home';
import SignUpBut from './SignUpBut';
import LogoutBtn from './LogOutBtn';
import { useSelector } from 'react-redux';

const Header = (props) => {
  const authStatus = useSelector(state => state.auth.status)
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Khana Khazana</h1>
        <Home/>
        <SignUpBut onClick={props.onShowLogin}/>
        {authStatus && (
          <li>
            <LogoutBtn />
          </li>
        )}
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={Indian} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;