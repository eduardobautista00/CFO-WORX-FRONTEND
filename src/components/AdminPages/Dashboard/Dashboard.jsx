import React from "react";
import DataTable from "react-data-table-component";
import { Card } from "react-bootstrap";
import StickyHeader from "../../SideBar/StickyHeader";
import { FaClock, FaBell } from "react-icons/fa"; // For icons
import placeholder from "../../../assets/images/cfo-fav-icon.png";
import "./dashboardStyle.css";

function Dashboard() {
  // Dummy data for the first table
  const workHoursData = [
    { id: 1, name: "Client A", clients: 5, hours: "120 hrs" },
    { id: 2, name: "Client B", clients: 3, hours: "75 hrs" },
    { id: 3, name: "Client C", clients: 7, hours: "165 hrs" },
  ];

  // Columns for the first table
  const workHoursColumns = [
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "# of Clients", selector: (row) => row.clients, sortable: true },
    { name: "Total Work Hours", selector: (row) => row.hours, sortable: true },
  ];

  // Dummy data for the second table
  const pendingReportsData = [
    { id: 1, name: "Contractor X", date: "2024-11-23", action: "" },
    { id: 2, name: "Contractor Y", date: "2024-11-22", action: "" },
    { id: 3, name: "Contractor Z", date: "2024-11-21", action: "" },
  ];

  // Columns for the second table
  const pendingReportsColumns = [
    { name: "Name", selector: (row) => row.name, sortable: true },
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
      <div className="dashboard-page-title">
        <h1>Dashboard</h1>
      </div>

      {/* Card Section */}
      <Card className="dashboard-card">
        <Card.Body>
          <div className="dashboard-card-header">
            <small>TOTAL HOURS</small>
            <small>WORK BY ALL CONTRACTORS</small>
          </div>
          <div className="dashboard-card-content">
            <h1>360<small>hrs</small></h1>
            <FaClock style={{ fontSize: "5rem", marginLeft: "1rem", color: "#2B9AFF" }} />
          </div>
        </Card.Body>
      </Card>

      {/* First Data Table */}
      <div className="container-content" >
        <h4>Total Work Hours per Client</h4>
        <div className="table-wrap" id="dashboard-container">
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
      <div className="container-content" >
        <h4>Pending Reports: Contractors</h4>
        <div className="table-wrap" id="dashboard-container">
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

export default Dashboard;
