import './index.css';
import React from 'react';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
   const {
      searchValue,
      setSearchValue,
   } = React.useContext(TodoContext)

   function handleSearch(e) {
      setSearchValue(e.target.value);
   }

   return (
      <div className='ContainerTodoSearch'>
         <input
            type='text'
            placeholder='Busca un TODO'
            className='TodoSearch'
            onChange={handleSearch}
            value={searchValue}
         />
         <CreateTodoButton />
      </div>

   );
}

export { TodoSearch };