import React , {Component} from 'react';
class StateFive  extends Component{

    constructor(){
        super();
        this.state ={
            booklist:[
                        {bookname:"Java", price:"400",qty:5}
                    ],
            message:'',
            fieldlist:{}
        }
    }
    
    save =()=>{
        //console.log(this.state.fieldlist)
        this.setState({
            booklist : this.state.booklist.concat(this.state.fieldlist),
            message: this.state.fieldlist.bookname + " Added Sucessfully !",
            fieldlist: {bookname:"", price:"",qty:""}
        })
        
        
    }
    processInput = (obj)=>{
        let fieldlist=this.state.fieldlist;
                                                    //ArrayName[key]=value
        fieldlist[obj.target.name]=obj.target.value;//Fieldset[price]=value

        this.setState({
            fieldlist  
        })
    }
    deleteBook = (bookindex) =>{
        var bookname = this.state.booklist[bookindex].bookname; // to capture bookname
        this.state.booklist.splice(bookindex , 1); // delete book from given index
        this.setState({
            booklist:this.state.booklist,  // update the remaining books in state
            message : bookname + " Deleted Successfully !" // message for user
        })
    }


    render(){
        return(
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-12 text-primary text-center p-3">
                        <h3>Multi dimensional Array add , list, delete using state</h3>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <h4> Add New Book </h4>
                        <div className="mb-3">
                            <label>Book Name</label>
                            <input type="text" className="form-control" name="bookname"
                            onChange={this.processInput}
                            value={this.state.fieldlist.bookname}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Price</label>
                            <input type="text"
                             className="form-control" 
                             name="price"
                              onChange={this.processInput}
                              value={this.state.fieldlist.price}
                              />
                        </div>
                        <div className="mb-3">
                            <label>Quantity</label>
                            <input type="text" 
                            className="form-control" 
                            name="qty" 
                            onChange={this.processInput}
                            value={this.state.fieldlist.qty}
                            />
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary" onClick={this.save}>Save Book</button>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <p className="text-success text-center">{this.state.message}</p>
                        <table className="table table-bordered">
                            <thead>
                                <tr className="text-danger">
                                    <th> Book Id </th>
                                    <th> Book Name </th>
                                    <th> Price </th>
                                    <th> Quantity </th>
                                    <th> Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.booklist.map(( bookinfo,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{index}</td>
                                                <td>{bookinfo.bookname}</td>
                                                <td>{bookinfo.price}</td>
                                                <td>{bookinfo.qty}</td>
     <td><button className="btn btn-danger btn-sm" onClick={this.deleteBook.bind(this,index)}>Delete</button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default StateFive;