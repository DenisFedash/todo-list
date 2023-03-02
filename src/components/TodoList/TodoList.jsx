import { useSelector } from "react-redux";

import { TodoItem } from "../TodoItem/TodoItem";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);

  return (
    <>
      <div className="list-name">
        <h2>ID</h2>
        <h2>TITLE</h2>
        <h2>DESCRIPTION</h2>
        <h2>STATUS</h2>
      </div>

      <ol className="list-todo">
        {todos.map(({ id, title, descript, completed, index }) => (
          <TodoItem
            key={id}
            id={id}
            title={title}
            descript={descript}
            completed={completed}
            index={index}
          />
        ))}
      </ol>
    </>
  );
};
