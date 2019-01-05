import React, { Component } from 'react';
import SVG from 'react-inlinesvg';

class ChartPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: 'http://localhost:3000/polls/52'
    };
  }

  render() {
    return (
      <SVG src={this.state.src} />
    );
  }
}

export default ChartPreview;
