import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar'
import Home from './containers/Home/Home'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Home />
      </div>
    );
  }
}

export default App;
