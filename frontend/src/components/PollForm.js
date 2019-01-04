import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class PollForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issue: '',
      options: [''],
      focus: false
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

  handleLessOptionsClick() {
    const options = this.state.options;
    if (options.length <= 1) return;
    options.pop()
    this.setState({ options });
  }

  handleMoreOptionsClick() {
    const options = this.state.options;
    options.push('')
    this.setState({ options });
  }

  handleGeneratePollClick() {
    // TODO
  }

  render() {
    return (
      <form>
        <FormGroup>
          <ControlLabel>Generate a Poll to Embed in a GitHub Issue</ControlLabel>
          <FormControl
            type="text"
            value={this.state.issue}
            placeholder={`Enter Link to Issue`}
            onChange={e => this.handleIssueChange(e)}
            autoFocus
          />
        <Button style={{ margin: 15 }} onClick={() => this.handleLessOptionsClick()}>Less Options</Button>
        <Button style={{ margin: 15 }} onClick={() => this.handleMoreOptionsClick()}>More Options</Button>
        {this.state.options.map((_, i) => (
          <FormGroup key={i}>
            <FormControl
              key={i}
              type="text"
              value={this.state.options[i]}
              onChange={e => this.handleOptionChange(e, i)}
              placeholder={`Enter Option ${i + 1}`}
            />
          </FormGroup>
        ))}
        </FormGroup>
        <Button onClick={() => this.handleGeneratePollClick()} bsSize="lg">Generate Poll</Button>
      </form>
    );
  }
}

export default PollForm;
