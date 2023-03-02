import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

export const Modal = ({ title, descript, modalOpen, setModalOpen }) => {
  return (
    <>
      {modalOpen && (
        <div className="modal-wrapper">
          <div className="modal-container">
            <button
              className="modal-closeButton"
              onClick={() => setModalOpen(false)}
              onKeyDown={() => setModalOpen(false)}
              tabIndex={0}
              type="button"
            >
              <RxCross1 />
            </button>
            <h1>{title}</h1>
            <p>{descript}</p>
          </div>
        </div>
      )}
    </>
  );
};
