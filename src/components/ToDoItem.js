import React from 'react';
import './style/ToDoItem.css';
function TodoItem({todo, onDelete}) {
  return (
    <div>
        <li className='todo-item'>
            {todo}
            <button className="delete-btn"onClick={onDelete}>❌</button>
        </li>
    </div>
  );
}

export default TodoItem;