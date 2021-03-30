import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", value: ""  };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
      event.preventDefault();
    alert(`You have submitted the input successfully:   ${this.state.name}, ${this.state.value}`);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Controlled Form Example</h1>
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChangeName}
          />{" "}
          <br />
        </label>
        <label>
          Company Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />{" "}
          <br />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default App;
