import { useState } from "react";
import App from "./App";

const Game = () => {

    const [xIsNext, setxIsNext] = useState(true);
    const [history, sethistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    

    const handleplay = (nextSquares) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        sethistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setxIsNext(!xIsNext);
         //  This is the syntax for creating a new array by spreading the elements of the existing history array and adding nextSquares to the end. The spread operator ... is used to copy the elements from the history array into a new array, and then nextSquares is added as the last element.
        //!: The exclamation mark ! is the logical NOT operator. It negates the value that follows it. If the value is true, it becomes false, and if the value is false, it becomes true.
    }
 const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
    setxIsNext(nextMove % 2 === 0);

 }

 const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
        description = 'Go to move #' + move
    } else {
        description = 'Go to game start';
    }

    return (
        <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
    )
 })



    return (
        <div className="game">
            <div className="game-board">
            <App xIsNext={xIsNext} squares={currentSquares} onPlay={handleplay}></App>
            </div> 
            <div className="game-info">
                <ol className="vertical-list">{moves}</ol>
            </div>
        </div>
      );
}
 
export default Game;