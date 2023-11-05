const Welcome = ({toggleGame}) => {
    return (
        <div>
            <button onClick={toggleGame} className="PlayTheGame">
                Click to Play
            </button>
        </div>
      );
}
 
export default Welcome;