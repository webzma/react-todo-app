import './index.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
   const { setOpenModal } = React.useContext(TodoContext);

   return (
      <button
         className='CreateTodoButton'
         onClick={() => setOpenModal(openModal => !openModal)}
      >
         Create TODO
      </button>
   );
}

export { CreateTodoButton };