import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    conta:0
  }

  render() {

    return (
      <div>
        <h1>{this.state.conta}</h1>
        <button onClick={()=> this.setState({conta: this.state.conta +1})}>
          Incrementa
        </button>
        <button onClick={()=> this.setState({conta: this.state.conta -1})}>
          Decrementa
        </button>
      </div>
    );

  }
}

export default App;
