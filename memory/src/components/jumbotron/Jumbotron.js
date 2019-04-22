import React, { Component } from 'react';
import './Jumbotron.css'

class Jumbotron extends Component {
 render() {
  return(
<div class="jumbotron jumbotron-fluid">
  <div class="container">
  <h1>Stormlight Archives memory game</h1>
  <p>click on the images below to begin if you click on an image that you have already clicked your score will reset</p>
    <h1 class="display-4">{this.props.guess}</h1>
  </div>
  <p>score: {this.props.score} high Score: {this.props.maxScore}</p>
</div>
  )
 }
}

export default Jumbotron