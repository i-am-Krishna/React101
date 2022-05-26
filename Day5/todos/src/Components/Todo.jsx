import React ,{useState} from 'react'
import {v4 as uuid} from 'uuid'

// export const Todo = ({addTodo}) => {

//   const [value,setValue] = useState("")
    

//  const handleChange=(e)=>{
//    setValue(e.target.value)
//  }

// // const handleClick=()=>{
// // addTodo(value);
// // setValue("")
// // }


// const handleClick=()=>{
//   fetch('http://localhost:8080/todos',{
//     method:"POST",
//    headers:{
//      "content-type":"application/json"
//    },
//    body: JSON.stringify({
//      id:uuid(),
//      title:value,
//      status:false
//    })
//   })
//   .then((r)=>r.json())
//   .then((d)=>{
//     ([...addTodo,d])
//     setValue("")
//   })
//  }



// // const handleClick = async (value)=>{
// //   let response = await fetch("http://localhost:8080/todos",{
// //       method:"POST",
// //       headers:{ "content-type" : "application/json" },
// //       body: JSON.stringify({
// //         id:uuid(),
// //           value,
// //           status:false
// //       })
// //   })
// //   let data = await response.json()
// //   console.log(data)
// //   addTodo(data)
  
// // }


//   return (

//         <div >
//  <div>
//    <input type="text" value={value} onChange={handleChange} />
//    <button disabled={!value} className='addBtn' onClick={handleClick}>Add</button>

//  </div>
  

//         </div>
            
//   )
// }









// =========================================








export const Todo = ({addTodo})=>{
    const [newTodo,setnewTodo]= useState("")

    
    const handleClick = async (value)=>{
        let response = await fetch("http://localhost:8080/todos/",{
            method:"POST",
            headers:{ "content-type" : "application/json" },
            body: JSON.stringify({
              id:uuid(),
                title:value,
                status:false,
            })
        })
        let data = await response.json()
        console.log(data)
        addTodo(data)
        setnewTodo("")
        
    }

    // console.log(newTodo)
    return (
        <div>
        <input type={"text"} value={newTodo} onChange={(e)=>setnewTodo(e.target.value)}/>
        <br></br>
        <button disabled={!newTodo} onClick={()=>{
            if(newTodo){ handleClick(newTodo);}
        }}>Add</button>
        </div>
    )
}


// db-1650048536596.json