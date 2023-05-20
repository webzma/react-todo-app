import './index.css';
import React from "react";
import { FaTimes } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';


function TodoIcon({ type, color }) {

   const iconTypes = {
      "delete": <FaTimes className='Icon-delete' />,
      "check": <FaCheck className='Icon-check ' />
   }

   return (
      iconTypes[type]
   );
}

export { TodoIcon }