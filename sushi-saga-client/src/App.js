import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';


// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    conveyorIndex: 0,
    eaten: [],
    money: 100
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then((res) => {
      this.setState({
        sushis: res
      })
      // console.log(this.state.sushis)
    })
  }

  moreSushiClick = () => {
    this.setState({conveyorIndex: (this.state.conveyorIndex+4)})
  }

  eatSushi = (event) => {
    let eatenID = parseInt(event.target.id)
    let moneyLeft = this.state.money - parseInt(event.target.dataset.money)
    this.setState({eaten: [...this.state.eaten, eatenID], money: moneyLeft})
  }
  
  render() {
    let sushis = this.state.sushis.slice(this.state.conveyorIndex, (this.state.conveyorIndex+4))
    // console.log(this.state.eaten)
    return (
      <div className="app">
        <SushiContainer 
          sushis = {sushis}
          moreSushiClick = {this.moreSushiClick}
          eatSushi = {this.eatSushi}
          eaten = {this.state.eaten}
          money = {this.state.money}/>
        <Table money = {this.state.money}/>
      </div>
    );
  }
}

export default App;