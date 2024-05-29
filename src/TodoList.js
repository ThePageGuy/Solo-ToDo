import React from 'react';
import TodoItem from './TodoItem';
import styles from './TodoApp.module.css';

const TodoList = ({ todos, removeTodo }) => {
  return (
    <ul className={styles.list}>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          removeTodo={removeTodo}
          index={index}
        />
      ))}
    </ul>
  );
};

export default TodoList;