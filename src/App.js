import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import Book from './components/Book';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Book />
        <Footer />
      </div>
    );
  }
}

export default App;
