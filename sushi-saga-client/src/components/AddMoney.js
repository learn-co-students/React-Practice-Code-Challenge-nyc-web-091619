import React, { Component } from 'react'

export default class AddMoney extends Component {
    state = {
        input: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state.input)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>How much money would you like to add?</label>
                    <input type='number' value={this.state.input} name="balance" onChange={(e) => this.setState({ input: e.target.value })} />
                    <input type='submit' value="Confirm" />
                </form>
            </div>
        )
    }
}