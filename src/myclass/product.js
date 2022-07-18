import { Component } from "react";
import ProductList from "./productlist";

class ManageProps extends Component{
    constructor(){
        super();
        this.state = {
            allProduct : [
                {name:"Mobile", price:300, photo:"1.jpg"},
                {name:"Lpatop", price:30000, photo:"2.jpg"},
                {name:"Desktop", price:20000, photo:"3.jpg"},
                {name:"Milk", price:40, photo:"4.jpg"},
                {name:"Mouse", price:400, photo:"5.jpg"},
                {name:"Keyboard", price:800, photo:"6.jpg"},
            ]
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-g-12 text-center text-success">
                        <h2>ReactJS, Props, Component Reuse, Component Interaction</h2>
                    </div>
                </div>

                <div className="row">
                    <ProductList productName="Mango" productPrice="500" pic="1.jpg" />
                    <ProductList productName="Orange" productPrice="300" pic="2.jpg"/>
                </div>

                <div className="row">
                    {
                    this.state.allProduct.map((productInfo, index)=>{
                        return(
                            <ProductList key={index}
                            productName={productInfo.name}
                            productPrice={productInfo.price} 
                            pic={productInfo.photo} />
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

export default ManageProps;