import React from 'react';
const booklist=["Java", "Node Js", "Python", "CSS", "Jquery", "Mysql", "Bootstrap"];

const MyBook = () =>{
    return(
        <div className="container">
            <h1 className="text-success"> {booklist.length}- Books are in List</h1>
            <p>{booklist[3]}</p>
            <p>{booklist[booklist.length-1]}</p>
            <hr/>
            <h3>Using Map()</h3>
            {
                booklist.map(bookname=>{
                    return(
                        <p>{bookname}</p>
                    )

                })
            }
        </div>

    )

}
export default MyBook;