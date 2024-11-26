import React from "react";
import DataTable from "react-data-table-component";
import StickyHeader from "../../SideBar/StickyHeader";

import "./ConsultantList.css";

import man from "../../../assets/images/man.png";
import woman from "../../../assets/images/woman.png";

import edit_icon from "../../../assets/images/edit-icon.png";
import delete_icon from "../../../assets/images/reject-icon.png";

import dummyConsultants from "./dummyData";
import dummyAlerts from "./dummyAlert";

function ConsultantList() {
  const consultant_columns = [
    {
      name: "Name",
      width: "20%",
      selector: (row) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            className="profile-image"
            src={row.sex === "Male" ? man : woman}
            alt={row.last_name}
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />

          <div className="user-details">
            <span style={{ fontWeight: 600 }}>
              {row.first_name} {row.last_name}
            </span>
          </div>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Email",
      width: "20%",
      selector: (row) =>
        <span style={{ fontWeight: 600 }}>{row.email}</span> || (
          <span style={{ fontWeight: 600 }}>N/A</span>
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
      name: "Title",
      width: "15%",
      selector: (row) =>
        <span style={{ fontWeight: 600 }}>{row.title}</span> || (
          <span style={{ fontWeight: 600 }}>N/A</span>
        ),
      sortable: true,
    },
    {
      name: "Hourly/Salary",
      width: "15%",
      selector: (row) =>
        <span style={{ fontWeight: 600 }}>{row.compensation_type}</span> || (
          <span style={{ fontWeight: 600 }}>N/A</span>
        ),
      sortable: true,
    },
    {
      name: "Bill Rate",
      width: "15%",
      selector: (row) => {
        if (row.compensation_type === "Hourly") {
          return <span style={{ fontWeight: 600 }}>${row.bill_rate}/hr</span>; // Format hourly rate
        } else if (row.compensation_type === "Salary") {
          return (
            <span style={{ fontWeight: 600 }}>${row.bill_rate}/month</span>
          );
        }
        return "N/A";
      },
      sortable: true,
    },
    {
      name: "Action",
      width: "15%",
      selector: () => (
        <div>
          <img
            className="ml-2"
            src={edit_icon}
            title="Edit User Details"
            alt="edit"
            width="20"
            height="20"
            style={{ cursor: "pointer" }}
          />

          <img
            className="ml-2"
            src={delete_icon}
            title="Delete User"
            alt="delete"
            width="20"
            height="20"
            style={{ cursor: "pointer" }}
          />
        </div>
      ),
      sortable: false,
    },
  ];

  const utilization_columns = [
    {
      name: "Name",
      width: "30%",
      selector: (row) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            className="profile-image"
            src={row.sex === "Male" ? man : woman}
            alt={row.last_name}
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />

          <div className="user-details">
            <span style={{ fontWeight: 600 }}>
              {row.first_name} {row.last_name}
            </span>
          </div>
        </div>
      ),
      sortable: true,
    },

    {
      name: "Expected Work Hours per week",
      width: "30%",
      selector: (row) => (
        <span style={{ fontWeight: 600 }}>
          {row.weekly_hours_expectation}hrs
        </span>
      ),
      sortable: true,
    },
    {
      name: "Actual Utilzation",
      width: "20%",
      selector: (row) =>
        row.actual_utilization ? (
          <span style={{ fontWeight: 600 }}>{row.actual_utilization}</span>
        ) : (
          <span style={{ fontWeight: 600 }}>N/A</span>
        ),
      sortable: true,
    },
    {
      name: "Action",
      width: "10%",
      selector: () => (
        <div>
          <img
            className="ml-2"
            src={edit_icon}
            title="Edit User Details"
            alt="edit"
            width="20"
            height="20"
            style={{ cursor: "pointer" }}
          />

          <img
            className="ml-2"
            src={delete_icon}
            title="Delete User"
            alt="delete"
            width="20"
            height="20"
            style={{ cursor: "pointer" }}
          />
        </div>
      ),
      sortable: false,
    },
  ];

  const alerts_columns = [
    {
      name: "Email",
      width: "30%",
      selector: (row) =>
        <span style={{ fontWeight: 600 }}>{row.consultant_email}</span> || (
          <span style={{ fontWeight: 600 }}>N/A</span>
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
      name: "Alert Days",
      width: "20%",
      selector: (row) => (
        <span style={{ fontWeight: 600 }}>{row.alert_days}</span>
      ),
      sortable: true,
    },
    {
      name: "Alert Message",
      width: "30%",
      selector: (row) => (
        <span style={{ fontWeight: 600 }}>{row.alert_message}</span>
      ),
      sortable: true,
    },
    {
      name: "Action",
      width: "10%",
      selector: () => (
        <div>
          <img
            className="ml-2"
            src={edit_icon}
            title="Edit User Details"
            alt="edit"
            width="20"
            height="20"
            style={{ cursor: "pointer" }}
          />

          <img
            className="ml-2"
            src={delete_icon}
            title="Delete User"
            alt="delete"
            width="20"
            height="20"
            style={{ cursor: "pointer" }}
          />
        </div>
      ),
      sortable: false,
    },
  ];

  return (
    <div className="container tables-container">
      <StickyHeader />

      {/* Consultant List */}
      <div style={{ width: "90%" }}>
        <h3 style={{ fontWeight: 700 }}>Consultant List</h3>
        <div className="btn-input-container">
          <input placeholder="Search Consultant" type="text" />
          <button> + Add Consultant</button>
        </div>
        <DataTable
          className="dataTables_wrapper"
          columns={consultant_columns}
          data={dummyConsultants}
          pagination
          paginationPerPage={10}
          paginationRowsPerPageOptions={[10, 20, 30]}
          responsive
        />
      </div>

      {/* Utilization Table */}
      <div style={{ width: "90%" }}>
        <div className="btn-input-container">
          <h3 style={{ fontWeight: 700 }}>Consultant Utilization</h3>
          <button> + Set Utilization</button>
        </div>
        <DataTable
          className="dataTables_wrapper"
          columns={utilization_columns}
          data={dummyConsultants}
          pagination
          paginationPerPage={10}
          paginationRowsPerPageOptions={[10, 20, 30]}
          responsive
        />
      </div>

      {/* Alerts Table */}
      <div style={{ width: "90%" }}>
        <div className="btn-input-container">
          <h3 style={{ fontWeight: 700 }}>Consultant Alert</h3>
          <button> + Add Alert</button>
        </div>
        <DataTable
          className="dataTables_wrapper"
          columns={alerts_columns}
          data={dummyAlerts}
          pagination
          paginationPerPage={10}
          paginationRowsPerPageOptions={[10, 20, 30]}
          responsive
        />
      </div>
    </div>
  );
}

export default ConsultantList;
