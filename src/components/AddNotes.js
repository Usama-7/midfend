import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNotes = () => {


    const navigate = useNavigate();


    const [title, setTitle] = useState('')
    const [note, setNote] = useState('')
    const [color, setColor] = useState('')



    const postingData = async (e) => {
        e.preventDefault();
        let result = await fetch('http://localhost:5000/addnote', {
            method: "POST",
            body: JSON.stringify({ title, note, color }),
            headers: {
                "Content-Type": "application/json",
            }
        })
        result = await result.json();
        console.log(result)
        navigate("/notes")

    }



    return (

        <>

<div className="py-5" style={{backgroundColor:"#e9e4db"}}>

           

            <div className="container ps-5 py-3 my-3" style={{ backgroundColor: '#eee', textAlign: "left" }}>
            <h2 className='my-3' style={{textAlign:"center",color:"#554c86"}}><span style={{borderBottom:"5px solid #554c86"}}>Add Note</span></h2> <br/>
                <div className="col-md-7">
                    <div className="well">
                        <form className='my-3' acceptCharset="UTF-8" action method="POST"> Title
                            <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter note Title" className="form-control input-lg mb-3" /> Note
                            <textarea onChange={(e)=>setNote(e.target.value)} className="form-control mb-3" id="text" name="text" placeholder="Enter Your Note" rows={5} defaultValue={""} />
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label">Color</label>
                                        <div className="col-sm-3">
                                            <select onChange={(e)=>setColor(e.target.value)} className="form-control">
                                                <option selected>Select Color</option>
                                                <option value="blue" style={{backgroundColor:"lightblue"}}>Blue</option>
                                                <option value="purple" style={{backgroundColor:"#baa9ba"}}>Purple</option>
                                                <option value="green" style={{backgroundColor:"lightgreen"}}>Green</option>
                                                <option value="yellow" style={{backgroundColor:"yellow"}}>Yellow</option>
                                                <option  value="orange" style={{backgroundColor:"orange"}}>Orangee </option>
                                                <option value="brown" style={{backgroundColor:"#a47e65"}}>Brown</option>
                                            </select>
                                        </div>
                                    </div>
                                </div></div>
                            <h6 className="pull-right" id="count_message" />
                            <button  onClick={postingData}  className="btn  mt-4" style={{backgroundColor:"#554c86",color:"white"}} type="submit">Add New Note</button>
                        </form>
                    </div>
                </div>
            </div>
</div>
        </>
    );
}

export default AddNotes

