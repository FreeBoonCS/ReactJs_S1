import React , {Component} from 'react';

class Contact extends Component{

    render(){
        return(
            <div className="row">
                <div className="col-lg-12 text-center text-success mb-3">
                    <h2> My Contact Details </h2>
                </div>
                <div className="col-lg-3"> <p>Email - siyaram@gmail.com</p> </div>
                <div className="col-lg-3"> <p>Mobile No - 7878787878</p> </div>
                <div className="col-lg-3"> <p>City : Bangalore</p></div>
                <div className="col-lg-3"> <p>Address:  Marathahalli </p></div>
            </div>
        )
    }
}

export default Contact;