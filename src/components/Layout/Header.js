import { Fragment, useContext } from "react";

import CartButton from "./CartButton";
import Indian from "../../assets/Indian.jpg";
import classes from "./Header.module.css";
import SignUpBut from "./SignUpBut";
import LogoutBtn from "./LogOutBtn";
import { AuthContext } from "../../auth/authContext";
import LoginBut from "./LoginBut";

const Header = (props) => {
  const { user } = useContext(AuthContext);
  return (
    <Fragment>
      <h1 className={classes.title}>Khana Khazana</h1>
      <header className={classes.header}>
        

        {user.email ? (
          <LogoutBtn />
        ) : (
          <div className={classes.group}>
            <SignUpBut onClick={props.onShowLogin} />
            <LoginBut onClick={props.onShowSignup}/>
          </div>
        )}
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={Indian} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
