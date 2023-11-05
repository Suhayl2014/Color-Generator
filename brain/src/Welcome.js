

const Welcome = ({toggleGame}) => {
    return (
        <div>
            <button className="btn btn-primary" onClick={toggleGame}>
                Click to Play
            </button>
        </div>
      );
}
 
export default Welcome;