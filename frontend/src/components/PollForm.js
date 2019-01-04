import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

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

  handleFocus() {
    this.setState({ focus: true });
  }

  handleBlur() {
    this.setState({ focus: false });
  }

  handleKeyPress(e) {
    console.log(e.key);
    if (e.key === 'Enter' && e.shiftKey) {
      const options = this.state.options;
      if (options.length === 1) return;
      options.pop()
      this.setState({ options });
    } else if (e.key === 'Enter') {
      const options = this.state.options;
      options.push('')
      this.setState({ options });
    }
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
            onFocus={() => this.handleFocus()}
            onBlur={() => this.handleBlur()}
            onKeyPress={e => this.handleKeyPress(e)}
          />
        </FormGroup>))}
        <HelpBlock style={{ fontSize: '75%' }}>
          {this.state.options[this.state.options.length - 1].length > 0 &&
          'Press Enter for Another Option'}
          {this.state.options.length > 1 && this.state.options[this.state.options.length - 1].length < 1 &&
          'Press Shift+Enter to Remove Last Option'}
        </HelpBlock>
        <Button onClick={() => this.handleGenerateClick}>Generate</Button>
      </form>
    );
  }
}

export default PollForm;
