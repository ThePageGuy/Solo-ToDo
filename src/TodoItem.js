import React from 'react';

const TodoItem = ({ todo, removeTodo, index }) => {
  return (
    <li>
      {todo}
      <button onClick={() => removeTodo(index)}>Remove</button>
    </li>
  );
};

export default TodoItem;