import Render, { Component } from 'react';
import axios from 'axios';

class State9Crud extends Component {
    constructor() {
        super();
        this.state = {
            persondetails: [],
            fieldList: {},
            message: "",
            
            userid: '',
            btntxt: 'Save2 Customer'
        }

    }

    getPerson = () => {
        var url = "https://lmsglobe.com/api/crud/list.php";
        axios.get(url).then(response => {
            if (response.data.length > 0) {
                this.setState({
                    persondetails: response.data
                })
            }

        })
    }



    componentDidMount() {
        this.getPerson();

    }

    processInput = (obj) => {
        let fieldList = this.state.fieldList;
        fieldList[obj.target.name] = obj.target.value; //"fname":"minu"
        this.setState({
            fieldList
        })
    }

    
    /* =============USING  axios()============== */
    save2 = (obj) => {
        obj.preventDefault();//to prevent page reload
        if (this.state.userid == "") {
            var jsonData = JSON.stringify(this.state.fieldList);
        } else {
            this.state.fieldList['id'] = this.state.userid;
            // var input = {name:"Ramesh", email:"ramesh@gmail.com", mobile:987456321, id:this.state.userid};
            var jsonData = JSON.stringify(this.state.fieldList);
        }

        var url = "https://lmsglobe.com/api/crud/save.php";
        axios.post(url, jsonData)
            .then(response => {
                this.setState({
                    message: response.data.serverStatus,
                    userid: '',
                    name: '',
                    email: '',
                    mobile: '',
                })
                obj.target.reset();
            })
    }

    deleteRecord = (userid) => {
        this.setState({
            message: "Please wait Record no. " + userid + " in process to delete"
        })
        var input = { "id": userid };
        var jsonDAta = JSON.stringify(input);//array to json [{"id":"123"}]
        var url = "https://lmsglobe.com/api/crud/delete.php";
        axios.post(url, jsonDAta)
            .then(response => {
                this.setState({ message: response.data.serverStatus })
            })
    }

    editRecord = (userindex) => {
        this.state.fieldList['fname'] = this.state.persondetails[userindex].name;
        this.state.fieldList['email'] = this.state.persondetails[userindex].email;
        this.state.fieldList['mobile'] = this.state.persondetails[userindex].mobile;

        this.setState({
            name: this.state.persondetails[userindex].name,
            mobile: this.state.persondetails[userindex].mobile,
            email: this.state.persondetails[userindex].email,
            userid: this.state.persondetails[userindex].id,
            btntxt: "Update Record",
            fieldList: this.state.fieldList,
        })

    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center text-primary mb-3">
                        <h4> Create, Read, Update, Delete using State &  API </h4>
                        <p className="fw-bold text-success">{this.state.message}</p>
                    </div>

                    <div className="col-lg-3">
                        <form onSubmit={this.save2}>
                            <h6 className="text-danger"> Create New </h6>
                            <div className="mb-3">
                                <label>Full Name</label>
                                <input type="text" defaultValue={this.state.name} className="form-control" name="fname" onChange={this.processInput} />

                            </div>
                            <div className="mb-3">
                                <label>E-Mail ID</label>
                                <input type="email" defaultValue={this.state.email} className="form-control" name="email" onChange={this.processInput} />
                            </div>
                            <div className="mb-3">
                                <label>Mobile No</label>
                                <input type="number" defaultValue={this.state.mobile} className="form-control" name="mobile" onChange={this.processInput} />
                            </div>
                            <div className="text-center">
                                
                                <button type="submit" className="btn btn-info btn-sm m-2  text-secondary" >{this.state.btntxt}</button>
                            </div>
                            <div className="text-center">

                            </div>
                        </form>
                    </div>
                    <div className="col-lg-9">
                        <h6 className="text-danger text-center"> Available Data List </h6>
                        <table className="table table-bordered">
                            <thead>
                                <tr className="text-info bg-light">
                                    <th> User ID </th>
                                    <th>Full Name</th>
                                    <th>e-Mail ID</th>
                                    <th>Mobile No</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.persondetails.map((person, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{person.id}</td>
                                                <td>{person.name}</td>
                                                <td>{person.email}</td>
                                                <td>{person.mobile}</td>
                                                <td>
                                                    <button className="btn btn-danger btn-sm" onClick={this.deleteRecord.bind(this, person.id)} >Delete</button>
                                                    <button className="btn btn-secondary btn-sm m-2 " onClick={this.editRecord.bind(this, index)} >Edit</button>
                                                </td>
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

export default State9Crud;