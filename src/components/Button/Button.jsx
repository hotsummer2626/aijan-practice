import React from 'react';
import styles from './Button.module.scss';

const Button = ({text}) => {
  return (
    <div className={styles.container}>
      <button>{text}</button>
    </div>
  );
};

export default Button;