import React from "react";
import { Link } from "react-router-dom";
import confLogo from "../images/astronauts.svg";
import platziconfLogo from "../images/platziconf-logo.svg";
import "./styles/NotFound.css";
function Home() {
  return (
    <div className="Not-found">
      <div className="Not-found__col">
        <img className="Not-found--logo" src={platziconfLogo} alt="Conf Logo" />
        
          <h1>Print your Badges</h1>
          <p>
          The easiest way to manage yot conference
        </p>
        <Link to="/badges">
          <button className="Not-found--btn btn btn-primary">Start Now</button>
        </Link>
      </div>
      <div className="Not-found__col">
        <img className="Not-found--logo" src={confLogo} alt="Conf Logo" />
      </div>
    </div>
  );
}

export default Home;
