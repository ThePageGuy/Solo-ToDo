import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} removeTodo={removeTodo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;