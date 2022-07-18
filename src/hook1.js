import React , {useState} from 'react';

const HookOne =()=>{
   // console.log(useState() );
   //      var    ,  function      = useSatate(default value)
    const[counter , updateCounter] = useState(5);
    const[message , updateMessage] = useState("");

    const plusByFive =()=>{
        //alert("ok");
        updateMessage("Hi, U Clicked on + By 5");
        updateCounter( counter + 5);
    }
    const minusByFive = ()=>{
        updateMessage("Hi, Sorry it click on Minus Button");
        updateCounter( counter - 5);
    }

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>React Js Hooks useState simple Example</h2>
                    <h1 className="text-danger m-3"> {counter} </h1>
                    <button className="m-3" onClick={plusByFive}> Click to  + By 5</button>
                    <button className="m-3" onClick={minusByFive}> Click to  - By 5</button>
                    <p className="text-success m-3"> {message} </p>
                </div>
            </div>
        </div>
    )

}
export default HookOne;