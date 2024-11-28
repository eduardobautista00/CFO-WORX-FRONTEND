import React from "react";

import StickyHeader from "../../SideBar/StickyHeader";
import "./ConsultantList.css";

const EditConsultant = () => {
  return (
    <div className="container">
      <StickyHeader />
      <div className="form-container">
        <form action="">
          <h3 style={{ fontWeight: 700 }}>Edit Consultant</h3>
          <div className="sub-form-container">
            <span>
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                placeholder=""
                name="last_name"
                value="Johnson"
              />
            </span>
            <span>
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                placeholder=""
                name="first_name"
                value="Alex"
              />
            </span>
            <span>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder=""
                name="email"
                value="alex.johnson@email.com"
              />
            </span>
          </div>

          <div className="sub-form-container">
            <span>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder=""
                name="title"
                value="Senior Consultant"
              />
            </span>
            <span>
              <label htmlFor="pay_type">Pay Type</label>
              <select name="pay_type">
                <option value="hourly" selected>
                  Hourly
                </option>
                <option value="salary">Salary</option>
              </select>
            </span>
            <span>
              <label htmlFor="pay_rate">Pay Rate</label>
              <input type="text" placeholder="" name="pay_rate" value="95" />
            </span>
          </div>
          <span>
            <label htmlFor="status">Status</label>
            <select name="status">
              <option value="active" selected>
                Active
              </option>
              <option value="inactive">Inactive</option>
            </select>
          </span>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditConsultant;
