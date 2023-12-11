// Header.js
import React from 'react';
import styles from './Header.module.css';

const Header = ({ firstName, lastName, role }) => {
  return (
    <header className={styles.header}>
      <h1>{`${firstName} ${lastName}`}</h1>
      <p>{`Role: ${role}`}</p>
    </header>
  );
};

export default Header;
