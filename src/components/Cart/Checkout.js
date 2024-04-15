import React, { useState } from 'react'
import { useRef } from 'react';
import classes from './Checkout.module.css'
import useCart from '../../context/context';

const isEmpty =(value)=> value.trim() === ''
const postalCheck = (value)=>value.trim().length === 6




const Checkout = (props) => {
    const {cartShow,hideCart} = useCart()
    const onChangeBtn=()=>{
        hideCart()
    }

    const [formValidity, setFormValidity] = useState({
        name: true,
        street: true,
        city: true,
        postal: true,
      });

    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const postalInputRef = useRef()
    const cityInputRef = useRef()

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value
        const enteredStreet = streetInputRef.current.value
        const enteredPostal = postalInputRef.current.value
        const enteredCity = cityInputRef.current.value


        const validName = !isEmpty(enteredName)
        const validStreet = !isEmpty(enteredStreet)
        const validCity = !isEmpty(enteredCity)
        const validPostal = postalCheck(enteredPostal)

        setFormValidity({
            name: validName,
            street: validStreet,
            city: validCity,
            postal: validPostal,
          });

        const formValid = enteredName && enteredStreet &&enteredCity && enteredPostal
        if(!formValid){
            return;
        }
        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postalCode: enteredPostal,
        });



      };

      const nameControlClasses = `${classes.control} ${
        formValidity.name ? '' : classes.invalid
      }`;
      const streetControlClasses = `${classes.control} ${
        formValidity.street ? '' : classes.invalid
      }`;
      const postalCodeControlClasses = `${classes.control} ${
        formValidity.postal ? '' : classes.invalid
      }`;
      const cityControlClasses = `${classes.control} ${
        formValidity.city ? '' : classes.invalid
      }`;
 return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInputRef} />
        {!formValidity.postal && (
          <p>Please enter a valid postal code (6 characters long)!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={onChangeBtn}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
