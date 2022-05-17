import React, { useState } from 'react'

export const Todo = () => {
    const [value,setValue] = useState("")
    const [todo,setTodo] = useState([])



    const handleClick =()=>{
        setTodo([...todo,value]);
        setValue("")
    }
    
    const handleChange =(e)=>{
        console.log(e.target.value)
        setValue(e.target.value)
    }




  return (
    <div style={{backgroundColor:"lightGray",width:"30%",margin:"auto",padding:"40px",marginTop:"100px",borderRadius:"10px"}}>
        
    {todo.map((elem)=>{



return <div style={{display:"flex",justifyContent:'space-between',fontSize:"20px",color:"black",width:"70%",backgroundColor:"white",margin:"auto",padding:"10px",borderRadius:"10px",marginBottom:"15px"}}><div>{elem}</div><div style={{backgroundColor:"lightGray",border:"5px solid lightGreen",textAlign:"right",marginRight:"8px",borderRadius:"50%",width:"20px",height:"20px"}}></div> </div>

})}
        

        <input type="text" value={value} onChange={handleChange} placeholder='write something'  style={{padding:"10px",borderRadius:"10px",fontSize:"20px",margin:"10px",color:"black",border:"none"}}/>
        <button onClick={handleClick} style={{padding:"10px 15px",borderRadius:"10px",fontSize:"20px",fontWeight:"700",margin:"10px",color:"black",border:"none"}}>+</button>       



    </div>
  )
}
