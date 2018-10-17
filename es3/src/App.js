import React, { Component } from 'react';

import './App.css';



class App extends Component {

  constructor() {
  	super();
    this.state = {
    	currentTodo: '',
      todos: []
    };

    this.aggiornaTesto = this.aggiornaTesto.bind(this);
    this.addList = this.addList.bind(this);
  }

  aggiornaTesto(event) {
  	this.setState({ currentTodo: event.target.value });
	}

  addList(event) {
    //The preventDefault() method stops the default action of an element from happening.
    event.preventDefault()
    if(this.state.currentTodo!=""){
      this.setState({
        currentTodo: '', //We clean the input text
        todos: [...this.state.todos, this.state.currentTodo]
      });
    }
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.addList}>
          <input value={this.state.currentTodo} onChange={this.aggiornaTesto} />
          <button>Submit</button>
        </form>
        <ul>
        {
          this.state.todos.map((todo) => <li>{todo}</li>)
        }
        </ul>
      </div>
    )
  }
}




export default App;
