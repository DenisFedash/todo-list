import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../redux/TodoSlice";

export const TodoItem = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos.todos);

  return (
    <>
      {todoList &&
        todoList.map(({ title, descript, id }) => {
          return (
            <li key={id}>
              <p> {title}</p>
              <p> {descript}</p>
              <input type="checkbox" />
            </li>
          );
        })}
    </>
  );
};
