import { Component } from "react";

class Gallery extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-lg-12 text-center text-success mb-3"><h2>My Gallery</h2></div>
                <div className="col-lg-3">
                    <img src="image/1.jpg" className="img-fluid"></img>
                </div>
                <div className="col-lg-3">
                    <img src="image/2.jpg" className="img-fluid"></img>
                </div>
                <div className="col-lg-3">
                    <img src="image/3.jpg" className="img-fluid"></img>
                </div>
                <div className="col-lg-3">
                    <img src="image/4.jpg" className="img-fluid"></img>
                </div>
            </div>
        )
    }
}

export default Gallery;