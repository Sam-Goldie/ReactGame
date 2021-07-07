import React, {useState} from 'react';
import Space from './Space.jsx';
import styles from './Board.css';

const createBoard = (n) => {
  console.log('here I am!');
  const board = [];
  let index = 1;
  for (let i = 0; i < n; i++) {
    const newArray = [];
    for (let j = 0; j < n; j++) {
      newArray.push(index);
      index++;
    }
    board.push(newArray);
  }
  return board;
};

console.log('about to create the board');
const spaces = createBoard(2);
console.log(spaces);

// const spaces = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const Board = (props) => {
  const [playerPos, updatePlayerPos] = useState([1,1]);
  return spaces.flat().map((space) => {
    return (
      <Space key={space} spaceid={space}/>
    );
  })
};

export default Board;