import { useContext, useState } from 'react';
import React from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import useCart from '../../context/context';
import Checkout from './Checkout';
// import {
//   removefromCart,
//   decrementInCart,
//   incrementInCart,
//   addToCart
// } from "../../redux/cartSlice";
// import { useDispatch, useSelector } from 'react-redux';


const Cart = (props) => {
  // const itemsCart = useSelector((state)=>state.cart.items)
  // const totalAmount = useSelector((state)=>`$${state.cart.totalAmount.toFixed(2)}`)
  // const subtotal = useSelector((state) =>
  //   state.cart.products.reduce(
  //     (subtotal, product) => subtotal + product.price * product.quantity,0
  //   )
  // );
  // const dispatch = useDispatch()


  const cartCtx = useContext(CartContext);
  const [isCheckout,setIsCheckout] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submit, setSubmit] = useState(false);

  const totalAmount = `Rs ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    // dispatch(removefromCart(id))
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    // dispatch(addToCart(item))
    cartCtx.addItem({...item, amount: 1});
  };
  const {cartShow,hideCart} = useCart()
  const onChangeBtn=()=>{
      hideCart()
  }

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = (userData) => {
    fetch('https://khanakhanzana-305c3-default-rtdb.asia-southeast1.firebasedatabase.app/order.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items
      })
    });
    setIsSubmitting(false);
    setSubmit(true);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );


  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={onChangeBtn} >
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );



  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );



  const isSubmittingModalContent = <p>Sending order data...</p>;



  const submitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
      <button className={classes.button} onClick={onChangeBtn}>
        Close
      </button>
    </div>
    </React.Fragment>
  );



  return (
     <Modal>
      {!isSubmitting && !submit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && submit && submitModalContent}
    </Modal>
  );
};

export default Cart;