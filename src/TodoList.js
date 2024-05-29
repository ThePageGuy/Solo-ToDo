import React from 'react';
import TodoItem from './TodoItem';
import styles from './TodoApp.module.css';

const TodoList = ({ todos, removeTodo, updateTodo }) => {
  return (
    <ul className={styles.list}>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          removeTodo={removeTodo}
          index={index}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;