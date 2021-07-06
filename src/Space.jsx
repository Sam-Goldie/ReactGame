import React from 'react';
import styles from './Space.css';

const numberKey = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine'
};

const Space = (props) => {
  console.log(numberKey[props.spaceid]);
  return (
    <div className={styles[numberKey[props.spaceid]] + ' ' + styles.space}></div>
  );
}

export default Space;