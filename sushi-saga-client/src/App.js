import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state={
    sushis: [],
    sushiIndex: 0,
    money: 500,
    eaten: []
  }
  
  componentDidMount(){
    fetch(API)
    .then(resp=>resp.json())
    .then(data=>this.setState({
      sushis: data
    }))
  }

  displayFour = ()=>{
    return this.state.sushis.slice(this.state.sushiIndex, this.state.sushiIndex + 4)
  }

  getMore = ()=>{
    let newSushiIndex = this.state.sushiIndex + 4
    this.setState({
      sushiIndex: newSushiIndex
    })
  }

  eat = (sushi)=>{
    let remain = this.state.money - sushi.price
    if (this.state.money >= sushi.price){
      if (!this.state.eaten.includes(sushi)){
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: remain
      })
      }
    }
  }
  
  render() {
    return (
      <div className="app">
        <SushiContainer  
          sushis={this.displayFour()} 
          getMore={this.getMore} 
          removePlate={this.removePlate} 
          lastPlate={this.lastPlate}
          eat={this.eat}
          eaten={this.state.eaten}/>
        <Table 
          money={this.state.money} 
          eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;