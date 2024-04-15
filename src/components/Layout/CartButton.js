import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const [btn , setBtn] = useState(false)
  const btnClasses=`${classes.button} ${btn ? classes.bump: ''}`;
  useEffect(()=>{
    if(cartCtx.items.length === 0){
      return;
    }
    setBtn(true)

    const timer = setTimeout(()=>{
      setBtn(false)
    },300)
    return()=>{
      clearTimeout(timer)
    }
  },[cartCtx.items])
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;