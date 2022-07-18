import React , {useState} from 'react';

const HookTwo = () => {

    const [message , updateMessage] = useState("");
    const[city , updateCity] = useState(["Bangalore" , "Pune" , "Mumbai"]);
    const[newCity, processNewCity] = useState("");

    const save = ()=>{
        updateCity( city=>[...city , newCity]);
        //           a  =    a  +     b;
        updateMessage( newCity + " Added Successfully !");
        processNewCity("");// newcity will be empty
    }

    const deleteCity=(cityindex)=>{
        var name=city[cityindex];
        city.splice(cityindex,1); //a-b
        updateCity(city=>[...city]); // to update the remaining element in state
        //           a = a
        updateMessage( name + " Deleted Successfully !");

    }

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2> React Js Hooks useState Array Operation using ... Operator </h2>

                    <p className="text-success m-3"> {message} </p>
                </div>
                <div className="col-lg-3">
                    <h4>Add New City</h4>
                    <input type="text" className="form-control"
                    value={newCity}
                    onChange={obj =>processNewCity(obj.target.value)}
                    />
                    <button className="btn btn-primary m-3" onClick={save}>Save City</button>
                </div>
                <div className="col-lg-9">
                    <table className="table table-bordered mt-3">
                        <thead>
                            <tr className="text-danger text-center">
                                <th>Sl no</th>
                                <th>City Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                city.map((cityname , index)=>{
                                    return(
                                        <tr key={index}>
                                            <td> {index} </td>
                                            <td> {cityname} </td>
<td> <button  className="btn btn-danger btn-sm" onClick={deleteCity.bind(this, index)}>Delete</button> </td>
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

export default HookTwo;