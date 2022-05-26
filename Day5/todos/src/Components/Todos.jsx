//  import {v4 as uuid} from 'uuid'
 import React, { useState ,useEffect} from 'react'
import { AddTodo } from './AddTodo'
import './todos.css'
 import {Todo} from './Todo'
 
 export const Todos = () => {
   const [todos,setTodos] = useState([])

    const addTodo =(newTodo)=>{
      setTodos([...todos,newTodo])
  // setTodos([...todos,newTodo])  
  }

    useEffect(()=>{
      fetch('http://localhost:8080/todos')
      .then((r)=> r.json())
      .then((d)=> setTodos(d))
      
    },[])


    const onDelete =(id)=>{
const newTodos = todos.filter((todo)=> todo.id !== id);
setTodos(newTodos)
    }

    const onEdit =(newTodo)=>{
const editTodos = todos.map((todo)=>{
  if(todo.id === newTodo.id) 
  {
    return newTodo } 
  else return todo
})
    }


   return (
     <div>

       <Todo addTodo={addTodo}  />


       {todos.map((elem)=>(
    
  <AddTodo key={elem.id} onEdit={onEdit} onDelete={onDelete} elem={elem} />
    ))}
        

     </div>
   )
 }
 