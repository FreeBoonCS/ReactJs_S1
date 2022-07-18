import React, {useState , useEffect} from 'react';
import { useParams ,Link } from 'react-router-dom';

const HookFive = () =>{
    const{id , type} = useParams();
    const[myuser , updateUser] = useState([{name:"loading", edu:"loading", age:"loading", mobile:"loading", pic:""}]);
    
    const getUser = () =>{
        fetch("user.json")
        .then(response =>response.json())
        .then(userList =>updateUser(userList))
    }

    useEffect(()=>{
        getUser();
    },[true])

    return(
        <div className="container mt-3">
          <div className="row">
                <div className="col-lg-12 text-center">
                    <h2> React Js useParams Hooks Example </h2> 
                 <Link className="btn btn-warning m-3" to={`/${id}/Premium/use-effect`}> Premium User </Link>
                 <Link className="btn btn-warning m-3" to={`/${id}/Free/use-effect`}> Free User </Link>
                   {
                       myuser.map((userinfo , index)=>{
                           return(
                               <Link 
                                    key={index} 
                                    className="btn btn-primary m-3" 
                                    to={`/${index}/${type}/use-effect`}>
                                    {userinfo.name}
                                </Link>
                           )
                       })
                   }
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-2"></div>
                <div className="col-lg-3"> <img src={`image/${myuser[id].pic}`} className="img-fluid rounded-circle"/> </div>
                <div className="col-lg-5">
                    <div className="bg-light p-3 rounded">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th> User Type </th>
                                    <td> {type} </td>
                                </tr>
                                <tr>
                                    <th> Name </th>
                                    <td> {myuser[id].name} </td>
                                </tr>
                                <tr>
                                    <th> Age </th>
                                    <td> {myuser[id].age} </td>
                                </tr>
                                <tr>
                                    <th> Mobile </th>
                                    <td> {myuser[id].mobile} </td>
                                </tr>
                                <tr>
                                    <th> Education </th>
                                    <td> {myuser[id].edu} </td>
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

export default HookFive;
