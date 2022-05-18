

import React from "react"
import Card from "./Card"

// ]
import {data} from './data.js'


function EmployeeD (){
    return (
        <div>
        {data.map((elem)=>(
            <Card  key={elem.id} {...elem}/>
        ))}
        </div>
    )
}


export default EmployeeD
