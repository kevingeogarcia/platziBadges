import React from "react";
import confLogo from "../images/img404.webp";
import "./styles/NotFound.css";
function NotFound() {
  return (
    <div className="Not-found">
      <div className="Not-found__col">
        <h1>404 Not Found</h1>
      </div>
      <div className="Not-found__col">
        <img className="Not-found--logo" src={confLogo} alt="Conf Logo" />
      </div>
    </div>
  );
}

export default NotFound;
