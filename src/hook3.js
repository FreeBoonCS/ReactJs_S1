import React , {useState} from 'react';
const HookThree = () =>{
    const[msg , updateMsg] = useState("");
    const[btntxt , updateBtntext] = useState("Save Book");
    const[btncolor , updateColor] = useState("btn btn-success");
    const[booklist , updateBook] = useState([{name:"Java", price:200, qty:5}]);
    
    const deletebook = (bookindex) =>{
        var name = booklist[bookindex].name;
        booklist.splice(bookindex , 1);  
        updateBook(booklist =>[...booklist]);
        updateMsg(name + " Deleted Successfully");
    }

    const[newname , processName] = useState("");
    const[newprice , processPrice] = useState("");
    const[newqty , processQty] = useState("");

    const save = () =>{
        var msgtext = "";
        if(bookid !=  -1){

            // to update the details of a given index element
            booklist[bookid].name = newname;
            booklist[bookid].price = newprice;
            booklist[bookid].qty = newqty;
            updateBook(booklist =>[...booklist]);
            
            updateBookid(-1);  // bookid set to default as -1 
            updateBtntext("Save Book");  // to change button text 
            updateColor("btn btn-success");  // to change button bg color 
            msgtext = " Updated Successfully"; // to display message
        }else{
            var newBook = {name:newname, price:newprice, qty:newqty};
            updateBook(booklist =>[...booklist , newBook]);
            msgtext = " Added Successfully";    
        }
        
        updateMsg(newname + msgtext);
        processName("");
        processPrice("");
        processQty("");
    }

    const[bookid , updateBookid] = useState(-1);
    const editBook = (bookindex) =>{
        processName(booklist[bookindex].name);
        processPrice(booklist[bookindex].price);
        processQty(booklist[bookindex].qty);
        updateBookid(bookindex);
        updateBtntext("Update Book info");
        updateColor("btn btn-primary");
    }

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2> Multi Dimensional Array in Hooks using useState() </h2>
                </div>
            </div>
            <div className="row p-3 bg-light rounded">
                <div className="col-lg-3">
                    <input type="text" className="form-control" value={newname}
                    onChange={obj=>processName(obj.target.value)}/> 
                    Enter Book Name
                </div>
                <div className="col-lg-3">
                    <input type="text" className="form-control" value={newprice}
                    onChange={obj=>processPrice(obj.target.value)}/> 
                    Enter Book Price
                </div>
                <div className="col-lg-3">
                    <input type="text" className="form-control" value={newqty}
                    onChange={obj=>processQty(obj.target.value)}/> 
                    Enter Book Quantity
                </div>
                <div className="col-lg-3">
                    <button className={btncolor} onClick={save}>{btntxt}</button>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <p className="p-2 text-center text-primary">{msg}</p>
                    <table className="table table-bordered">
                        <thead>
                            <tr className="text-danger">
                                <th> Sl No</th>
                                <th> Name </th>
                                <th> Price </th>
                                <th> Quantity </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                booklist.map((bookinfo ,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{bookinfo.name}</td>
                                            <td>{bookinfo.price}</td>
                                            <td>{bookinfo.qty}</td>
                                            <td>
            <button className="btn btn-warning m-1 btn-sm" onClick={editBook.bind(this, index)}>Edit</button>                                  
            <button className="btn btn-danger m-1 btn-sm" onClick={deletebook.bind(this, index)}>Delete</button>
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

export default HookThree;