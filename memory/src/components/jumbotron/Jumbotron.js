import React, { Component } from 'react';
import './Jumbotron.css'

class Jumbotron extends Component {
 render() {
  return(
<div class="jumbotron jumbotron-fluid">
  <div class="container">
  <h2>below will display whether you guessed correctly or not</h2>
    <h1 class="display-4">{this.props.guess}</h1>
  </div> 
</div>
  )
 }
}

export default Jumbotron