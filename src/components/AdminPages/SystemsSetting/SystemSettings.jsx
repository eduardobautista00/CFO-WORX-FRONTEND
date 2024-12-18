import React from "react";
import StickyHeader from "../../SideBar/StickyHeader";
import "./SystemSettingsStyle.css"
import { useNavigate } from "react-router-dom";

function SystemSettings() {
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
            <label id="active-item"> Change Admin Email</label>
          </div>
          <div className="system-setting-items">
            <label onClick={() => navigate('/system-settings_reset-password')}> Reset Password</label>
          </div>
          <div className="system-setting-items">
          <label onClick={() => navigate('/system-settings_summary-email')}>  Summary Email</label>
          </div>
        </div>

        <div className="ml-2" id="admin-label">
          <h5>Change Admin Email Address</h5>
          <small>Type the new email address below and update it.</small>
        </div>


        <div className="d-flex flex-column ml-2 add-user-fields" id="admin-settings-form">
          {/* Existing Email */}
          <div className="d-flex align-items-center mt-3">
            <label
              htmlFor="email"
              style={{
                marginRight: "20px",
                minWidth: "150px", // Set a fixed width for alignment
                textAlign: "left", // Align text to the right
              }}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              disabled="true"
              className="form-control"
              placeholder="admin@email.com"
              style={{ maxWidth: "450px", width: "400px" }}
            />
          </div>

          {/* New Email */}
          <div className="d-flex align-items-center mt-3">
            <label
              htmlFor="newEmail"
              style={{
                marginRight: "20px",
                minWidth: "150px",
                textAlign: "left",
              }}
            >
              Enter New Email:
            </label>
            <input
              type="email"
              id="newEmail"
              className="form-control"
              placeholder="New email"
              style={{ maxWidth: "450px", width: "400px" }}
            />
          </div>

          {/* Confirm New Email */}
          <div className="d-flex align-items-center mt-3">
            <label
              htmlFor="confirmEmail"
              style={{
                marginRight: "20px",
                minWidth: "150px",
                textAlign: "left",
              }}
            >
              Confirm New Email:
            </label>
            <input
              type="email"
              id="confirmEmail"
              className="form-control"
              placeholder="Confirm new email"
              style={{ maxWidth: "450px", width: "400px" }}
            />
          </div>

          {/* Save Button */}
          <button className="mt-3 submit-btn" type="submit">
            SAVE
          </button>
        </div>

      </div>
    </div>
  );
}

export default SystemSettings;
