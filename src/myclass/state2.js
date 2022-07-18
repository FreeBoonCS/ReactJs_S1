import React, { Component } from 'react';

class State2 extends Component {
    constructor() {
        super();
        this.state = {
            counter: 5,
            message:''
        }
    }

    updateCounter = () =>{
        
        this.setState({
            counter : this.state.counter + 5,
            message : 'The Last was to + by 5'
        })
        
    }
    updateTheCounter = () =>{
        
        this.setState({
            counter : this.state.counter - 5,
            message : 'you have clicked to - by 5'
        })
        
    }
    
// if any changes happen in state variable using setState() then render function will get cal and re-render
//the update value from state

    render() {
       alert('render is calling');
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3>State Management Fetch and Update Example</h3>
                        
                        <button className="btn btn-primary m-2" onClick={this.updateCounter}>+ The State by 5</button>
                        <button className="btn btn-warning m-2" onClick={this.updateTheCounter}>- The State by 5</button>
                        <h1 className="text-success">The Current State Value is : {this.state.counter}</h1>
                        <p>{this.state.message}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default State2;