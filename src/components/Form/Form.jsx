import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/TodoSlice";
import { nanoid } from "nanoid";
import { ErrorMessage, Formik } from "formik";

export const Form = () => {
  const [title, setTitle] = useState("");

  const [descript, setDescript] = useState("");

  const dispatch = useDispatch();

  const reset = () => {
    setTitle("");
    setDescript("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || descript.trim() === "") {
      return alert("The fields is empty");
    }

    dispatch(
      addTodo({
        id: nanoid(),
        title,
        descript,
      })
    );

    reset();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "title":
        setTitle(value);
        break;

      case "descript":
        setDescript(value);
        break;

      default:
        return;
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        name="title"
        placeholder="Title"
        required
        onChange={handleChange}
      />
      <input
        type="text"
        value={descript}
        name="descript"
        placeholder="Description"
        required
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
};
