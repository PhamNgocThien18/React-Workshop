import React, { Component } from 'react';
import './App.css';
// import { Navbar, NavbarBrand } from 'reactstrap';
// import Menu from './components/MenuComponent';
// import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   dishes: DISHES
    // };
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        {/* <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <div className="container">
          <Menu dishes={this.state.dishes} />
        </div> */}
        <Main />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;