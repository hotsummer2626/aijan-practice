import React, { useState } from "react";
import styles from "./Auth.module.scss";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <h3>AIJAN</h3>
          <div className={styles.subtitle}>Age is just a number</div>
          {isLogin ? (
            <Login setIsLogin={setIsLogin} />
          ) : (
            <Register setIsLogin={setIsLogin} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
