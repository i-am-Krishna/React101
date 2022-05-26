import React from 'react'



const Filters = ({filterBy,updateFilter,filters}) => {
  return (
<div className="container restaurants">
            <h1>50 restaurants</h1>
            <div className="restaurant-options">
    {Object.entries(filters).map(([key,value])=>(
        <div key={key} onClick={()=>updateFilter(key)} className={`restaurant-option ${filterBy===value ? "underline": null}`}>{value}</div>
    ))}
            </div>
        </div>
  )
}
export default Filters