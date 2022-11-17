import React, { useState } from "react";
import styles from "./Login.module.scss";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import line from "../../../../assets/Line 42.png";
import appleLogo from "../../../../assets/apple_logo.png";
import facebookLogo from "../../../../assets/facebook_logo.png";
import googleLogo from "../../../../assets/google_logo.png";

const Login = ({ setIsLogin }) => {
  const [formData, setFormData] = useState({
    emailOrPhoneNumber: "",
    password: "",
  });
  const [error, setError] = useState({
    emailOrPhoneNumber: {
      hasError: false,
      errorMsg: "email or phone no. not found",
    },
    password: {
      hasError: false,
      errorMsg: "email or phone no. or password incorrect",
    },
  });

  const inputChangeHandler = (inputName) => (e) =>
    setFormData({
      ...formData,
      [inputName]: e.target.value,
    });

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <h4>Welcome back</h4>
      <form className={styles.loginForm} onSubmit={onSubmitHandler}>
        <Input
          label="Email or Phone No."
          type="text"
          id="emailOrPhone"
          placeholder="Enter email or phone no."
          error={error.emailOrPhoneNumber}
          value={formData.emailOrPhoneNumber}
          onChange={inputChangeHandler("emailOrPhoneNumber")}
        />
        <Input
          label="Password"
          type="password"
          id="password"
          placeholder="Enter password"
          error={error.password}
          value={formData.password}
          onChange={inputChangeHandler("password")}
        />
        <div className={styles.forgotPassword}>Forgot password?</div>
        <Button text="Login" />
      </form>
      <div className={styles.noAccount}>
        <span>Don't have an account?</span>&nbsp;
        <span onClick={() => setIsLogin(false)}>Sign up</span>
      </div>
      <div className={styles.socialMedia}>
        <div className={styles.title}>
          <img src={line} alt="line" />
          <span>or login with</span>
          <img src={line} alt="line" />
        </div>
        <div className={styles.mediaList}>
          <a href="#">
            <img src={facebookLogo} alt="facebook" />
          </a>
          <a href="#">
            <img src={googleLogo} alt="google" />
          </a>
          <a href="#">
            <img src={appleLogo} alt="apple" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
