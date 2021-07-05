import React from 'react';
import ReactDOM from 'react-dom';
import styles from './App.css';

import Board from './Board.jsx';

const App = () => {
  return (
    <div className={styles.grid}>
      <Board />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));