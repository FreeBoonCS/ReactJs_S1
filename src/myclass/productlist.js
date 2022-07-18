import {Component} from 'react';

class ProductList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="col-lg-4 mt-3">
                <div className="bg-light p-4 rounded">
                    <h5 className="text-center text-primary">{this.props.productName}</h5>
                    <img className="img-fluid rounded" src={`image/${this.props.pic}`}/>

                    <p className="text-center text-danger">{this.props.productPrice}</p>
                </div>
            </div>
        )
    }
}

export default ProductList;