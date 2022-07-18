import React, { Component } from 'react';
import axios from 'axios';

class StateEight extends Component {
    constructor() {
        super();
        this.state = {
            serviceList: [],
            eduList: []
        }
    }

    getService = () => {
        var url = "http://firstenquiry.com/api/react/live/allservice.php";
        axios.get(url)
            .then(response => {
                this.setState({
                    serviceList: response.data
                })
            })
    }

    getEducation = () => {
        var url = "http://firstenquiry.com/api/react/live/alledu.php";
        axios.get(url)
            .then(response => {
                this.setState({
                    eduList: response.data
                })
            })
    }

    componentDidMount() {
        this.getService();
        this.getEducation();
    }


    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3> fetch API Data using axios.get() Example </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <p> Available Services -: {this.state.serviceList.length} </p>
                    </div>
                    {
                        this.state.serviceList.map((service , index)=>{
                            return(
                                <div className="col-lg-4 mb-2" key={index}>
                                    <p className="p-2 border bg-white text-primary"> {service.name} </p>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="row mt-4">
                    <div className="col-lg-12 text-center">
                        <p> Available Courses -: {this.state.eduList.length} </p>
                    </div>
                    {
                        this.state.eduList.map((edu , index)=>{
                            return(
                                <div className="col-lg-4 mb-2" key={index}>
                                    <p className="p-2 border bg-white text-danger"> {edu.course_name} </p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        )
    }
}

export default StateEight;