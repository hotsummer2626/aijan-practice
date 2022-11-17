import React, { useState } from "react";
import styles from "./Input.module.scss";
import eyeIcon from "../../assets/eye.png";

const Input = ({ label, type, id, placeholder, value, onChange, error }) => {
  const [inputType, setInputType] = useState(type === "date" ? "text" : type);
  console.log(label,error&&error.hasError)
  return (
    <div className={styles.container}>
      <label htmlFor={id}>
        <span>{label}</span>
        {error && error.hasError && (
          <span className={styles.error}>{`*${error && error.errorMsg}`}</span>
        )}
      </label>
      <input
        className={`${type === "date" ? styles.date : ""} ${
          error && error.hasError ? styles.error : ""
        }`}
        type={inputType}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => (type === "date" ? setInputType("date") : "")}
        onBlur={() => (type === "date" ? setInputType("text") : "")}
      />
      {type === "password" && (
        <div
          className={`${styles.eyeIcon} ${
            inputType === "password" ? "" : styles.show
          }`}
          onClick={() =>
            setInputType((prevInputType) =>
              prevInputType === "password" ? "text" : "password"
            )
          }
        >
          <img src={eyeIcon} alt="eye" />
        </div>
      )}
    </div>
  );
};

export default Input;
