import React, {Component} from 'react';
class StateThree extends Component{
    constructor(){
        super();
        this.state={
            itemlist:["Apple", "mango", "Milk", "Water", "TV", "Laptop"],
            newItem: '',
            message:''
        }
    }
    save =()=>{
        //  var newitem = prompt("Enter New Item Name")
        this.setState({
            itemlist : this.state.itemlist.concat(this.state.newItem),
            message: this.state.newItem + ' Added Sucessfully!',
            newItem:''
        })
    }
    processBook=(object)=>{
        //alert(object.target.value);
        this.setState({
            newItem : object.target.value
        })

    }

    render(){
        return(
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-12 text-center text-danger"><p>{this.state.message}</p></div>
                    <div className="col-lg-4">
                        <h3> Add New Item </h3>
                        Name: <input type="text"  placeholder="Enter Element" className="form-control" onChange={this.processBook}
                        value={this.state.newItem}
                        />
                        <button className="btn btn-primary mt-3" onClick={this.save}> Save Item </button>
                    </div>
                    <div className="col-lg-4">
                        <h3> Your New item is </h3>
                        <p>{this.state.newItem}</p>
                    </div>
                    <div className="col-lg-4">
                        <h3> Item List : {this.state.itemlist.length} </h3>
                        {
                            this.state.itemlist.map((itemname , index)=>{
                                return(
                                    <p key={index}> {itemname} </p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default StateThree;