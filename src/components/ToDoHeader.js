import React from 'react';

function TodoHeader({count}) {
  return (
    <div>
        <h1 className="todo-header">My To Dos ({count})</h1>
    </div>
  );
}

export default TodoHeader;