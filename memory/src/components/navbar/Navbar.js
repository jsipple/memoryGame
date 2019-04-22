import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
 constructor(props) {
  super(props)
   this.state = {
    correct: 0,
    topscore: 0
   }
 }
 render() {
  return(
   <nav className="navbar navbar-expand-lg navbar-light bg-primary">
    <ul className="navbar-nav ">
      <li className="nav-item active float-right">
        score: {this.props.score} 
      </li>
      <li className="nav-item active ">
        high Score: {this.props.maxScore} 
      </li>
      
    </ul>
</nav>
  )
 }
}

export default Navbar