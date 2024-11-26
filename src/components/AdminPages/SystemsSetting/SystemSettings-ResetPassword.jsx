import React from "react";
import StickyHeader from "../../SideBar/StickyHeader";
import "./SystemSettingsStyle.css"
import { useNavigate } from "react-router-dom";

function SystemSettingsResetPassword() {
    const navigate = useNavigate();

  return (
    <div className="container">
      <StickyHeader />

      <div className="container-content " id="system-setting-container">
        <div className="table-label ml-2 mb-5">
          <h5>Admin System Settings</h5>
        </div>

        <div className="d-flex justify-content-start ml-2 mr-5 mt-4" id="system-setting-nav">
          <div className="system-setting-items">
            <label onClick={() => navigate('/system-settings')}> Change Admin Email</label>
          </div>
          <div className="system-setting-items">
            <label id="active-item"> Reset Password</label>
          </div>
          <div className="system-setting-items">
          <label onClick={() => navigate('/system-settings_summary-email')}> Summary Email</label>
          </div>
        </div>

        <div className="ml-2" id="admin-label">
          <h5>Send a reset password link to contractor.</h5>
          <small>Type contractor name and send link.</small>
        </div>


        <div className="d-flex flex-column ml-2 add-user-fields" id="admin-settings-form">
          {/* Contractor Name*/}
          <div className="d-flex align-items-center mt-3">
            <label
              htmlFor="contractor-name"
              style={{
                marginRight: "20px",
                minWidth: "150px", // Set a fixed width for alignment
                textAlign: "left", // Align text to the right
              }}
            >
              Name:
            </label>
            <input
              type="text"
              id="contractor-name"
              className="form-control"
              placeholder="Contractor Name"
              style={{ maxWidth: "450px", width: "400px" }}
            />
          </div>

          {/* Contractor Email */}
          <div className="d-flex align-items-center mt-3">
            <label
              htmlFor="newEmail"
              style={{
                marginRight: "20px",
                minWidth: "150px",
                textAlign: "left",
              }}
            >
              Contractor Email:
            </label>
            <input
              type="email"
              id="newEmail"
              className="form-control"
              placeholder="contractor@email.com"
              style={{ maxWidth: "450px", width: "400px" }}
            />
          </div>



          {/* Save Button */}
          <button className="mt-3 submit-btn" type="submit" id="admin-reset-pass-btn">
            Send Link
          </button>
        </div>

      </div>
    </div>
  );
}

export default SystemSettingsResetPassword;
