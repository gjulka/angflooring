import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar'
import Home from './containers/Home/Home'
import Products from './containers/Products/Products'
import SideDrawer from './components/NavBar/SideDrawer /SideDrawer';
import BackDrop from './components/NavBar/Backdrop/Backdrop';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';

class App extends Component {
  state = {
    sideDrawerOpen: false
  }


  sideDrawerToggle = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }


  render() {
    let backdrop;
    let sideDrawer;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer/>
      backdrop = <BackDrop click={this.backdropClickHandler}/>
    }


    return (
      <div className="App">
        <NavBar sideDrawerClickHandler={this.sideDrawerToggle} />
        {sideDrawer}
        {backdrop}
        <Home />
        <About />
        <Products />
        <Contact />
      </div>
    );
  }
}

export default App;
