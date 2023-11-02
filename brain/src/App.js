import React from 'react'
import './App.css';
import Square from './Square.js'
//import { useState } from 'react';


function App() {
  return (
    <div>
    <div className="board-row">
    <Square ></Square>
    <Square ></Square>
    <Square ></Square>
    </div>

    <div className="board-row">
    <Square ></Square>
    <Square ></Square>
    <Square ></Square>
    </div>


    <div className="board-row">
    <Square ></Square>
    <Square ></Square>
    <Square ></Square>
    </div>
    </div>
  );
}

export default App;
