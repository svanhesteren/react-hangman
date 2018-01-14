import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board'
import Gallow from './components/Gallow'
import Title from './components/Title'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title />
        </header>
        <div>
        <br />
          <Gallow />
          <Board />
          </div>
      </div>
    );
  }
}

export default App;
