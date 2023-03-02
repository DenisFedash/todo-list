import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCheckbox } from "../../redux/TodoSlice";
import { Modal } from "../Modal/Modal";

export const TodoItem = ({ title, descript, id, completed, index }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(updateCheckbox({ id, completed: !completed }));
  };

  return (
    <>
      <li>
        <div className="item-todo">
          <p>{index}</p>
          <p>{title}</p>
          <p onClick={() => setModalOpen(true)} className="item-text">
            {descript}
          </p>

          <input
            type="checkbox"
            checked={completed}
            onChange={handleCheckboxClick}
          ></input>
        </div>
      </li>
      <Modal
        title={title}
        descript={descript}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </>
  );
};
