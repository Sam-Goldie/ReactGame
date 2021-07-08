import React from 'react';
import ReactDOM from 'react-dom';

import Board from './Board.jsx';

const App = () => {
  return (
    <div>
      <Board />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));