import React from 'react';
import Pokedex from './components/Pokedex';
import pokemonList from './data';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pokedex pokemonList={ pokemonList } />
      </div>
    );
  }
}
