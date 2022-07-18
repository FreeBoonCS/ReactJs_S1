import React , {Component} from 'react';
class StateFour  extends Component{

    constructor(){
        super();
        this.state ={
            booklist:["Java", "NodeJs", "PHP", "html", "Jquery"],
            message:'',
            newbook:''
        }
    }

    processBook = (obj) =>{
        this.setState({
            newbook:obj.target.value
        })
    }

    save = () =>{
        this.setState({
            booklist:this.state.booklist.concat(this.state.newbook),
            message: this.state.newbook + " Added Successfully !",
            newbook:''
        })
    }

    deleteBook = (bookindex) =>{
        var bookname = this.state.booklist[bookindex];  // capture element name before delete

        this.state.booklist.splice(bookindex , 1); // 1 for delete, 0 for add  : a-b 
        this.setState({
            booklist:this.state.booklist,
            message : bookname + ' Removed Successfully !'
        })
    }

    render(){
        return(
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-12 text-primary text-center p-3">
                        <h3>Single dimensional Array add , list, delete using state</h3>
                    </div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-5">
                        <input type="text" 
                        className="form-control" 
                        onChange={this.processBook}
                        value={this.state.newbook}
                        />
                        <label>Enter Book Name </label>
                    </div>
                    <div className="col-lg-3">
                        <button className="btn btn-primary" onClick={this.save}>Save Book</button>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <p className="text-success text-center">{this.state.message}</p>
                        <table className="table table-bordered">
                            <thead>
                                <tr className="text-danger">
                                    <th> Book Id </th>
                                    <th> Book Name </th>
                                    <th> Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.booklist.map((bookname , bookid)=>{
                                        return(
                                            <tr key={bookid}>
                                                <td>{bookid}</td>
                                                <td>{bookname}</td>
        <td> <button className="btn btn-danger btn-sm" onClick={this.deleteBook.bind(this , bookid)}>Delete</button> </td>
                                            </tr>
                                        )
                                    })      
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        )
    }
}
export default StateFour;