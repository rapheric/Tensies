import React, { useState } from "react"
import './App.css';
import Tensies from "./components/tenzies/Tenzies";
import {nanoid} from "nanoid"

function App() {

  const newDice=()=>{
    const newArray=[]
    for(let i=0; i<10 ;i++){
      newArray.push({
        value: Math.ceil(Math.random()*6),
        isHeld: true,
        id:nanoid()
      })
    }
    return newArray
    } 
    console.log(newDice())
const[dice, setDice]=useState(newDice())

const diceElements=dice.map(dice=>(
<Tensies key={dice.id} value={dice.value} isHeld={dice.isHeld} holdDice={()=>holdDice(dice.id)}/>
))

const rollDice =()=>{
setDice(newDice())
}

const holdDice=(id)=>{
  console.log(id)
}

  return (
    <div className="App">
      <div><h1 className="heading">Tenzies</h1></div>
       <div>
        <p className="tDesc">Roll untill all the dice are the same<br/>
               Click each die to freeze it at its current<br/>
                value between rolls.
        </p>
        </div>
      <div className="dice">
     {diceElements}
     </div>
     <div> 
      <button className="roll-dice" onClick={rollDice}>Roll</button>
     </div>
    </div>
  );
}
export default App;
