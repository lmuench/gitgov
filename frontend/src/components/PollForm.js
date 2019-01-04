import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class PollForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issue: '',
      options: ['', '', '']
    };
  }

  handleIssueChange(e) {
    this.setState({ issue: e.target.value });
  }

  handleOptionChange(e, i) {
    const options = this.state.options;
    options[i] = e.target.value;
    this.setState({ options });
  }

  render() {
    return (
      <form>
        <FormGroup>
          <ControlLabel>Create a Poll to Embed in a GitHub Issue</ControlLabel>
          <FormControl
            type="text"
            value={this.state.issue}
            placeholder={`Enter Link to Issue`}
            onChange={e => this.handleIssueChange(e)}
          />
        </FormGroup>
        {this.state.options.map((_, i) => (
        <FormGroup key={i} >
          <FormControl
            key={i}
            type="text"
            value={this.state.options[i]}
            placeholder={`Enter Option ${i + 1}`}
            onChange={e => this.handleOptionChange(e, i)}
          />
        </FormGroup>
        ))}
        <FormControl.Feedback />
        <Button type="submit">Create</Button>
      </form>
    );
  }
}

export default PollForm;
