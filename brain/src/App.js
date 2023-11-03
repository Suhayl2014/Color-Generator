import React from 'react'
import './App.css';
import Square from './Square.js'
import { useState } from 'react';


function App() {
  const [xIsNext, setxIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null)) //Creates an Array of 9 with them filled to null
  const handleClick = (i) => {
    const nextSquares = squares.slice();
    if (squares[i] === 'X' || (squares[i] === 'O' || calculateWinner(squares) )) { //This checks to see if it either X or O using the OR operator
      //Another way would be if (squares[i]) {Return} This is because we set the array to null so if theres an x or o it has a value and so the conditional check will evaluate to true and return early.
    return
    }
    if (xIsNext) { //Evalueates if Xisnext is true if it is, then x else O
      nextSquares[i] = "X";
    } else {
    nextSquares[i] = "O"; 
  }
    setSquares(nextSquares); // setsquare is a function that causes the whole board to rerender showing the latest update of the board
    setxIsNext(!xIsNext); // ensures whatever xIsnext is at, it flips it and setXISNEXT IS Assigned to it
}

const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
   <div className="status">{status}</div>
    <div className="board-row">
    
    <Square value={squares[0]} onSquareClick={() => handleClick(0)} ></Square>
    <Square value={squares[1]} onSquareClick={() => handleClick(1)}></Square>
    <Square value={squares[2]} onSquareClick={() => handleClick(2)}></Square>
    </div>

    <div className="board-row">
    <Square value={squares[3]} onSquareClick={() => handleClick(3)}></Square>
    <Square value={squares[4]} onSquareClick={() => handleClick(4)} ></Square>
    <Square value={squares[5]} onSquareClick={() => handleClick(5)}></Square>
    </div>


    <div className="board-row">
    <Square value={squares[6]} onSquareClick={() => handleClick(6)}></Square>
    <Square value={squares[7]} onSquareClick={() => handleClick(7)}></Square>
    <Square value={squares[8]} onSquareClick={() => handleClick(8)}></Square>
    </div>
    </div>
  );
}

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < lines.length; i++){ //For loop structure = for (initialise, condition, incrment)
    const [a, b, c] = lines[i] //we are destructuring assignment to assign values from the lines[i] array to the variables a, b, and c. This code assumes that lines[i] is an array containing at least three elements, and it assigns the first element to a, the second element to b, and the third element to c.
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){ //if statement = if (condition) {code to run} 
    return squares[a] //the above first checks if square[a] is truthy = not null and then it compares a to b and a to c
  }
} return null

}

export default App;
