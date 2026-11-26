import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <>
      {todos
        .map((todo) => {
          return (
            <Todo
              key={todo.id || todo._id}
              todo={todo}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
            />
          );
        })
        .reduce(
          (acc, cur, index) => [
            ...acc,
            <hr key={`hr-${index}`} />,
            <React.Fragment key={`todo-${index}`}>
              {cur} {index !== todos.length - 1}
            </React.Fragment>,
          ],
          [],
        )}
    </>
  );
};

export default TodoList;
