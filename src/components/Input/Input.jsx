import React, { useState } from "react";
import styles from "./Input.module.scss";
import eyeIcon from "../../assets/eye.png";

const Input = ({ label, type, id, placeholder, value, onChange }) => {
  const [inputType, setInputType] = useState(type);
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{label}</label>
      <input
        type={inputType}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
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
