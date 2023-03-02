import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/TodoSlice";
import { nanoid } from "nanoid";
import css from "./Form.module.css";

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
    <div className={css.formContainer}>
      <div className={css.formInput}>
        <input
          type="text"
          value={title}
          name="title"
          placeholder="Title"
          required
          onChange={handleChange}
        />
        <textarea
          type="text"
          value={descript}
          name="descript"
          placeholder="Description"
          required
          onChange={handleChange}
          rows="10"
          col="500"
        />
      </div>
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
};
