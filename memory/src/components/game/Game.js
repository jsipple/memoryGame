import React, { Component } from 'react';
import './Game.css'
import {headShake} from 'react-animations';
import {StyleSheet, css} from 'aphrodite';

import jasnah from './images/jasnah.jpg'
import Kaladin from './images/Kaladin.jpg'
import kaladin2 from './images/kaladin2.jpg'
import keisler from './images/keisler.jpg'
import sazed from './images/sazed.jpg'
import shai from './images/shai.jpg'
import shalash from './images/shalash.png'
import Shallan from './images/Shallan.jpg'
import szeth from './images/szeth.jpg'
import vasher from './images/vasher.jpg'
import vin from './images/vin.jpg'
import vin2 from './images/vin2.jpg'
import vin3 from './images/vin3.jpg'
import vin4 from './images/vin4.jpg'
let image = []
const images  = [jasnah, Kaladin, kaladin2, keisler, sazed, shai, shalash, Shallan, szeth, vasher, vin, vin2, vin3, vin4]


const styles = StyleSheet.create({
 headShake: {
  animationName: headShake,
  animationDuration: '1s'
 }
})

class Game extends Component {
 constructor(props) {
  super(props)
  this.state = {
   images: [],
   guessed: [],
   shouldShake: false
  }
 }
 componentDidMount = () => {
  console.log(jasnah)
  console.log(images[0])
  this.setState({
   images,
   guessed: []
  })
 }
 guess = (e) => {
  console.log(e.target.id)
  let id = e.target.id
  if (this.state.guessed.indexOf(id) === -1) {
   let newGuessed = [...this.state.guessed]
   newGuessed.push(id)
   this.setState({
    guessed: newGuessed
   })
   console.log('a')
   this.props.updateScore()
  } else {
   this.setState({
    guessed: []
   })
   this.props.incorrect()
   this.setState({shouldShake: true}, () => {
    const that = this;
    setTimeout(() => that.setState({shouldShake: false}), 1000);
});
  }
 }
 render() {
  image = this.state.images.map( (x, i) => <img additionalStyles={{text: {}, frame: {}}} frameClass={this.state.shouldShake ? css(styles.headShake) : ''} onClick={this.guess} id='image' className={this.state.shouldShake ? css(styles.headShake) : ''} src={x} alt='character' />)
  return( 
   <div>
   {image}
   </div>
  )
 }
}

export default Game