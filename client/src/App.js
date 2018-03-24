import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {bookresult: []}

  componentDidMount() {
    fetch('/booksearch')
      .then(res => res.json())
      .then(bookresult => this.setState({ bookresult }));
    }

  render() {
    return (
      <div className="App">
        <h1>Books</h1>
        {this.state.bookresult.map(books =>
          <div key={books.id}>{books.title}, {books.authors}</div>
        )}
      </div>
    );
  }
}

export default App;
