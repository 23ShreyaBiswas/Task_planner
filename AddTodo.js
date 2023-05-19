
import React, { useState } from 'react';
export const AddTodo = (props) => {
    const [title, settitle]= useState("");
    const [desc, setdesc]= useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc)
        {
            alert("Title or descripton cannot be blank")
        }
        else{
        props.addTodo(title,desc);
        settitle("");
        setdesc("");
        }
    }
    return (
        <div className="container " my-3>
            <h3>
                Add  Tasks to your daily work schedule
            </h3><form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="Title" className="form-label">Work Title</label>
                <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} className="form-control" id="Title" aria-describedby="emailHelp"/>
                    
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Task description</label>
                <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc"/>
            </div>
            
            <button type="submit" className="btn btn-sm btn-success">Add the task</button>
        </form></div>
    )
}
