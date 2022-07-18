import React, { Component } from 'react'; // component has all feature for state management
class StateOne extends Component {

    constructor() {
        super();
        this.state = {
            name: 'Ramesh',
            city: 'Bangalore',
            age: '30 Years',
            hobbie:["writing", "Singing","Playing", "Swiming"],
            edu:[
                {name:"Divya", year:2015, marks:"70%"}
            ],
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2> This is from Class Component & State 1 File </h2>
                        <p>The Name is : {this.state.name}</p>
                        <p>The City is : {this.state.city}</p>
                        <p>The Age is : {this.state.age}</p>
                        <p> Hobbies : 
                            {
                                this.state.hobbie.map((myhobbie , index)=>{
                                    return(
                                        <label key={index}> {myhobbie} , </label>
                                    )
                                })
                            }
                        </p>
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default StateOne;
