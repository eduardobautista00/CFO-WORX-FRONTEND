import React from "react";
import DataTable from "react-data-table-component";
import { Card } from "react-bootstrap";
import StickyHeader from "../../SideBar/StickyHeader";
import { FaBell } from "react-icons/fa"; // For icons
import placeholder from "../../../assets/images/cfo-fav-icon.png";
import "./ReviewAndApprovalStyle.css";

import man from "../../../assets/images/man.png";
import woman from "../../../assets/images/woman.png";
import view_report from "../../../assets/images/view-icon.png";
import approve_report from "../../../assets/images/approve-icon.png";
import reject_report from "../../../assets/images/reject-icon.png";

function ReviewAndApproval() {
  // Dummy data for the first table
  const workHoursData = [
    { id: 1, status: "Pending", name: "Client A", week: "2024-11-12 to 2024-11-19", hours: "120 hrs" },
    { id: 2, status: "Approved", name: "Client B", week: "2024-11-12 to 2024-11-19", hours: "75 hrs" },
    { id: 3, status: "Rejected", name: "Client C", week: "2024-11-12 to 2024-11-19", hours: "165 hrs" },
  ];

  // Columns for the first table
  const workHoursColumns = [
    {
      name: "Status",
      cell: (row) => (
        <div
          style={{
            backgroundColor:
              row.status === "Pending"
                ? "#FEE841"
                : row.status === "Approved"
                ? "#28A745"
                : "#DC3545",
            color: '#10161b',
            padding: "5px 5px",
            borderRadius: "5px",
            textAlign: "center",
            fontWeight: "bold",
            width: "60%",
          }}
        >
          {row.status}
        </div>
      ),
      sortable: true,
    },
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Week", selector: (row) => row.week, sortable: true },
    { name: "Total Hours", selector: (row) => row.hours, sortable: true },
    {
      name: "Action",
      cell: () => (
        <div style={{ display: "flex", gap: "10px" }}>
          <img src={view_report} alt="View" style={{ width: "20px", cursor: "pointer" }} />
          <img src={approve_report} alt="Approve" style={{ width: "20px", cursor: "pointer" }} />
          <img src={reject_report} alt="Reject" style={{ width: "20px", cursor: "pointer" }} />
        </div>
      ),
    },
  ];

  // Dummy data for the second table
  const pendingReportsData = [
    { id: 1, name: "Contractor X", gender: "man", date: "2024-11-23" },
    { id: 2, name: "Contractor Y", gender: "woman", date: "2024-11-22" },
    { id: 3, name: "Contractor Z", gender: "man", date: "2024-11-21" },
  ];

  // Columns for the second table
  const pendingReportsColumns = [
    {
      name: "Name",
      cell: (row) => (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={row.gender === "man" ? man : woman}
            alt={row.gender}
            style={{ width: "50px", borderRadius: "50%" }}
          />
          {row.name}
        </div>
      ),
      sortable: true,
    },
    { name: "Date", selector: (row) => row.date, sortable: true },
    {
      name: "Action",
      cell: () => (
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <p style={{ fontWeight: "bold", color: "#212A31" }}>REMIND <FaBell style={{ color: "#ffc107", fontSize: "1.2rem" }} /></p>
        </div>
      ),
    },
  ];

  return (
    <div className="container">
      <StickyHeader />
      <div className="reviewAndApproval-page-title">
        <h2>Review And Approvals</h2>
      </div>

      {/* First Data Table */}
      <div className="container-content" >
        <div className="table-wrap" id="reviewAndApproval-container">
          <DataTable
            className="dataTables_wrapper"
            columns={workHoursColumns}
            data={workHoursData}
            pagination
            paginationPerPage={10}
            paginationRowsPerPageOptions={[20, 30]}
            responsive
          />
        </div>
      </div>

      {/* Second Data Table */}
      <div className="container-content">
        <div className="table-label">
          <h5>Manual Notifications</h5>
          <small>For consultants who haven't submitted their report yet</small>
        </div>
        <div className="table-wrap" id="reviewAndApproval-container">
          <DataTable
            className="dataTables_wrapper"
            columns={pendingReportsColumns}
            data={pendingReportsData}
            pagination
            paginationPerPage={20}
            paginationRowsPerPageOptions={[20, 30]}
            responsive
          />
        </div>
      </div>
    </div>
  );
}

export default ReviewAndApproval;
