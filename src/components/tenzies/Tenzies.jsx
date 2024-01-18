import React from "react";
import "./tenzies.css";

const Tenzies = (props) => {
  const styles={
    backgroundColor: props.isHeld ? "green":"white"
  }
  return (
    <div className="die-face"
    onClick={props.holdDice}
     style={styles}>
        <h1>{props.value}</h1>
    </div>
  )
}

export default Tenzies