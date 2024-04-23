import { useContext } from 'react';

import Form from './Form';
import classes from './Item.module.css';
import CartContext from '../../../store/cart-context';


const Item = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `Rs ${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <Form id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Item;