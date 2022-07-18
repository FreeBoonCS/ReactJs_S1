import React from 'react';

const productlist =[
    {category:"Book", product:["java","nodejs","php","css","html","Angular"]},
    {category:"Laptop", product:["Dell","HP","Lenovo","Wipro"]},
    {category:"Mobile", product:["MI","Nokia","Apple","Samsung"]},
    {category:"Jobs", product:["Java Developer",".net Developer","Agular Developer"]}
]

const MyProduct = () =>{
    return(
        <div className="container">
            <h1>Available Product -: {productlist.length}</h1>
            {
                productlist.map(( item, proIndex)=>{
                    return(
                        <fieldset key={proIndex}>
                            <legend>{item.category}</legend>
                            {
                                item.product.map((proName, index)=>{
                                    return(
                                        <p key={index}>{proName}</p>
                                    )
                                })
                            }
                        </fieldset>
                    )

                    
                })
            }
            
        </div>
    )
}
export default MyProduct;