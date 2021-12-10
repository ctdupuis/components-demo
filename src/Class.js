import React, { Component } from 'react';

export default class Class extends Component {
    state = {
        text: ""
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleClick = event => {
        this.setState({ text: "" });
    }

    render() {
        return (
            <div className="form-container">
                <fieldset>
                    <legend>Class Component</legend>
                    <input type="text" onChange={this.handleChange} placeholder="Enter some text" name="text" value={this.state.text} />
                </fieldset>
                <div className="output">
                    <h3>Your Text Output</h3>
                    <span>{this.state.text}</span>
                </div>
                <button onClick={this.handleClick}>Clear</button>
            </div>
        )
    }
}
