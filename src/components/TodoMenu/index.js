import './index.css';
import React from "react";

function TodoMenu() {
  return (
    <nav className="todoNav">
      <div className='todoNameSpan'>TODOS</div>
      <ul className="todoNav-list">
        <li className="todoNav-list__item" onClick={showActiveTodos}>Active</li>
        <li className="todoNav-list__item" onClick={ShowCompletedTodos}>Completed</li>
        <li className="todoNav-list__item" onClick={showAllTodos}>All</li>
      </ul>
    </nav>
  );
}

export { TodoMenu };