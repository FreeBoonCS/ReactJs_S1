import React , {Component} from 'react';
import axios from 'axios';

class Crud extends Component{
    constructor(){
        super();
        this.state={
            crudlist:[],
            fieldList:{},
            message:'',
            name:'',
            email:'',
            mobile:'',
            userid:'',
            btntext:'Save Axios'
        }
    }

    getCrud=()=>{
        var url = "https://lmsglobe.com/api/crud/list.php";
        axios.get(url)
        .then(response=>{
            if(response.data.length>0){
                this.setState({
                    crudlist:response.data
                })
            }
        })
    }

    componentDidMount(){
        this.getCrud();
    }



    processInput = (obj) =>{
        let fieldList = this.state.fieldList;
        fieldList[obj.target.name] = obj.target.value;  //fname:"abc"
        this.setState({
            fieldList
        })
    }

    save = () =>{
        //{"fname":"abc","email":"abc@gmail.com","mobile":"6767787878787"} json body
        var jsonData = JSON.stringify(this.state.fieldList); // array to json
        var url = "https://lmsglobe.com/api/crud/save.php";
        /* ================USING FETCH()=========== */
        var postData = {
            method:'POST',
            header:{'Content-Type':'application/json'},
            body:jsonData
        }
        fetch(url , postData)
        .then(response =>response.json())
        .then(result => this.setState({ message:result.serverStatus}));
        /* ================USING axios()=========== */
    }

    save2 = () =>{
        if(this.state.userid==""){
            var jsonData = JSON.stringify(this.state.fieldList); // array to json
        }else{
            this.state.fieldList['id']=this.state.userid;
            //var input = {fname:"Ramesh", email:"ramesh@gmail.com", mobile:88888899, id:this.state.userid};
            var jsonData =  JSON.stringify(this.state.fieldList);
            //console.log(jsonData);
        }
       
        var url = "https://lmsglobe.com/api/crud/save.php";
        axios.post(url , jsonData)
        .then(response=>{ 
            this.setState({ 
                        message:response.data.serverStatus,
                        userid:'',
                        name:'',
                        email:'',
                        mobile:''

                    }) 
        })


    }

    deleteRecord = (userid) =>{
        this.setState({
            message : "Please Wait Record No. "+ userid + " in process to delete !"
        })
        var input = {"id":userid};
        var jsonData = JSON.stringify(input); // array to json [{"id":"123"}]
        var url = "https://lmsglobe.com/api/crud/delete.php";
        axios.post(url , jsonData)
        .then(response=>{ 
            this.setState({ message:response.data.serverStatus}) 
        })
    }

    editRecord = (arrayIndex) =>{
        this.state.fieldList['fname'] = this.state.crudlist[arrayIndex].name;
        this.state.fieldList['email'] = this.state.crudlist[arrayIndex].email;
        this.state.fieldList['mobile'] = this.state.crudlist[arrayIndex].mobile;

        this.setState({
            name : this.state.crudlist[arrayIndex].name,
            mobile:this.state.crudlist[arrayIndex].mobile,
            email:this.state.crudlist[arrayIndex].email,
            userid:this.state.crudlist[arrayIndex].id,
            btntext:'Update Record',
            fieldList:this.state.fieldList
        })
    }

    render(){
        return(
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-12 text-center text-primary mb-3">
                        <h4> Create , Read, Update , Delete Using State & Api </h4>
                        <p className="text-danger"> {this.state.message} </p>
                    </div>

                    <div className="col-lg-3">
                        <h6 className="text-danger"> Create New </h6>
                        <div className="mb-3">
                            <label> Full Name </label>
                            <input type="text" className="form-control" defaultValue={this.state.name}
                             name="fname" onChange={this.processInput}/>
                        </div>
                        <div className="mb-3">
                            <label> e-Mail Id </label>
                            <input type="text" className="form-control" defaultValue={this.state.email}
                            name="email" onChange={this.processInput}/>
                        </div>
                        <div className="mb-3">
                            <label> Mobile No </label>
                            <input type="text" className="form-control" defaultValue={this.state.mobile}
                            name="mobile" onChange={this.processInput}/>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary m-1" onClick={this.save}> Save - Fetch </button>
                            <button className="btn btn-success m-1" onClick={this.save2}> {this.state.btntext} </button>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <h6 className="text-success text-center"> Available Data List </h6>
                        <table className="table table-bordered">
                            <thead>
                                <tr className="text-danger bg-light">
                                    <th> User Id </th>
                                    <th> Full Name </th> 
                                    <th> e-Mail Id </th>
                                    <th> Mobile No </th>
                                    <th> Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.crudlist.map((crudinfo,index)=>{
                                        return(
                                                <tr key={index}>
                                                    <td>{crudinfo.id}</td>
                                                    <td>{crudinfo.name}</td>
                                                    <td>{crudinfo.email}</td>
                                                    <td>{crudinfo.mobile}</td>
                                                    <td> 
    <button onClick={this.deleteRecord.bind(this , crudinfo.id)} className="btn btn-danger btn-sm m-1">Delete</button>
    <button onClick={this.editRecord.bind(this , index)} className="btn btn-warning btn-sm m-1">Edit</button>
    
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
export default Crud;