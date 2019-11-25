import React from 'react'

class Wallet extends React.Component{

  state = {
    add: 0
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    if(this.state.add == parseInt(this.state.add)){
      this.props.addMoney(parseInt(this.state.add))
    }else{
      alert("Please just enter a number...")
    }
    e.target.reset()
  }  

  handleChange = (e) =>{
    
    this.setState({
      add: e.target.value
    })
    
  }

  render(){
    return (
        <form onSubmit={this.handleSubmit}>
            <label>ADD MONEY TO YOUR WALLET:</label>
            <input type="text" onChange={this.handleChange} placeholder="enter amount"/>
            <input type="submit" value="Deposit"/>
        </form>
      )
  }
  
}

export default Wallet