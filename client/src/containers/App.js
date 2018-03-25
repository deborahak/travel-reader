import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Button from 'material-ui/Button';
//import logo from './logo.svg';
import '../style/App.css';

class App extends Component {
  // state = {bookresult: []}

  // componentDidMount() {
  //   fetch('/booksearch')
  //     .then(res => res.json())
  //     .then(bookresult => this.setState({ bookresult }));
  //   }

  render() {
    return (
      <div className="">
        <h1>Redux Form</h1>
        <Link to = "/search_results">
          <Button >
           Search!
          </Button>
        </Link>
        </div>
      );
  }

}

export default App;

JSON.stringify
