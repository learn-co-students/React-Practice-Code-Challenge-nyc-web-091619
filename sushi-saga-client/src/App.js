import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    sushiRun: 0,
    startingMoney: 100,
    plates: []
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(data =>
      this.setState({
        sushi: data
      }))
  }

  clickHandler = () => {
    this.setState({
      sushiRun: this.state.sushiRun + 4
    })
  }


    eatingSushiPlate = (props) => {
      if (this.state.startingMoney < props.price) {
        alert("You outta money! Broke a$$")
      } else {
        this.setState({
          startingMoney: this.state.startingMoney - props.price,
          plates: [...this.state.plates, props]
        })
      }
    }


  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} sushiRun={this.state.sushiRun} clickHandler={this.clickHandler} eatingSushiPlate={this.eatingSushiPlate}/>
        <Table startingMoney={this.state.startingMoney} plates={this.state.plates}/>
      </div>
    );
  }
}

export default App;