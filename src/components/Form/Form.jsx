import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/TodoSlice";
import { nanoid } from "nanoid";

export const Form = () => {
  const [title, setTitle] = useState("");
  const [descript, setDescript] = useState("");

  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos.value);

  const handleSubmit = () => {
    dispatch(
      addTodo({
        id: nanoid(),
        title,
        descript,
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Description"
        onChange={(event) => {
          setDescript(event.target.value);
        }}
      />
      <button onClick={() => handleSubmit()}>Create</button>
    </div>
  );
};
