import React from 'react'
import { useGlobalContext } from './Context'
import { Button } from 'react-bootstrap';

const Favorites = () => {
    const {setmodal,favinfo,setinfo,setfavinfo} = useGlobalContext();
  return ( 
    <div className='my-3' style={{background:'black',width:'100%'}} > 
    <h4 style={{color:'white',marginLeft:'29px'}}>{favinfo.length>0?"Favorites":""}</h4>
      <div className='favorites-container'>
     {favinfo.map((item) =>{
        return(
            <div key={item.idMeal} style={{width:'90px',marginLeft:'27px'}}>
            <img className='favorites-img my-2' src={item.strMealThumb} alt='food' onClick={() =>{ setmodal(true);
                 setinfo(item)}}></img>
                 <p style={{color:'white',textAlign:'center',marginLeft:'-12px'}}>{item.strMeal}</p>
            <Button className='favorite-item' variant="outline-danger" size='sm'
             onClick={() =>{
                const updatedFavorites = favinfo.filter((meal) => meal.idMeal !== item.idMeal);
                setfavinfo(updatedFavorites);
                localStorage.setItem("fav", JSON.stringify(updatedFavorites))
             } }
             >Remove</Button>
            </div>
        )
     })}
     </div>
    </div>
  )
}

export default Favorites
