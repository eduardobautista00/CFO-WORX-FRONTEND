import React from "react";
import StickyHeader from "../../SideBar/StickyHeader";
import "./SystemSettingsStyle.css"
import { useNavigate } from "react-router-dom";
import {FaCalendar} from 'react-icons/fa'

function SystemSettingsSummaryEmail() {
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
          <label onClick={() => navigate('/system-settings_reset-password')}> Reset Password</label>
          </div>
          <div className="system-setting-items">
            <label id="active-item"> Summary Email</label>
          </div>
        </div>

        <div className="ml-2" id="admin-label">
          <h5>Set Date for Automatic Reports</h5>
          <small>Select the date and frequency for sending reports automatically.</small>
        </div>


        <div className="d-flex flex-column ml-2 add-user-fields" id="admin-settings-form">
             {/* Date Picker with FaCalendar Icon */}
            <div className="mt-3 position-relative" style={{ maxWidth: "350px", width:"165px" }}>
                <label htmlFor="datePicker" style={{ marginBottom: "5px" }}>Select Date:</label>
                <div className="input-group">
                <input
                    type="date"
                    id="datePicker"
                    className="form-control"
                    style={{ paddingLeft: "40px", backgroundColor:"#212A31", color:"#FFF", borderRadius: "5px"}}
                />
                <span
                    className="position-absolute"
                    style={{
                    left: "10px",
                    top: "45%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                    }}
                >
                    <FaCalendar size={20} color="#6c757d" />
                </span>
                </div>
            </div>

          {/* Contractor Email */}
          <div className=" mt-3">
            <label>
              Admin Email:
            </label>
            <input
              type="email"
              id="newEmail"
              className="form-control"
              disabled
              placeholder="admin.email@email.com"
              style={{ maxWidth: "450px", width: "220px" }}
            />
          </div>

          {/* Save Button */}
          <button className="mt-3 submit-btn" type="submit" id="summary-email-btn">
            Update
          </button>
        </div>

      </div>
    </div>
  );
}

export default SystemSettingsSummaryEmail;
