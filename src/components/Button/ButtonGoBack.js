import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonGoBack.module.css';

const ButtonGoBack = ({ onClick }) => (
  <button type="button" className={styles.btnGoBack} onClick={onClick}>
    Назад
  </button>
);

ButtonGoBack.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonGoBack;
