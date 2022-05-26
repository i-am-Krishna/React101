import React from 'react' 

const Offers = (props) => {
  return (
    <section className="offers">
        <div className="container">
          {props.offer.map((images,index)=>  <img key={index} className="offer" src={images}/>)}
        </div>
    </section>
    
  )
}

export default Offers