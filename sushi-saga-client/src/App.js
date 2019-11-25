import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Wallet from './containers/Wallet';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    fourSushis: [],
    currentIndex: 0,
    plates: [],
    balance: 100
  }

  addMoney = (amt)=>{
    this.setState({
      balance: this.state.balance + amt
    })
  }

  getNextFour = (list, add) => {
    let newList= list.slice(this.state.currentIndex + add, this.state.currentIndex + add+4)
    console.log("getting next four, current state index is", this.state.currentIndex)
    console.log("New List = ", newList)
    if(newList.length < 4){
      console.log("not long enough...")
      newList = [...list.slice(0, 4 - newList.length), ...newList]
    }
    return newList
  }

  moreSushi = () => {
    console.log("you clicked!")
    let newFour = this.getNextFour([...this.state.sushis], 4)
    console.log("new four= ", newFour)
    console.log("new index is ", (this.state.currentIndex + 4) % this.state.sushis.length)
    this.setState({
      fourSushis: [...newFour],
      currentIndex: (this.state.currentIndex + 4) % this.state.sushis.length
    })
  }

  eatSushi = (newSushi) => {
    console.log("trying to eat a sushi ", newSushi)
    if(this.state.balance >= newSushi.price){
      
      let newSushis = [...this.state.sushis]
      let index = newSushis.findIndex(sushi=> sushi.id === newSushi.id )
      newSushis[index].eaten = true
      console.log("just set ", newSushis[index])
      
      let newPlates = [...this.state.plates]
      newPlates.push("plate")

      let newFour = this.getNextFour([...newSushis], 0)

      console.log("about to set state and the next four are ", newSushis.slice(this.state.currentIndex, 4) )
      this.setState({
        sushis: [...newSushis],
        fourSushis: newFour,
        balance: this.state.balance - newSushi.price,
        plates: [...newPlates]
      })
    } 
  }

  componentDidMount(){
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        //let updatedData = data.map(sushi => Object.assign({...sushi}, {eaten: false}))
        console.log(data)
        this.setState({
          sushis: data,
          fourSushis: data.slice(0,4)
        })
      })
  }

  render() {
    console.log("rendering and four = ", this.state.fourSushis)
    return (
      <div className="app">
        <SushiContainer sushis={this.state.fourSushis} moreSushi={this.moreSushi} eatSushi={this.eatSushi}/>
        <Table plates={this.state.plates} balance={this.state.balance}/>
        <Wallet addMoney={this.addMoney}/>
      </div>
    );
  }
}

export default App;