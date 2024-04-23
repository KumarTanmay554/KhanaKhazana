import { useState } from 'react';
import { closeLoginContext } from './context/contextLogin';
import { closeContext } from './context/context';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import SignUp from './components/Layout/SignUp';

function App() {
  const [cartShow, setCartShow] = useState(false);
  const [loginShow,setLoginShow] = useState(false)
  const showCartHandler = () => {
    setCartShow(true);
  };
  const showLogin = ()=>{
    setLoginShow(true)
  }
  const showCart = ()=>{
    setCartShow(true);
  }
  const hideCart = ()=>{
    setCartShow(false);
  }
  const hideLogin = ()=>{
    setLoginShow(false);
  }

  return (
    <CartProvider>
      <closeContext.Provider value={{cartShow,hideCart}}>
        <closeLoginContext.Provider value={{loginShow,hideLogin}}>
        {cartShow && <Cart />}
      {loginShow && <SignUp/>}
      <Header onShowCart={showCartHandler} onShowLogin={showLogin}/>
      <main>
        <Meals />
      </main>
        </closeLoginContext.Provider>
      
      </closeContext.Provider>
    </CartProvider>
  );
}

export default App;