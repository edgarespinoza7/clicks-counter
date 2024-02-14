import React from "react";
import "../stylesheets/Counter.css";

function Counter({ numOfClicks }) {
    return (
        <div className="counter">{numOfClicks}</div>

    );
}

export default Counter;