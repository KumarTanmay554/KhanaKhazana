import { useState } from 'react';
import { closeContext } from './context/context';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartShow, setCartShow] = useState(false);

  const showCartHandler = () => {
    setCartShow(true);
  };


  const showCart = ()=>{
    setCartShow(true);
  }
  const hideCart = ()=>{
    setCartShow(false);
  }

  return (
    <CartProvider>
      <closeContext.Provider value={{cartShow,hideCart}}>
      {cartShow && <Cart />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
      </closeContext.Provider>
    </CartProvider>
  );
}

export default App;