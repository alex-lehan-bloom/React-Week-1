import React from "react";
import PreviousMessages from "./List";
import { Form, FormControl, InputGroup, Button } from "react-bootstrap";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date_time: "",
      newest_message: "",
      messages: [],
    };
  }

  onTypeMessage(event) {
    let date = new Date();
    this.setState({ newest_message: event.target.value, date_time: date });
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      messages: this.state.messages.concat(
        "You said: '" +
          this.state.newest_message +
          "' on " +
          this.state.date_time
      ),
    });
  }

  render() {
    let newDate = new Date();
    console.log(newDate);
    return (
      <div>
        <Form className="form" onSubmit={(event) => this.onSubmit(event)}>
          <InputGroup
            className="mb-3"
            onChange={(event) => this.onTypeMessage(event)}
          >
            <FormControl
              placeholder="Type message"
              aria-label="message"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="primary outline-primary" type="submit">
                Message
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
        <PreviousMessages list_data={this.state.messages}></PreviousMessages>
      </div>
    );
  }
}

export default FormComponent;
