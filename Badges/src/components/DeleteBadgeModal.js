import React from "react";

import Modal from "./Modal";

function DeleteBadgeModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteBadgeModal">
        <h1>Are you Sure?</h1>
        <p>you are abuot to delete this Badge</p>

        <div>
        <button onClick={props.onDeleteBadge} className=" btn btn-danger mr-4">Delete</button>
        <button onClick={props.onClose} className=" btn btn-primary">Cancel</button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;
