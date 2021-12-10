import React, { Component } from 'react';

// In a CLASS component, notice the use of the keywords "this" and "extends"
// Class components are structured using Object Oriented JavaScript
export default class Class extends Component {
    // this initiates the state variable as an OBJECT
    state = {
        text: ""
    }

    // this function tracks the changes in the input field and updates the state accordingly
    // since this function is attached to an onChange synthetic event, it has access to the event object when invoked
    handleChange = event => {
        // setState is a function that accepts an argument as an object representing what you want the updated object to look like

        // using the bracket notation and the event object, this function can be reused for multiple inputs, so long as the name attribute of that attribute directly equals the name of that key in the state object
        this.setState({ [event.target.name]: event.target.value });
    }

    // this function handles resetting the state value when the button is clicked
    handleClick = event => {
        // since the input's value is directly connected to the state variable, clearing the state will clear out the input as well
        this.setState({ text: "" });
    }

    render() {
        return (
            <div className="form-container">
                <fieldset>
                    <legend>Class Component</legend>
                    {/* In the onChange synthetic event, we refer to the function with the keyword "this" since we are in a subclass */}
                    <input type="text" onChange={this.handleChange} placeholder="Enter some text" name="text" value={this.state.text} />
                </fieldset>
                <div className="output">
                    <h3>Your Text Output</h3>
                    {/* curly brackets are used to implement logic inside of your HTML rendering */}
                    <span>{this.state.text}</span>
                </div>
                <button onClick={this.handleClick}>Clear</button>
            </div>
        )
    }
}
