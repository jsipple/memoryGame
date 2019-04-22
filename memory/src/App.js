import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Jumbotron from './components/jumbotron/Jumbotron';
import Game from './components/game/Game';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      score: 0,
      maxScore: 0,
      guess: ''
    }

  }
  updateScore = () => {
      this.setState({
        score: this.state.score + 1,
        guess: 'correct'
      })
      if (this.state.score + 1 > this.state.maxScore) {
        this.setState({
          maxScore: this.state.score + 1
        })
      }

  }
  incorrect = () => {
    this.setState({
      score: 0,
      guess: 'incorrect'
    })
  }
  render() {
    return (
      <div className="App">
        <Jumbotron guess={this.state.guess} score={this.state.score} maxScore={this.state.maxScore}/>
        <Game updateScore={this.updateScore} incorrect={this.incorrect} /> 
      </div>
    );
  }
}

export default App;
