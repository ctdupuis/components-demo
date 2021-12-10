class Component {
    constructor(state={text:""}) {
        this.state = state;
    }

    handleChange = value => this.state.text = value;

    handleClick = () => this.state.text = "";
}