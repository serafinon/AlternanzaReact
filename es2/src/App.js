import React, { Component } from 'react';

import './App.css';



class App extends Component {

  constructor(props) {

    super(props);

    this.state = {

      searchValue: '',

      img: ''

    };

  }



  onChange = (event) => {
    this.setState({ searchValue: event.target.value });
  }

  handleSubmit = (event) => {

    event.preventDefault();//pulisci input bar
    const api_key = 'dc6zaTOxFJmzC';
    const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.searchValue}&api_key=${api_key}`;

    fetch(url)

      .then(response => response.json())
      .then(data => this.setState({ searchValue:'', img: data.data[0].images.fixed_height.url }))
      .catch(e => console.log('error', e));

  }



  render() {
    const imgStyle={margin:'30px'};

    return (

      <div className="App">

        <form onSubmit={this.handleSubmit}>

          <input value={this.state.searchValue} onChange={this.onChange} />

          <button>Search!</button>

        </form>

        <img src={this.state.img} height="200" style={imgStyle} alt={this.state.searchValue} />

      </div>

    );

  }

}



export default App;
