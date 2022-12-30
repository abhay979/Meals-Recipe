import React from 'react'
import { useGlobalContext } from './Context'
import { Card,Button} from 'react-bootstrap';
import {Row,Col} from 'react-bootstrap';
import {AiOutlineHeart} from "react-icons/ai"
const Meals = () => {
    const {meals,loading,setmodal,setinfo,favinfo,setfavinfo} = useGlobalContext();
    if(loading) return<h3 style={{textAlign:'center'}}>Loading.....</h3>;
    
    if(meals.length<1) return(<h3 style={{textAlign:'center'}}>No items Found,Search Again!!</h3>)
    else
  return (
    <div className='container' style={{ width: '1080px'}}>
          <Row xs={1} md={3} className="g-4">
     { 
        meals.map((item)=>{
            return(
                    <Col>
                <Card style={{ width: '350px',height:'350px'}}>
                <Card.Img variant="top" src={item.strMealThumb} onClick={() =>{ setmodal(true);
                 setinfo(item)}}  style={{ width: '348px',height:'235px',cursor:'pointer'}}/>
                <Card.Body className='grid-container-element'>
                  <Card.Title className='grid-child-element my-1'>{item.strMeal}</Card.Title>
                  <Button className='grid-child-element lbtn' onClick={()=>{ 
                    const found = favinfo.find(({strMeal})=>{return(strMeal === item.strMeal)});
                    if(found===undefined){
                    setfavinfo([...favinfo,item])
                    localStorage.setItem("fav", JSON.stringify([...favinfo,item])) }}}><AiOutlineHeart/></Button>
                </Card.Body>
              </Card>
              </Col> 
            )})
     }
      </Row>
    </div>
  )
}

export default Meals
