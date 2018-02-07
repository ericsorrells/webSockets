import React, { Component } from 'react';
import logo from './logo.svg';
import { newFetch } from './httpRequests'
import { wsConstructor } from './webSocket'
import './App.css';

const API = 'http://localhost:8080/?query=';
const DEFAULT_QUERY = 'redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: 0
    }
  }

  componentDidMount() {
    // setInterval(newFetch, 3000);
    wsConstructor();
  }

  render() {
    const { hits } = this.state;
    return (
      <div className="App">
        <h1>{hits}</h1>
      </div>
    );
  }
}

export default App;
