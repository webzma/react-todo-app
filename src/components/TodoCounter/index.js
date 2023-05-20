import './index.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
   const {
      completedTodos,
      totalTodos,
   } = React.useContext(TodoContext)

   return (
      <h1 className='TodoCounter'>
         Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODO's.
      </h1>
   );
}

export { TodoCounter };