import React from 'react'
import { Card } from './Card'

export const Details = () => {


    const data = [ {
        heading:"Mobile Operating System",
        items:["Android","Blackberry","iPhone","Windows Phone"]
    },
    
     {
        heading:"Mobile Manufacturers",
        items:["Samsung","HTC","Micromax","Apple"]
    }
    ]
    // console.log(data[0].heading)

    // const data = ['a','b','c']

  return (
    <div>{
        data.map((el)=>(

<Card {...el}/>
        ))
        }

{/* <Card data ={data}/> */}
{/* <Card {...Data1}/> */}


    </div>
  )
}
