import React, { useState } from 'react'

const Book = () => {
    const [bn,setBn]=useState('');
    const [an,setAn]=useState('');
    const [pb,setPb]=useState('');
    const [error,setError]=useState(false)
    const readbookname = (event) => {
        event.preventDefault(); //to not to refresh
         setBn(event.target.value);
         console.log(event.target.value);
     }
  
     const readauthorname = (event) => {
        event.preventDefault(); //to not to refresh
         setAn(event.target.value);
         console.log(event.target.value);
     }

     const readpublishername = (event) => {
        event.preventDefault(); //to not to refresh
         setPb(event.target.value);
         console.log(event.target.value);
     }
    
     const checkfilldata =(event) =>{
        event.preventDefault(); //to not to refresh
        if(an.trim()===''||bn.trim()===''||pb.trim()==='')
        {
          setError(true);

          return;
        }


  }
    return (
    <div>
      <form>
        Book Name:<input type="text" onChange={readbookname}/><br/>
        Author Name:<input type="text" onChange={readauthorname}/><br/>
        Publisher Name:<input type="text" onChange={readpublishername}/><br/>
     
        <button type="submit" onClick={checkfilldata}>Login</button>

  {error && 'Error occured'}


      </form>
    </div>
  )
}

export default Book
