import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    imageUrl: '',
    isLoading: true,
  };

  componentDidMount() {
    const localStorageUrl = localStorage.getItem('imageUrl');
    if (localStorageUrl) {
      this.setState({ imageUrl: localStorageUrl, isLoading: false });
    } else {
      this.fetchDog();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !nextState.imageUrl.includes('terrier');
  }

  componentDidUpdate() {
    const { imageUrl } = this.state;
    localStorage.setItem('imageUrl', imageUrl);
    const dogBreed = imageUrl.split('/')[4];
    alert(dogBreed);
  }

  fetchDog = async () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => this.setState({
        imageUrl: data.message,
        isLoading: false,
      }));
  };

  render() {
    const { imageUrl, isLoading } = this.state;

    if (isLoading) <h2>Loading...</h2>;

    return (
      <div>
        <h1>Doguinhos</h1>
        <button
          type="button"
          onClick={ this.fetchDog }
        >
          Novo Doguinho
        </button>
        <div>
          <img src={ imageUrl } alt="Doguinho aleatório" />
        </div>
      </div>
    );
  }
}
