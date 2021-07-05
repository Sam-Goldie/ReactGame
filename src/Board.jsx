import React from 'react';
import Space from './Space.jsx';
import styles from './Board.css';

const spaces = [1,2,3,4,5,6,7,8,9];

const Board = (props) => {
  <div className={styles.body}></div>
  return spaces.map((space) => {
    return (
      <Space key={space} spaceid={space}/>
    );
  })
};

export default Board;