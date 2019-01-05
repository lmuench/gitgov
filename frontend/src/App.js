import React, { Component } from 'react';
import PollForm from './components/PollForm';
import ChartPreview from './components/ChartPreview';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-logo">
            <i className="fas fa-balance-scale"></i>
          </div>
        </header>
        <div className="App-body" >
          <PollForm />
          <ChartPreview />
        </div>
      </div>
    );
  }
}

export default App;
