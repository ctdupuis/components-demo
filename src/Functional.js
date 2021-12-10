import React, { useState } from 'react';

// In a FUNCTIONAL component, notice the use of the keywords "function" and "const"
// Functional components are structured using Functional JavaScript
export default function Functional() {
    // this initiates a Getter and Setter
    // text refers to an empty string
    // setText() is a function that you can invoke to update the text state variable
    const [text, setText] = useState("");

    // this function tracks the changes in the input field and updates the state accordingly
    const handleChange = event => {
        // since this function is attached to an onChange synthetic event, it has access to the event object when invoked
        setText(event.target.value);
    }

    // this function handles resetting the state value when the button is clicked
    const handleClick = event => {
        // since the input's value is directly connected to the state variable, clearing the state will clear out the input as well
        setText("");
    }

    return (
        <div className="form-container">
            <fieldset>
                <legend>Functional Component</legend>
                {/* In the onChange synthetic event, we refer to the function by its variable name and DO NOT need to use the keyword "this" */}
                <input type="text" placeholder="Enter some text" onChange={handleChange} value={text} />
            </fieldset>
            <div className="output">
                <h3>Your Text Output</h3>
                {/* curly brackets are used to implement logic inside of your HTML rendering */}
                <span>{text}</span>
            </div>
            <button onClick={handleClick}>Clear</button>
        </div>
    )
}
