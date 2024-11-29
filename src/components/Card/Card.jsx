import React from "react";

import "./Card.css";

const Card = ({ first_name, last_name, status, end_date, total_hours }) => {
  return (
    <div className="card">
      <div className="card-container">
        <div className="name-tag">
          <h3>
            {first_name} {last_name}
          </h3>
          <p
            style={{
              backgroundColor:
                status === "pending"
                  ? "#FEE841"
                  : status === "approved"
                  ? "#28A745"
                  : status === "rejected"
                  ? "#CE3847"
                  : "",
              color: "#1c1c1c",
            }}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </p>
        </div>
        <span>Timesheet End Date: {end_date}</span>
        <span>Total Hours: {total_hours}</span>
        <div className="btn-container">
          <button>Approve</button>
          <button>View</button>
          <button>Change</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
