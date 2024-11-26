import React from "react";
import DataTable from "react-data-table-component";
import { Card } from "react-bootstrap";
import StickyHeader from "../../SideBar/StickyHeader";
import { FaBell, FaSearch, FaClock } from "react-icons/fa"; // For icons
import placeholder from "../../../assets/images/cfo-fav-icon.png";
import "./ClientListStyle.css";
import "../../../App.css"

import man from "../../../assets/images/man.png";
import woman from "../../../assets/images/woman.png";
import view_report from "../../../assets/images/view-icon.png";
import approve_report from "../../../assets/images/approve-icon.png";
import reject_report from "../../../assets/images/reject-icon.png";

function ClientList() {
  const workHoursData = [
    { id: 1, name: "Client A", gender: "man", client_code: "ADRM", services: "Service Name", utilization_target: "75%", revenue: "$4500", action: "" },
    { id: 2, name: "Client B", gender: "man", client_code: "ADRM", services: "Service Name", utilization_target: "75%", revenue: "$4500", action: "" },
    { id: 3, name: "Client C", gender: "woman", client_code: "ADRM", services: "Service Name", utilization_target: "75%", revenue: "$4500", action: ""},
  ];

  // Columns for the first table
  const workHoursColumns = [
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
    { name: "Client Code", selector: (row) => row.client_code, sortable: true },
    { name: "Services", selector: (row) => row.services, sortable: true },
    { name: "Utilization Target", selector: (row) => row.utilization_target, sortable: true },
    { name: "Revenue", selector: (row) => row.revenue, sortable: true },
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
    { id: 1, name: "Client X", gender: "man", date: "2024-11-23" },
    { id: 2, name: "Client Y", gender: "woman", date: "2024-11-22" },
    { id: 3, name: "Client Z", gender: "man", date: "2024-11-21" },
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
      <div className="client-page-title">
        <h2>Client Management</h2>
      </div>

      <div className="top-filter">
        <select
          name="filter"
          className="form-select"
          id="filter"
        >
          <option value="">Select Client</option>
          {workHoursData.map((client) => (
            <option key={client.id} value={client.name}>
              {client.name}
            </option>
          ))}
        </select>

        <input
          id="search-bar"
          type="text"
          className="form-control"
          placeholder="Search"
          
        />
        <button
          onClick={() => navigate("/add-new-user")}
          className=" add-user-btn"
        >
          Add Client
        </button>
      </div>

      {/* First Data Table */}
      <div className="container-content">
        <div className="table-wrap">
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
        <div className="client-activity-header">
          <h3>Client Activity</h3>
        </div>

        <div className="flex-container">
          <div className="card-section">
            <Card className="client-card">
              <div className="card-header" id="client-card-header">
                <small>TOTAL NUMBER OF CLIENTS:</small>
              </div>
             <Card.Body className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                <div id="client-card">
                  <h1>23</h1>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="table-section">
            <div className="top-filter">
            <input
                id="search-bar"
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <select
                name="filter"
                id="filter"
                className="form-select"
              >
                <option value="all">All Clients</option>
                <option value="Client X">Client X</option>
                <option value="Client Y">Client Y</option>
                <option value="Client Z">Client Z</option>
              </select>
            </div>

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

    </div>
  );
}

export default ClientList;
