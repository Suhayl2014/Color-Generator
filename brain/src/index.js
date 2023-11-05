import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';
import Game from './Game';

const Block = () => {
  const [showgame, setshowgame] = useState(true);

  const toggleGame = () => {
    setshowgame(!showgame);
  };

  return (
    <React.StrictMode>
      {showgame ? <Welcome toggleGame={toggleGame} /> : <Game />}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Block />);
