import { useState } from "react";
import { closeLoginContext } from "./context/contextLogin";
import { closeSignupContext } from "./context/contextSignup";
import { closeContext } from "./context/context";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import SignUp from "./components/Layout/SignUp";
import AuthState from "./auth/authContext";
import Login from "./components/Layout/Login";


function App() {
  const [cartShow, setCartShow] = useState(false);
  const [loginShow, setLoginShow] = useState(false);
  const [signShow, setSignShow] = useState(false);
  const showCartHandler = () => {
    setCartShow(true);
  };
  const showLogin = () => {
    setLoginShow(true);
  };
  const showSignup = () => {
    setSignShow(true);
  };
  const showCart = () => {
    setCartShow(true);
  };
  const hideCart = () => {
    setCartShow(false);
  };
  const hideLogin = () => {
    setLoginShow(false);
  };
  const hideSignup = () => {
    setSignShow(false);
  };

  return (
    <AuthState>
      <CartProvider>
        <closeContext.Provider value={{ cartShow, hideCart }}>
          <closeLoginContext.Provider value={{ loginShow, hideLogin }}>
            <closeSignupContext.Provider value={{signShow,hideSignup}}>
            {cartShow && <Cart />}
            {loginShow && <SignUp />}
            {signShow && <Login />}
            <Header onShowCart={showCartHandler} onShowLogin={showLogin} onShowSignup={showSignup} />
            <main>
              <Meals />
            </main>
            </closeSignupContext.Provider>
          </closeLoginContext.Provider>
        </closeContext.Provider>
      </CartProvider>
    </AuthState>
  );
}

export default App;
