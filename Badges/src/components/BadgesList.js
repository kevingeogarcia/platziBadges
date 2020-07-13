import React from "react";

import "./styles/BadgesList.css";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar className="Badge__avatar" email={this.props.badge.email} />
        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

function BadgesList(props) {
  const badges = props.badges;
  const [query, setQuery] = React.useState('');
  const [filterBadges, setfilterBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setfilterBadges(result);
  }, [badges, query]);
  if (filterBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <h4>Filter Badges</h4>
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            className="form-control"
          />
        </div>
        <h3>Not Badges were found :(</h3>
        <Link to="/badges/new" className="btn btn-primary">
          Create New Badge
        </Link>
      </div>
    );
  }
  return (
    <div className="BadgesList">
      <div className="form-group">
        <h4>Filter Badges</h4>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          className="form-control"
        />
      </div>
      <ul className="list-unstyled">
        {filterBadges.map((badge) => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
