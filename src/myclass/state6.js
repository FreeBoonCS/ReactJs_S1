import React,{Component} from 'react';

class StateSix extends Component{
    constructor(){
        
        super();
        this.state={
            citylist:[],
            booklist:[],
            productlist:[]

        }
    }
    getBook = ()=>{
        fetch("book.json")
        .then(response => response.json())
        //.then(bookData => alert(bookData.length))
        .then(bookData => this.setState({
            booklist: bookData
        }))
    }
    getProduct = ()=>{
        fetch("product.json")
        .then(response => response.json())
        //.then(bookData => alert(bookData.length))
        .then(productData => this.setState({
            productlist: productData
        }))
    }
    getCity =()=>{
        fetch("city.json")
        .then(response => response.json())
        .then(allcity => this.setState({
            citylist: allcity
        }))
    }
    componentDidMount(){
        this.getProduct();
        this.getCity();
    }

    render(){
        
        return(
            <div className="container">
                <div className="row mt-3">
                    <div className="col-lg-4">
                        <h3>City List : {this.state.citylist.length}</h3>

                        <div className="bg-secondary p-3 mt-4">
                            {
                                this.state.citylist.map((cityname , index)=>{
                                    return(
                                        <p className="text-white" key={index}> 
                                            {cityname} 
                                        </p>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h3>book List : {this.state.booklist.length}</h3>
                        <button className="btn btn-primary mt-2" onClick={this.getBook}>Click to call Fetch API</button>
                        <div className="bg-light p-3 mt-3">
                            {
                                this.state.booklist.map((bookname , index)=>{
                                    return(
                                        <p key={index}> {bookname} </p>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h3>Product List : {this.state.productlist.length}</h3>
                        
                        <div className="bg-info p-3 mt-4">
                            {
                                this.state.productlist.map((product , index)=>{
                                    return(
                                        <p className="text-white" key={index}> 
                                            {product.name} ------{product.price}
                                        </p>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default StateSix;