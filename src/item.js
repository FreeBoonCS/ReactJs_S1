import React from 'react';

const itemlist =["Apple", "Mobile", "Laptop", "Mango", "Computer","Mouse"];

const MyItem = () =>{
    return(
        <div className="container">
            <h1>The Available items are: {itemlist.length}</h1>
            {
                itemlist.map((itemName, itemIndex)=>{

                    return(
                        <p key ={itemIndex}> {itemIndex} -- {itemName}</p>
                    )
                })
            }
        </div>

    )

}
export default MyItem;