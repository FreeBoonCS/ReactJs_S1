import React , {useState} from 'react';
import {useParams , Link} from 'react-router-dom';
var user = [
    {name:"Ramesh", edu:"MCA", age:"30 years", mobile:888888888, pic:"1.jpg"},
    {name:"Ganesh", edu:"CA", age:"40 years", mobile:767676767, pic:"2.jpg"},
    {name:"Mohit", edu:"MA", age:"50 years", mobile:565656565, pic:"3.jpg"},
    {name:"Ravi", edu:"BA", age:"20 years", mobile:898989898, pic:"4.jpg"},
    {name:"Krish", edu:"BCA", age:"31 years", mobile:787878787, pic:"5.jpg"},
    {name:"Ramu", edu:"IA", age:"40 years", mobile:4545454545, pic:"6.jpg"},
    {name:"Sidhu", edu:"CA", age:"10 years", mobile:8989898989, pic:"3.jpg"}
];

const HookFour=()=>{
    const{id , type} = useParams();
    const[myuser, updateUser] = useState(user);
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>React Js useParams Hooks Example</h2>
     <Link className="btn btn-warning m-3" to={`/${id}/Premium/myhook`}>Premium User</Link>
     <Link className="btn btn-warning m-3" to={`/${id}/Free/myhook`}>Free User</Link>


                    {
                        myuser.map((userinfo, index)=>{
                            return(
                                <Link 
                                    key={index} 
                                    className="btn btn-primary m-3" 
                                    to={`/${index}/${type}/myhook`}>
                                    {userinfo.name}
                                </Link>

                            )
                        })
                    }

                    {/*<Link to="/1/myhook" className="btn btn-danger m-2">User 1</Link>
                    <Link to="/2/myhook" className="btn btn-danger m-2">User 2</Link>
                    <Link to="/3/myhook" className="btn btn-danger m-2">User 3</Link>
                    <Link to="/4/myhook" className="btn btn-danger m-2">User 4</Link>
                    <Link to="/5/myhook" className="btn btn-danger m-2">User 5</Link>
                    <Link to="/6/myhook" className="btn btn-danger m-2">User 6</Link>*/}
                    <h1>Your url Value is : {id} </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-3">
                        <img src={`image/${myuser[id].pic}`} className="img-fluid rounded-circle"/>
                </div>    
                <div className="col-lg-5">
                    <div className="bg-light p-3 rounded">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>User Type</th>
                                    <td>{type}</td>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <td>{myuser[id].name}</td>
                                </tr>
                                <tr>
                                    <th>Education</th>
                                    <td>{myuser[id].edu}</td>
                                </tr>
                                <tr>
                                    <th>Age</th>
                                    <td>{myuser[id].age}</td>
                                </tr>
                                <tr>
                                    <th>Mobile</th>
                                    <td>{myuser[id].mobile}</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>  
                <div className="col-lg-2"></div>  
            </div>
        </div>
    )
}
export default HookFour;