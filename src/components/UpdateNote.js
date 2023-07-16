import React, { useEffect, useState } from "react";
import { json, useNavigate, useParams } from "react-router-dom";




const UpdateNote = () => {


  const navigate = useNavigate();
  const params = useParams();

  const[title, setTitle] = useState('')
  const[note, setNote] = useState('')
  
  useEffect(()=>{
    getUserData();
  },[])

// Getting Notes on the basis of Id for editing purpose as pre-filled form data
const getUserData = async() => {    
    console.log(params)
    let result = await fetch(`http://localhost:5000/singleNote/${params.id}`);
    result = await result.json();    
    setTitle(result.title)    
    setNote(result.note)    
        
  }



  // Updating / Editing Data on the basis of dynamic id
  const updatingData = async(e) =>{    
    e.preventDefault();
    let result = await fetch(`http://localhost:5000/noteDetail/${params.id}`,{
      method: 'PUT',
      body: JSON.stringify({title, note}),
      headers:{
        'Content-Type': "Application/json"
      }
    })
    result = await result.json()
    if(result){      
      navigate('/notes')
    }
  }

    return ( 
        <>
        <div className="py-5" style={{backgroundColor:"#e9e4db"}}>
       

<div className="container ps-5 py-3 my-3" style={{ backgroundColor: '#eee', textAlign: "left" }}>
<h2 className='my-3' style={{textAlign:"center",color:"#554c86"}}><span style={{borderBottom:"5px solid #554c86"}}>Update Note</span></h2><br/>
    <div className="col-md-7">
        <div className="well">
            <form className='my-3' acceptCharset="UTF-8" action method="POST"> Title
                <input  value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter your email address" className="form-control input-lg mb-3" /> Note
                <textarea  value={note} onChange={(e)=>setNote(e.target.value)} className="form-control mb-3" id="text" name="text" placeholder="Type in your message" rows={5} defaultValue={""} />
                <button onClick={updatingData} to="/addnode"   className="btn mt-2" style={{backgroundColor:"#554c86",color:"white"}} type="submit">Update Note</button>
            </form>
        </div>
    </div>
</div>
</div>
        </>
     );
}
 
export default UpdateNote;