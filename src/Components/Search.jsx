import React from 'react'
import { Form,Button } from 'react-bootstrap'
import { useGlobalContext } from './Context'
import { useState } from 'react'

const Search = () => {
    const {setsearch,fetchRandomMeal} =useGlobalContext();
    const [text,settext] = useState("")
    const handlesubmit = (e) => {
       e.preventDefault();
       if(text){
       setsearch(text);
       settext('');
       }
    }

  return (
    <div className='container my-3' style={{marginLeft:'386px'}}>
       <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search" value={text} onChange={(e) =>{
               settext(e.currentTarget.value);
              }}
               style={{width:'500px'}}/>
            <Button variant="outline-primary" type='submit' onClick={handlesubmit} style={{color:'black'}}>Search</Button>
            <Button className='oulinne-primary mx-2 sbtn' onClick={fetchRandomMeal}>Suprise!</Button>
          </Form>
    </div>
  )
}

export default Search
