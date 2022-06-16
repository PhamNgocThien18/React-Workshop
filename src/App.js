import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Welcome from './components/Welcome';
import Comment from './components/Comment';
import Avatar from './components/Avatar';
import Car from './components/Car';
import Menu from './components/MenuComponent.js';
import {DISHES} from './shared/dishes';

const comment = {
  date : new Date(),
  text:'T hope you enjoy my restaurant ',
  author:{
    name : 'alberto',
    avatarUrl: './images/alberto.png'
  }
}
class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      dishes: DISHES
    };
  }
  render(){
    return (
      <div className="App">
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>

        <Welcome name="Thien"/>
        <Welcome name="Thuy Van "/>
        <Welcome name="Thuy Kieu"/>

        <Comment date={comment.date} text={comment.text} author={comment.author} />
      
        <Car />
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
  
}

export default App;
