import React from "react"
//import { useState } from "react" //Ensure to import anything you need


const Square = ({value, onSquareClick}) => { 
   
    
   // const [value, setvalue] = useState(null) // this is the usage of useState

   // const Onclicks = () => { //This is a function for onclicks which uses the setvalue function to assign the value const a new value
   // console.log('HELLO')
   // setValue('X')
   // } 
    
    // make sure you arent defining variavles and creating functions within the return section. The return section is simply for the JSX you want to return 
    // alongside with the use of curly braces to reference any javascript - eg variables / functions / 
        return (
            <div>
            
            <button className="square" onClick={onSquareClick}>
                {value}
                </button>
            </div> // onclick= is an event handler so on the click {onclick} the curly braces calls the JS expression and runs the function
        );
    }
    
export default Square; //must export square as we are rendering it on our main App.js
//Square acts as a component which is reuseable