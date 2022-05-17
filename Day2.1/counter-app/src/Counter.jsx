import React, { useState } from 'react'

export const Counter = () => {
    const [count,setCount] = useState(0)

  return (
    <div style={{ width:"30%",margin:"50px auto",padding:"20px" ,borderRadius:"50px",boxShadow:"5px 5px 5px 5px gray"}}>

        <h1 style={{color:count%2===0 ? "green":"red"}}>Counter: {count}</h1>
        <button onClick={()=> setCount(count + 1)}>Increment</button>
        <button onClick={()=> setCount(count - 1)}>Decrement</button>
        <button onClick={()=> setCount(count*2)}>Double</button>
    </div>
  )
}
