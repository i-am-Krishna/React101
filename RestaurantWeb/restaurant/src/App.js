import './App.css';
import Navbar from './Components/Navbar';
import Offers from './Components/Offers';
import Filters from './Components/Filters';
import Restaurants from './Components/Restaurants';
import userinfo from './data/userinfo.json';
import offer from './data/offer.json';
import restaurant from './data/restaurant.json';
import { useState } from 'react';

const filters = {
  1:"Cost High to Low",
  2:"Cost Low to High",
  3:"Ratings",
  4:"Delivery Time",
  5:"Relevance"
}


function App() {

const [filterBy,setFilterBy] = useState("")
const [data,setData] = useState(restaurant)
const updateFilter = (newFilter)=>{

  switch(newFilter){
    case "1":{
      setFilterBy(1);
       data.sort((a,b)=> b.costForTwo - a.costForTwo)
      setData([...data]);
      break ;
    }
    case "2":{
      setFilterBy(2);
       data.sort((a,b)=> a.costForTwo - b.costForTwo)
      setData([...data]);
      break ;
    }
    case "3":{
      setFilterBy(3);
      data.sort((a,b)=> b.rating - a.rating)
      setData([...data])
      break ;
    }
    default:{
      break ;
    }
  }

}




  return (
    <div>

      <Navbar {...userinfo.location}/>

      <Offers offer={offer}/>

      <section className='near-you'>

      <Filters filters={filters} filterBy={filterBy} updateFilter={updateFilter}/>

      <Restaurants restaurant={data}/>

      </section>
      
       
    </div>
  );
}

export default App;
