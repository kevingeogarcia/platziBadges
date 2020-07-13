import React from "react";
import { Link } from "react-router-dom";

import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

import confLogo from "../images/platziconf-logo.svg";
import "./styles/BadgeDetails.css";

function useIncreaseCount(max) {
  const [count, setCount] = React.useState(0);
  if (count > max) {
    setCount(0);
  }
  return [count, setCount];
}
function BadgeDetails(props) {
  const [count, setCount] = useIncreaseCount(4);

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
                <button
                  onClick={props.onOpenModal}
                  className="btn btn-danger mb-4"
                >
                  Delete
                </button>
                <DeleteBadgeModal
                  onClose={props.onCloseModal}
                  isOpen={props.modalIsOpen}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
