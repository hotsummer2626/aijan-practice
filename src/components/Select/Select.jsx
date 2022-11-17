import React, { useState } from "react";
import styles from "./Select.module.scss";

const Select = ({ label, options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].name);

  const selectChangeHandler = (optionName) => {
    setSelectedOption(optionName);
    onChange(optionName);
  };
  return (
    <div className={styles.container}>
      <div className={styles.label}>{label}</div>
      <div className={styles.options}>
        {options.map((option) => (
          <div
            key={option.id}
            className={`${styles.optionItem} ${
              option.name === selectedOption ? styles.active : ""
            }`}
            onClick={() => selectChangeHandler(option.name)}
          >
            {option.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
