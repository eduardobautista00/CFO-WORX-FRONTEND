import React from "react";

import StickyHeader from "../../SideBar/StickyHeader";
import "./ConsultantList.css";

const AddConsultant = () => {
  return (
    <div className="container">
      <StickyHeader />
      <div className="form-container">
        <form action="">
          <h3 style={{ fontWeight: 700 }}>Add Consultant</h3>
          <div className="sub-form-container">
            <span>
              <label htmlFor="last_name">Last Name</label>
              <input type="text" placeholder="" name="last_name" />
            </span>
            <span>
              <label htmlFor="first_name">First Name</label>
              <input type="text" placeholder="" name="first_name" />
            </span>
            <span>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="" name="email" />
            </span>
          </div>

          <div className="sub-form-container">
            <span>
              <label htmlFor="title">Title</label>
              <input type="text" placeholder="" name="title" />
            </span>
            <span>
              <label htmlFor="pay_type">Pay Type</label>
              <select name="pay_type">
                <option value="hourly">Hourly</option>
                <option value="salary">Salary</option>
              </select>
            </span>
            <span>
              <label htmlFor="pay_rate">Pay Rate</label>
              <input type="text" placeholder="" name="pay_rate" />
            </span>
          </div>
          <button>Save</button>
        </form>
      </div>
    </div>
  );
};

export default AddConsultant;
