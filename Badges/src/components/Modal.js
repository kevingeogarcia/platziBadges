import React from "react";
import ReactDom from "react-dom";

import "./styles/Modal.css";

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }
  return ReactDom.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        {props.children}
        <button onClick={props.onClose} className="Modal__close--button">X</button>
      </div>
    </div>,
    document.getElementById("Modal")
  );
}

export default Modal;
