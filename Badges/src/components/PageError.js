import React from "react";
import "./styles/PageError.css";
import serverErrorlogo from "../images/server-error.svg";
function PageError(props) {
  return (
    <div className="page-error">
      <div  className="page-error__content1">
        <h1>{props.error.message}</h1>
    </div>
      <div  className="page-error__content2">
        <img className="error--logo" alt="Conf Logo" src={serverErrorlogo} />
      </div>
    </div>
  );
}

export default PageError;
