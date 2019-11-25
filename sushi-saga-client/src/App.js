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

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(data =>
      this.setState({
        sushi: data
      })
    )
  }

  plateClickHandler = (sushiprops) => {
    // calculate enough money
    // subtract money from startingMoney
    // add a plate
    // console.log(event.target.nextSibling.innerHTML.split("$")[1])
    if (this.state.startingMoney < sushiprops.price) {
      alert("You are out of monay!")
    } else {
      this.setState({
        startingMoney: this.state.startingMoney - sushiprops.price,
        plates: [...this.state.plates,...sushiprops],
      })
    }
  }

  clickHandler = () => {
    this.setState({
      sushiRun: this.state.sushiRun + 4
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} 
                        sushiRun={this.state.sushiRun} 
                        clickHandler={this.clickHandler} 
                        plateClickHandler={this.plateClickHandler}
        />
        <Table  startingMoney={this.state.startingMoney} 
                plates={this.state.plates} 
        />
      </div>
    );
  }
}

export default App;