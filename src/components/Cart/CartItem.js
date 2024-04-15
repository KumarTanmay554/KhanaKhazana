import classes from './CartItem.module.css';
import { incrementInCart,decrementInCart,removefromCart,addToCart } from '../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
const CartItem = (props) => {
//   const cartItems = useSelector((state) => state.cart.items);
// const totalAmount = useSelector((state) => `$${state.cart.totalAmount.toFixed(2)}`);
// const dispatch = useDispatch()
//   const handleAddToCart = (item) => {
//     dispatch(addToCart(item));
//   };
  
//   const handleRemoveFromCart = (id) => {
//     dispatch(removefromCart(id));
//   };






  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;