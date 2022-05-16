import React from 'react'
import './Card.css'

export const Card = ({heading,items}) => {


// console.log(props.items)
// console.log(props.heading)
 

  return (
    <div style={{margin:"left",textAlign:"left",paddingLeft:"50px"}}>
        {/* {data.map((elem)=>{
          return <> <h1>{elem.heading}</h1>
          <div>
                <ul>{elem.items.map((el)=>{
                   return <li>{el}</li>
               })}</ul>
        </div>
        </>
        })}
         */}

         <h1>{heading}</h1>
         <div>
                <ul>{items.map((el)=>{
                   return <li className='cards'>{el}</li>
               })}</ul>
        </div>
    </div>
  )
}
