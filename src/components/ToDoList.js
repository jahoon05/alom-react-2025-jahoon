import React from "react";
import ToDoItem from "./ToDoItem";
import './style/ToDoList.css';

function TodoList({todos, onDelete}) {
  return (
    <div className="todo-list">
        {todos.map((item, index) => (
          <ToDoItem
            key={index}
            todo={item}
            onDelete={() => onDelete(index)}
          />
        ))}
    </div>
  );
}

export default TodoList;
