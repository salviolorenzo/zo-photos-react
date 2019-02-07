import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Gallery from './Gallery';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default App;
