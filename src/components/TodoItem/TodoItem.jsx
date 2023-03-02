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
      <tr>
        <td>{title}</td>
        <td onClick={() => setModalOpen(true)}>
          <div className="item-text">{descript}</div>
        </td>

        <td>
          <input
            type="checkbox"
            checked={completed}
            onChange={handleCheckboxClick}
          />
        </td>
      </tr>

      <Modal
        title={title}
        descript={descript}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </>
  );
};
