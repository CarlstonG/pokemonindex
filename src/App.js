import React, {Component} from 'react';
import { DetailView, Pokelist, Pokemon } from './components';

import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      pokemon: {
      }
    }

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(response => response.json())
    .then(data => {
      const pokemon = new Pokemon(data)
      this.setState({pokemon})
    })
    .catch(err => console.log(err))
  }

  render() {
    return(
      <div className="App">
        <Pokelist handleOnClick={this.handleOnClick}/>
        <DetailView pokemon={this.state.pokemon}/>
      </div>
    )
  }
}


export default App;
