import React from "react";
import { Link } from "react-router-dom";

import Badge from "../components/Badge";

import confLogo from "../images/platziconf-logo.svg";
import "./styles/BadgeDetails.css";

function BadgeDetails(props) {
    const badge = props.badge;
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de Conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col mb-4">
            <Badge 
              firstName={badge.firstName || "FIRST_NAME"}
              lastName={badge.lastName || "LAST_NAME"}
              twitter={badge.twitter || "TWITTER"}
              jobTitle={badge.jobTitle || "JOB_TITLE"}
              email={badge.email || "EMAIL"}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                <Link
                  className="btn btn-primary  mb-4"
                  to={`/badges/${badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>
              <div>
                <button className="btn btn-danger mb-4">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
