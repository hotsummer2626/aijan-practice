import React from "react";
import styles from "./Auth.module.scss";
import Login from "./components/Login/Login";

const Auth = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span>asdf</span>
        </div>
        <div className={styles.right}>
          <h3>AIJAN</h3>
          <div className={styles.subtitle}>Age is just a number</div>
          <Login/>
          {/* <form className={styles.loginForm}>
            <div className={styles.title}>Login to your Account</div>
            <input type="text" placeholder="Email or phone number" />
            <input type="text" placeholder="Password" />
            <div className={styles.forgotPassword}>Forgot password?</div>
            <div className={styles.rememberMe}>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <button>Login</button>
          </form>
          <div className={styles.noAccount}>
            <span>Don't have an account?</span>&nbsp;
            <span>sign up</span>
          </div>
          <div className={styles.loginWith}>or login with</div>
          <div className={styles.socialMedia}>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Auth;
