import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import AddMoney from './components/AddMoney'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    sushisIndex: 0,
    eaten: [],
    balance: 200,
    addingMoney: false
  }

  grabFourSushis = () => {
    this.setState({
      sushisIndex: this.state.sushisIndex + 4
    })
  }

  eatSushi = (sushi) => {
    if (this.state.balance >= sushi.price) {
      sushi.eaten = true
      this.setState({
        sushis: [...this.state.sushis, sushi],
        eaten: [...this.state.eaten, sushi],
        balance: this.state.balance - sushi.price
      })
    }

  }

  renderForm = () => {
    this.setState({ addingMoney: true })
  }

  addToBalance = (money) => {
    this.setState({ balance: this.state.balance + parseInt(money), addingMoney: false })
  }

  render() {
    return (
      <div>
      {this.state.addingMoney 
        ? 
          <AddMoney handleSubmit={this.addToBalance} />
        :
          <div className="app">
            <SushiContainer sushis={this.state.sushis.slice(this.state.sushisIndex, this.state.sushisIndex + 4)} grabFourSushis={this.grabFourSushis} eatSushi={this.eatSushi}/>
            <Table eatenSushi={this.state.eaten} balance={this.state.balance} addMoneyToBalance={this.renderForm} renderForm={this.renderForm} />
          </div>
      }
      </div>
    );
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(json => {
      this.setState({ sushis: json.map(sushi => Object.assign(sushi, {eaten: false})) })
    })
  }

}

export default App;