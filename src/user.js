import React from 'react';

const userlist = [
    {name:"Divya", age:"30 Year", edu:"MCA"},
    {name:"Ashu", age:"32 Year", edu:"CA"},
    {name:"Minu", age:"33 Year", edu:"BCA"},
    {name:"Navya", age:"34 Year", edu:"MA"},
    {name:"Ramya", age:"34 Year", edu:"MBA"}
]

function MyUser(){
    return(
        <div>
            <h1 align="center">{userlist.length} - Total Users</h1>
            <table align="center" cellPadding="15" width="60%">
                <thead>
                    <tr bgcolor="pink">
                        <th>Full Name</th>
                        <th>Age</th>
                        <th>Education</th>
                </tr>
                </thead>
                <tbody>
                    {
                        userlist.map( (myuser, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index}-{myuser.name}</td>
                                    <td>{myuser.age}</td>
                                    <td>{myuser.edu}</td>
                                </tr>                               
                            )
                        })
                    }                  
                    
                </tbody>

            </table>
           
        </div>
    )
}

export default MyUser;