import React,{Component} from 'react';

class StateSeven extends Component{
    constructor(){
        
        super();
        this.state={
            citylist:[],
            carlist:[]         

        }
    }
    getCity = () =>{
        fetch("http://www.firstenquiry.com/api/react/live/allcity.php")
        .then(response =>response.json())
        .then(allCity => this.setState({
            citylist:allCity
        }))
    }
    getCar = () =>{
        fetch("http://www.firstenquiry.com/api/car.php")
        .then(response =>response.json())
        .then(allCar => this.setState({
            carlist:allCar
        }))
    }

    componentDidMount(){
        this.getCity();
        this.getCar();
    }

    render(){
        return(
            <div className="container">
                 <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3 className="text-info"> State Management Using API Data </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <h4 className="text-info"> Available City {this.state.citylist.length} </h4>
                        <ul className="list-group">
                        {
                            this.state.citylist.map((cityinfo,index)=>{
                                return(
                                    <li key={index} className="list-group-item">{cityinfo.name}</li>
                                )
                            })
                        }
                        </ul>
                    </div>

                    <div className="col-lg-9">
                        <h4 className="text-success text-center"> Available Cars {this.state.carlist.length} </h4>
                     
                        {
                            this.state.carlist.map((carinfo,index)=>{
                                return(
                                    <div className="row border-bottom pb-3 pt-3">
                                    <div className="col-lg-4">
                                    <h6> {carinfo.model} </h6>
                                            <p> Price: {carinfo.price} </p>
                                            <p> Fuel: {carinfo.fuelType} </p>
                                            <p> Mileage: {carinfo.mileage} </p>
                                            <p> Category: {carinfo.category.vechicleType} </p>

                                    </div>
                                    <div className="col-lg-3">
                                    <h6>Car Photo</h6>
    <img height="150" width="100%" src={`http://firstenquiry.com/api/img/${carinfo.image}`}/>
                                    </div>
                                    <div className="col-lg-5">
                                    <h6>Service History</h6>
                                    <table className="table table-stripped table-sm">
                                        <thead>
                                            <tr className="text-danger">
                                                <th>Service Date</th>
                                                <th>Service Cost</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                carinfo.serviceHistory.map((service,sindex)=>{
                                                    return(
                                                    <tr key={sindex}>
                                                        <td>{service.serviceDate}</td>
                                                        <td>{service.serviceCost}</td>
                                                    </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    </div>
                                    </div>
                                )
                            })
                        }
                   
                    </div>

                </div>

             


            </div>
        )
    }


}

export default StateSeven;