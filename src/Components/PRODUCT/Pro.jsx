import React, { useState } from 'react'

const Pro = () => {
    const [bn,setBn]=useState('');
    const [an,setAn]=useState('');
    const [pb,setPb]=useState('');
    const [pm,setPm]=useState('');
    const [pe,setPe]=useState('');

    
    const [error,setError]=useState(false)
    const readproductid = (event) => {
        event.preventDefault(); //to not to refresh
         setBn(event.target.value);
         console.log(event.target.value);
     }
  
     const readproductname = (event) => {
        event.preventDefault(); //to not to refresh
         setAn(event.target.value);
         console.log(event.target.value);
     }

     
     const readproductcategory = (event) => {
        event.preventDefault(); //to not to refresh
         setPb(event.target.value);
         console.log(event.target.value);
     }
     const readproductmfd = (event) => {
        event.preventDefault(); //to not to refresh
         setPm(event.target.value);
         console.log(event.target.value);
     }
     const readproductexp = (event) => {
        event.preventDefault(); //to not to refresh
         setPe(event.target.value);
         console.log(event.target.value);
     }
    
    
     const checkfilldata =(event) =>{
        event.preventDefault(); //to not to refresh
        if(an.trim()===''||bn.trim()===''||pb.trim()==='' ||pm.trim()==='' ||pe.trim()==='')
        {
          setError(true);

          return;
        }
        const myobj={
        productid:bn,
        productname:an,
        productcategory:pb,
        productmfd:pm,
        productexp:pe

        }
      fetch("https://product-887cb-default-rtdb.firebaseio.com/Product.json",
      {
method:"POST",
body:JSON.stringify(myobj),
headers:{"Content-Type":"application/json",
      }


      }
      );
      alert("Record saved") 

  }
  return (
    <div>
       <form>
        Product ID:<input type="text" onChange={readproductid}/><br/>
        Product Name:<input type="text" onChange={readproductname}/><br/>
        Product category:<input type="text" onChange={readproductcategory}/><br/>
        Product MFD:<input type="text" onChange={readproductmfd}/><br/>
        Product EXP:<input type="text" onChange={readproductexp}/><br/>
     
        <button type="submit" onClick={checkfilldata}>CONFIRM</button>

  {error && 'Error occured'}


      </form>
    </div>
  )
}

export default Pro
