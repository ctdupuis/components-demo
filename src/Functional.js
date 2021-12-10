import React, { useState, useEffect } from 'react'

export default function Functional() {
    const [text, setText] = useState("");

    const handleChange = event => {
        setText(event.target.value)
    }

    return (
        <div className="form-container">
            <fieldset>
                <legend>Functional Component</legend>
                <input type="text" placeholder="Enter some text" onChange={handleChange} value={text} />
            </fieldset>
            
        </div>
    )
}
