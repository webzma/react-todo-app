import React from "react";
import { useLocalStorage } from '../App/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
   //ESTADO DE LAS TAREAS
   const {
      item: todos,
      saveItem: saveTodo,
      error,
      loading,
   } = useLocalStorage('TODOS_V1', []);

   //ESTADO DE LAS BUSQUEDAS DE LAS TAREAS
   const [searchValue, setSearchValue] = React.useState("");

   //ESTADO DEL MODAL PARA CREAR TAREAS
   const [openModal, setOpenModal] = React.useState(false);

   const [createErrorTodo, setCreateErrorTodo] = React.useState(false);

   //ESTA FUNCIÓN PERMITE MARCAR COMO COMPLETADO UNA TAREA
   function completeTodo(text) {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(todo => todo.text === text);
      const isCompletedTodo = newTodos[todoIndex].completed;
      newTodos[todoIndex].completed = !isCompletedTodo;
      saveTodo(newTodos);
   }

   //ESTA FUNCIÓN NOS PERMITE ELIMINAR UNA TAREA 
   function deleteTodo(text) {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(todo => todo.text === text);
      newTodos.splice(todoIndex, 1);
      saveTodo(newTodos);
   }

   //ESTA FUNCIÓN NOS PERMITE CREAR UN TODO
   function addTodo(text) {
      const newTodos = [...todos];
      newTodos.push({
         text,
         completed: false,
      });
      saveTodo(newTodos);
   }

   //ESTA FUNCIÓN PERMITE ESCUCHAR EL EVENTO ONCHANGE PARA LAS TAREAS QUE TENGAN QUE SER BUSCADAS
   const searchedTodos = todos.filter(
      (todo) => {
         const todoText = todo.text.toLowerCase();
         const searchText = searchValue.toLowerCase();
         return todoText.includes(searchText);
      }
   )

   //AQUÍ GUARDAMOS LA LONGITUD DE NUESTRAS TAREAS
   const totalTodos = todos.length;

   //AQUÍ GUARDAMOS LA CANTIDAD DE TAREAS COMPLETADAS
   const completedTodos = todos.filter(todo => todo.completed === true).length;

   return (
      <TodoContext.Provider value={
         {
            error,
            loading,
            todos,
            completedTodos,
            totalTodos,
            searchedTodos,
            deleteTodo,
            completeTodo,
            searchValue,
            setSearchValue,
            openModal,
            setOpenModal,
            saveTodo,
            addTodo,
            setCreateErrorTodo,
            createErrorTodo,
         }
      }>
         {children}
      </TodoContext.Provider>
   )
}

export { TodoContext, TodoProvider };