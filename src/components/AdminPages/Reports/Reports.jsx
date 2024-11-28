import React from "react";
import DataTable from "react-data-table-component";
import StickyHeader from "../../SideBar/StickyHeader";

import "./Reports.css";

import dummyReports from "./dummyReport";

function Reports() {
  const reports_columns = [
    {
      name: "Name",
      width: "20%",
      selector: (row) => (
        <div className="user-details">
          <span style={{ fontWeight: 600 }}>
            {row.first_name} {row.last_name}
          </span>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Expected Hours",
      width: "20%",
      selector: (row) => (
        <span style={{ fontWeight: 600 }}>{row.expected_hours} hrs</span>
      ),
      sortable: true,
      style: {
        width: "200px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    },

    {
      name: "Actual Hours Worked",
      width: "20%",
      selector: (row) => (
        <span style={{ fontWeight: 600 }}>{row.actual_hours_work} hrs</span>
      ),
      sortable: true,
    },
    {
      name: "Utilization %",
      width: "20%",
      selector: (row) => (
        <span style={{ fontWeight: 600 }}>{row.utilization}</span>
      ),
      sortable: true,
    },
    {
      name: "Client",
      width: "15%",
      selector: (row) => (
        <span style={{ fontWeight: 600 }}>{row.consultant_client}</span>
      ),
      sortable: true,
    },
  ];

  const total_hours_columns = [
    {
      name: "Client",
      width: "25%",
      selector: (row) => (
        <span style={{ fontWeight: 600 }}>{row.consultant_client}</span>
      ),
      sortable: true,
    },

    {
      name: "Activity Type",
      width: "25%",
      selector: (row) => (
        <span style={{ fontWeight: 600 }}>{row.activity_type}</span>
      ),
      sortable: true,
      style: {
        width: "200px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    },
    {
      name: "Consultant",
      width: "25%",
      selector: (row) => (
        <div className="user-details">
          <span style={{ fontWeight: 600 }}>
            {row.first_name} {row.last_name}
          </span>
        </div>
      ),
      sortable: true,
    },

    {
      name: "Total Hours Worked",
      width: "25%",
      selector: (row) => (
        <span style={{ fontWeight: 600 }}>{row.total_hours_work} hrs</span>
      ),
      sortable: true,
    },
  ];

  return (
    <div className="container tables-container">
      <StickyHeader />

      {/* Consultant Utilization Report  */}
      <div style={{ width: "90%" }}>
        <h1>Reports</h1>

        <div className="info">
          <h5>Generate Consultant Utilization Report</h5>
          <p className="small-text">
            Select the report frequency, date range, and view detailed hours
            worked by consultants, organized by client and activity.
          </p>
        </div>
        <div className="dropdown-container">
          <select>
            <option>Weekly</option>
            <option>Bi-weekly</option>
            <option>Monthly</option>
          </select>
          <select>
            <option>Alex Johnson</option>
            <option>Sarah Lee</option>
            <option>Michael Green</option>
            <option>Emma Taylor</option>
          </select>
        </div>

        <div className="date-container">
          <div className="start-date">
            <label htmlFor="start">Start date</label>
            <input type="date" id="start" name="trip-start" />
          </div>
          <div className="end-date">
            <label htmlFor="start">End date</label>
            <input type="date" id="start" name="trip-start" />
          </div>
        </div>

        <div className="btn-container">
          <button className="generate-report-btn">Generate Report</button>
        </div>
        <h3 style={{ fontWeight: 700 }}>Consultant Utilization Report</h3>
        <DataTable
          className="dataTables_wrapper"
          columns={reports_columns}
          data={dummyReports}
          pagination
          paginationPerPage={10}
          paginationRowsPerPageOptions={[10, 20, 30]}
          responsive
        />
      </div>
      {/* Client Hours Worked */}
      <div style={{ width: "90%" }}>
        <h3 style={{ fontWeight: 700 }}>Client Hours Worked</h3>
        <DataTable
          className="dataTables_wrapper"
          columns={total_hours_columns}
          data={dummyReports}
          pagination
          paginationPerPage={10}
          paginationRowsPerPageOptions={[10, 20, 30]}
          responsive
        />
      </div>
    </div>
  );
}

export default Reports;
