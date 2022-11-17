import React, { useState } from "react";
import styles from "./Register.module.scss";
import Input from "../../../../components/Input/Input";
import Select from "../../../../components/Select/Select";
import Button from "../../../../components/Button/Button";
import { useCreateUserMutation } from "../../../../store/apis/user";

const Register = ({ setIsLogin }) => {
  const [registerStage, setRegisterStage] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    gender: "male",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    firstName: { hasError: false, errorMsg: "Required" },
    lastName: { hasError: false, errorMsg: "Required" },
    birthday: { hasError: false, errorMsg: "Required" },
    email: { hasError: false, errorMsg: "Email not valid" },
    phoneNumber: { hasError: false, errorMsg: "Phone no. not valid" },
    password: { hasError: false, errorMsg: "Required" },
    confirmPassword: { hasError: false, errorMsg: "Password do not match" },
  });
  const [createUser] = useCreateUserMutation();

  const inputChangeHandler = (inputName) => (e) => {
    let value = e.target.value;
    setFormData({
      ...formData,
      [inputName]: value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (registerStage === 1) {
      const isFirstNameEmpty = formData.firstName === "";
      const isLastNameEmpty = formData.lastName === "";
      const isBirthdayEmpty = formData.birthday === "";
      setError({
        ...error,
        firstName: { ...error.firstName, hasError: isFirstNameEmpty },
        lastName: { ...error.lastName, hasError: isLastNameEmpty },
        birthday: { ...error.birthday, hasError: isBirthdayEmpty },
      });
      if (!isFirstNameEmpty && !isLastNameEmpty && !isBirthdayEmpty) {
        return setRegisterStage(2);
      }
    }
    if (registerStage === 2) {
      const emailRegex = new RegExp(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "g"
      );
      const phoneNumberRegex = new RegExp(/^04[0-9]{8}/, "g");
      const isValidEmail = emailRegex.test(formData.email);
      const isValidPhoneNumber = phoneNumberRegex.test(formData.phoneNumber);
      setError({
        ...error,
        email: { ...error.email, hasError: !isValidEmail },
        phoneNumber: {
          ...error.phoneNumber,
          hasError: !isValidPhoneNumber,
        },
      });
      if (isValidEmail && isValidPhoneNumber) {
        return setRegisterStage(3);
      }
    }
    if (registerStage === 3) {
      const isPasswordEmpty = formData.password === "";
      const isPasswordMatch = formData.password === formData.confirmPassword;
      setError({
        ...error,
        password: {
          ...error.password,
          hasError: isPasswordEmpty,
        },
        confirmPassword: {
          ...error.confirmPassword,
          hasError: !isPasswordMatch,
        },
      });
      if (!isPasswordEmpty && isPasswordMatch) {
        createUser(formData)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
      }
    }
  };
  return (
    <div className={styles.container}>
      <h4>Create an account</h4>
      <form
        onSubmit={submitHandler}
        className={`${styles.registerForm} ${
          registerStage === 1 ? styles.stageOne : ""
        }`}
      >
        {registerStage === 1 && (
          <>
            <Input
              label="First Name"
              type="text"
              placeholder="First name"
              error={error.firstName}
              value={formData.firstName}
              onChange={inputChangeHandler("firstName")}
            />
            <Input
              label="Last Name"
              type="text"
              placeholder="Last name"
              error={error.lastName}
              value={formData.lastName}
              onChange={inputChangeHandler("lastName")}
            />
            <Input
              label="Birthday"
              type="date"
              placeholder="Select your birthday"
              error={error.birthday}
              value={formData.birthday}
              onChange={inputChangeHandler("birthday")}
            />
            <Select
              label="Select Gender"
              options={[
                { id: 1, name: "male", text: "Male" },
                { id: 2, name: "female", text: "Female" },
              ]}
              onChange={(optionName) =>
                setFormData({
                  ...formData,
                  gender: optionName,
                })
              }
            />
          </>
        )}
        {registerStage === 2 && (
          <>
            <Input
              label="Email"
              type="text"
              placeholder="Enter email"
              error={error.email}
              value={formData.email}
              onChange={inputChangeHandler("email")}
            />
            <Input
              label="Phone"
              type="text"
              placeholder="Enter phone no."
              error={error.phoneNumber}
              value={formData.phoneNumber}
              onChange={inputChangeHandler("phoneNumber")}
            />
          </>
        )}
        {registerStage === 3 && (
          <>
            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
              error={error.password}
              value={formData.password}
              onChange={inputChangeHandler("password")}
            />
            <Input
              label="Confirm password"
              type="password"
              placeholder="Enter password again"
              error={error.confirmPassword}
              value={formData.confirmPassword}
              onChange={inputChangeHandler("confirmPassword")}
            />
          </>
        )}
        <Button text={registerStage === 3 ? "Create Account" : "Next"} />
      </form>
      <div className={styles.haveAccount}>
        <span>Already Registered?</span>&nbsp;
        <span onClick={() => setIsLogin(true)}>Login</span>
      </div>
    </div>
  );
};

export default Register;
