import React from 'react'
import { Modal,Button} from 'react-bootstrap'
import { useGlobalContext } from './Context';
const Modals = () => {
    const {modal,setmodal,info} = useGlobalContext();
    const handleClose = () => setmodal(false);
    const favicon = document.getElementById("favicon");
    
    if(modal) {document.title="Meal Recipe - "+info.strMeal;
    favicon.setAttribute("href",info.strMealThumb)}
    if(!modal){document.title="Meals Recipe";
    favicon.setAttribute("href","foodh.png")}

  return (
    <div>
        <Modal
         show={modal} size="lg"
         onHide={handleClose}
         backdrop="static"
         keyboard={false}
         aria-labelledby="contained-modal-title-vcenter"
         centered
       >
         <Modal.Header className='' closeButton>
           <Modal.Title  id="contained-modal-title-vcenter">{info.strMeal}</Modal.Title>
           <div style={{marginLeft: '385px',marginRight: '0',textAlign:'center',background:'grey',color:'white',width:'250px',height:'32px'}}>Category: {info.strCategory}</div>
         </Modal.Header>
         <img src={info.strMealThumb} alt='food' className='card' style={{ marginLeft:'10px',marginTop:'10px', borderRadius: '4px',
             width: '200px'}}></img>
         <Modal.Body>
         <b>Cooking Instructions:</b><br></br> {info.strInstructions}
         <br></br><br></br>
         <a href={info.strYoutube}><b>Click here to check Youtube tutorial for the meal</b></a>
         </Modal.Body>
         <Modal.Footer>
           <Button variant="outline-danger" onClick={handleClose}>
             Close
           </Button>
         </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Modals
