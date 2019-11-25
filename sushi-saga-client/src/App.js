import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    money_left: 100,
    sushis: [],
    eaten: [],
    showIndex: 0
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({
      sushis: sushis
    }))
  }

  eatSushi = sushi =>{
    if(this.state.money_left - sushi.price > 0 && !this.state.eaten.includes(sushi)){
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money_left: this.state.money_left - sushi.price
      })
    }
  }

  fourSushis = () => {
    return this.state.sushis.slice(this.state.showIndex, this.state.showIndex+4)
  }

  nextFour = () => {
    // console.log(this.state.sushis.length)
    // console.log(this.state.showIndex+4)
    if(this.state.showIndex+4 < this.state.sushis.length){
      this.setState({
        showIndex: this.state.showIndex+4
      })
    }else{
      this.setState({
        showIndex: 0
      })
    }
  }

  getMoney = e => {
    if(this.state.money_left + 100 < 1000){
      this.setState({
        money_left: this.state.money_left + 100
      })
    }else{
      this.setState({
        money_left: 0
      })
      e.target.innerText="No more money for you!Greedy bastard!!!"
    }
  }
  getMoneyForm = e => {
    e.preventDefault()
    let balncePlus = parseInt(e.target[0].value)
    // console.log(balncePlus)
    if(this.state.money_left + balncePlus < 1000){
      this.setState({
        money_left: this.state.money_left + balncePlus
      })
    }else{
      this.setState({
        money_left: 0
      })
      e.target.innerText="Don't be so greedy!!!No more money for you!"
    }
  }


  render() {
    return (
      <div className="app">
        <SushiContainer fourSushis={this.fourSushis()} nextFour={this.nextFour} eaten={this.state.eaten} eatSushi={this.eatSushi} />
        <Table money_left={this.state.money_left} eaten={this.state.eaten} getMoney={this.getMoney} getMoneyForm={this.getMoneyForm}/>
      </div>
    );
  }
}

export default App;