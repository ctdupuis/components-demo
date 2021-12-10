import React, { useState } from 'react';

export default function Functional() {
    const [text, setText] = useState("");

    const handleChange = event => {
        setText(event.target.value);
    }

    const handleClick = event => {
        setText("");
    }

    return (
        <div className="form-container">
            <fieldset>
                <legend>Functional Component</legend>
                <input type="text" placeholder="Enter some text" onChange={handleChange} value={text} />
            </fieldset>
            <div className="output">
                <h3>Your Text Output</h3>
                <span>{text}</span>
            </div>
            <button onClick={handleClick}>Clear</button>
        </div>
    )
}
