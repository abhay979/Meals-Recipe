import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import {AiOutlineHeart} from "react-icons/ai"

function Header() {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  return (
        <Toast show={showA} onClose={toggleShowA} style={{background:'#8CCCF4',marginLeft:'399px',width:'44%',border:'transparent'}}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Click on image to get recipe. Click on <AiOutlineHeart/> to add to Favorites!!</strong>
          </Toast.Header>
        
        </Toast>
  );
}

export default Header;