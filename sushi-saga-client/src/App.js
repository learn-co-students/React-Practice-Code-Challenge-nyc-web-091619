import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    copySushis: [],
    renderFour: [],
    start: 0,
    end: 4,
    eatenSushi: [],
    moneyRemaining: 100
  }

  buySushi = (sushi) => {
    this.setState({ moneyRemaining: this.state.moneyRemaining - sushi.price  });
  }

  eatenHandler = (sushiEaten) => {
    console.log('click')
    
    if (this.state.moneyRemaining < sushiEaten.price || this.state.moneyRemaining === 0) return
    let eatenSushi = this.state.renderFour.find(sushi => sushi.id === sushiEaten.id)
    eatenSushi.eaten = true
    this.setState(
      { 
        eatenSushi: [...this.state.eatenSushi, eatenSushi],
      },() => this.buySushi(sushiEaten));
      console.log('wrote as call back')
  }

  getFourSushis = (e) => {
    e.preventDefault()
    console.log(this.state.renderFour)
    let sushiList = this.state.copySushis.slice(this.state.start + 4, this.state.end + 4)
    this.setState(
      { 
        start: this.state.end,
        end: this.state.end + 4,
        renderFour: sushiList
      });
  }

  render() {
    console.log(this.state.renderfour)
    return (
      <div className="app">
        <SushiContainer  sushis={this.state.renderFour} getFourSushis={this.getFourSushis} eatenHandler={this.eatenHandler}/>
        <Table eatenSushi={this.state.eatenSushi} moneyRemaining={this.state.moneyRemaining}/>
      </div>
    );
  }

  componentDidMount() {
    fetch(API).then(res => res.json()).then(sushis => this.setState(
      {
        sushis : sushis,
        copySushis: sushis.map(sushi => Object.assign(sushi, {eaten:false})),
        renderFour: sushis.splice(0,4)
      }) )
  }
}//end of class



export default App;





// console.log('called by eaten handler', this.state.moneyRemaining)
    // console.log(this.state.eatenSushi)
    // let eaten = this.state.eatenSushi.reduce((a, b) => {
    //   return a + b.price
    // }, 0 )
    // console.log(eaten, 'here is eaten after the reduce')
    // this.setState({ moneyRemaining: this.state.moneyRemaining - eaten }); 
    // console.log('after setting state', this.state.moneyRemaining)

    // showSushis = () => {
  //   console.log(this.state.copySushis)
  // }