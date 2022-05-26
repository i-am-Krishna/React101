import React, { useState } from 'react'
import './todos.css'
export const AddTodo = ({elem,onDelete,onEdit}) => {

  const [edit,setEdit] = useState(false)
  const [value,setValue] = useState(elem.title)


  const handleDelete= async ()=>{
     await fetch(`http://localhost:8080/todos/${elem.id}`,{
          method:"DELETE",
          headers:{ "content-type" : "application/json" },
     })
        onDelete(elem.id)
      
  }

  const handleEdit = async ()=>{
    let res=await fetch(`http://localhost:8080/todos/${elem.id}`,{
      method:"PATCH",
      headers:{"content-type":"application-json"},
      body:JSON.stringify({
        title:value,
        status:false 
      })
    });
    let data = await res.json()
    console.log(data)
    onEdit(data)
  }
  


  
  return (
    <div>

      {edit ? <div>
        <input type="text" value={value}  onChange={(e)=>setValue(e.target.value)}/>
        <button onClick={()=>{ if(value){handleEdit(value);setEdit(false)}}}>Update</button>
      </div> : <ul key={elem.id}><li>{elem.title}</li></ul>}
      <button onClick={()=> setEdit(!edit)}>{!edit ? "Edit":"Back"}</button>

      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
