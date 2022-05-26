import React from 'react'
const Restaurants = (props) => {
  return (
    <div className="container divider">
            <div className="cards">
            {props.restaurant.map((data)=>(
                   <div key={data.id} className='card'>
                         <img width="254" height="160px" src={data.image} />
                            <div className="restaurant-details">
        <div className="restaurant-title">{data.name}</div>
            <div className="restaurant-subtitle">{data.category.join(", ")}</div>
                   </div>

                <div className='restaurant-info'>
                    <div className='restaurant-ratings'>
                        <i className='material-icons star-icon'>star</i> {data.rating}
                    </div>
                    <div className='restaurant-delivery-timings'>{data.deliveryTimings}</div>
                    <div className='restaurant-cost-for-two'>{data.costForTwo}</div>
                </div>

                <div className='offer-banner'>
                    <span className='material-icons'> local_offer </span>
                    <span className='offer-text'>{data.offer.join(" | ")}</span>
                </div>

                   </div>
               ))}
            </div>
   </div>
  )
}
export default Restaurants