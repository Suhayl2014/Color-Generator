
import './App.css';
import Square from './Square.js'

const S1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function App() {
  return (
    <div>
    <div className="board-row">
    <Square S1 = {S1[0]}></Square>
    <Square S1 = {S1[1]}></Square>
    <Square S1 = {S1[2]}></Square>
    </div>

    <div className="board-row">
    <Square S1 = {S1[3]}></Square>
    <Square S1 = {S1[4]}></Square>
    <Square S1 = {S1[5]}></Square>
    </div>

    <div className="board-row">
    <Square S1 = {S1[6]}></Square>
    <Square S1 = {S1[7]}></Square>
    <Square S1 = {S1[8]}></Square>
    </div>
    </div>
  );
}

export default App;
