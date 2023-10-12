import React, { useState } from 'react'

const Productview = () => {
    const[viewd,setViewdata]=useState([]);
    const readproductdata=(event) =>{


    fetch("https://product-887cb-default-rtdb.firebaseio.com/Product.json").
    then((Response)=>{
        return Response.json()
    }).then((data)=>{
        console.log(data);
        console.log(snapshotToArray(data));
        setViewdata(snapshotToArray(data));
        
    })

        
}
function snapshotToArray(snapshot){
    const array =[];
    Object.keys(snapshot).forEach((key)=>{
        array.push(snapshot[key]);
    })
    return array;
}
  return (
    <div>
       <button type='submit' onClick={readproductdata}>RELOAD</button>
      <br></br>
      <table border="1">
        <tr><th>Product ID</th>
        <th>Product Name</th>
        <th>Product category</th>
        <th>Product MFD</th>
        <th>Product EXP</th>
        </tr>
{viewd.map((value,index)=>{
    return(
        <tr key={index}>
            <td>{value.productid}</td>
            <td>{value.productname}</td>
            <td>{value.productcategory}</td>
            <td>{value.productmfd}</td>
            <td>{value.productexp}</td>

        </tr>
    )
})}
      </table>
    </div>
  )
}

export default Productview
