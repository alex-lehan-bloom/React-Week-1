import React from "react";
import './MyForm.css';

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 0,
    }
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleAgeChange(event) {
    this.setState({ age: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(`The form was submitted with ${this.state}`);
    this.props.onFormSubmit(this.state);
  }

  render() {
    const { name, age } = this.state;
    return (
      <form className="my-form" onSubmit={event => this.handleSubmit(event)}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={event => this.handleNameChange(event)}
        />
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={event => this.handleAgeChange(event)}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FormComponent;