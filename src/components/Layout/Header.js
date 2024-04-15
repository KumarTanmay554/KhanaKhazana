import { Fragment } from 'react';

import CartButton from './CartButton';
import Indian from '../../assets/Indian.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Khana Khazana</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={Indian} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;