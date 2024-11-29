import React, { useState } from "react";
import DataTable from "react-data-table-component";
import StickyHeader from "../../SideBar/StickyHeader";
// import HeaderTest from "../../SideBar/HeaderTest";

import "./ConsultantList.css";

import man from "../../../assets/images/man.png";
import woman from "../../../assets/images/woman.png";

import edit_icon from "../../../assets/images/edit-icon.png";
import delete_icon from "../../../assets/images/reject-icon.png";
import view_icon from "../../../assets/images/view-icon.png";

import dummyConsultants from "./dummyData";
import dummyAlerts from "./dummyAlert";

import Modal from "../../Modal/Modal";

function ConsultantList() {
  const [viewModalData, setViewModalData] = useState(null);
  const [editModalData, setEditModalData] = useState(null);
  // const [addModalData, setAddModalData] = useState(null);

  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const openViewModal = (data) => {
    setViewModalData(data); // Set the row data (e.g., id and other details)
    setIsViewModalOpen(true); // Open the modal
  };

  const openEditModal = (data) => {
    setEditModalData(data); // Set the row data (e.g., id and other details)
    setIsEditModalOpen(true); // Open the modal
  };

  const openAddModal = () => {
    setIsAddModalOpen(true); // Open the modal
  };

  const closeAllModals = () => {
    setIsViewModalOpen(false);
    setIsEditModalOpen(false);
    setIsAddModalOpen(false);
  };

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
      width: "25%",
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
      width: "20%",
      selector: (row) =>
        <span style={{ fontWeight: 600 }}>{row.title}</span> || (
          <span style={{ fontWeight: 600 }}>N/A</span>
        ),
      sortable: true,
    },
    {
      name: "Status",
      width: "15%",
      selector: (row) => {
        if (row.status === "active") {
          return (
            <span style={{ fontWeight: 600, color: "#28A745" }}>Active</span>
          );
        } else if (row.pay_type === "inactive") {
          return (
            <span style={{ fontWeight: 600, color: "#DC3545" }}>Inactive</span>
          );
        }
        return "N/A";
      },
      sortable: true,
    },
    {
      name: "Action",
      width: "15%",
      selector: (row) => (
        <div>
          <img
            className="ml-2"
            src={view_icon}
            title="View User Details"
            alt="view"
            width="20"
            height="20"
            onClick={() => openViewModal(row)}
            style={{ cursor: "pointer" }}
          />
          <img
            className="ml-2"
            src={edit_icon}
            title="Edit User Details"
            alt="edit"
            width="20"
            height="20"
            onClick={() => openEditModal(row)}
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
      selector: (row) => (
        <div>
          <img
            className="ml-2"
            src={edit_icon}
            title="Edit User Details"
            alt="edit"
            width="20"
            height="20"
            onClick={() => openViewModal(row)}
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

      {isViewModalOpen && viewModalData && (
        <Modal isOpen={isViewModalOpen} onClose={closeAllModals}>
          <h2 style={{ marginBottom: "2rem", textAlign: "center" }}>
            View Consultant Details
          </h2>
          <div className="modal-container">
            <div className="details-1">
              <span>
                Title:
                <p style={{ fontWeight: 600 }}>{viewModalData.title}</p>
              </span>

              <span>
                Name:
                <p style={{ fontWeight: 600 }}>
                  {viewModalData.first_name} {viewModalData.last_name}
                </p>
              </span>

              <span>
                Hire Date:
                <p style={{ fontWeight: 600 }}> {viewModalData.hire_date}</p>
              </span>
              <span>
                Pay Type:
                <p style={{ fontWeight: 600 }}> {viewModalData.pay_type}</p>
              </span>
            </div>
            <div>
              <span>
                Email:
                <p style={{ fontWeight: 600 }}> {viewModalData.email}</p>
              </span>

              <span>
                Phone: <p>{viewModalData.phone}</p>
              </span>

              {viewModalData.status === "active" ? (
                <span>
                  Status:
                  <p style={{ fontWeight: 600, color: "#28A745" }}>Active</p>
                </span>
              ) : (
                <span>
                  <p style={{ fontWeight: 600, color: "#DC3545" }}>Inactive</p>
                </span>
              )}
            </div>
          </div>
        </Modal>
      )}

      {isEditModalOpen && editModalData && (
        <Modal isOpen={isEditModalOpen} onClose={closeAllModals}>
          <h2 style={{ marginBottom: "2rem", textAlign: "center" }}>
            View Consultant Details
          </h2>
          <form className="modal-container">
            <div className="details-1">
              <span>
                <label htmlFor="title">Title:</label>
                <br />
                <input type="text" name="title" value={editModalData.title} />
              </span>
              <span>
                <label htmlFor="first_name">First Name:</label>
                <input
                  type="text"
                  name="first_name"
                  value={editModalData.first_name}
                />
              </span>
              <span>
                <label htmlFor="last_name">Last Name:</label>
                <input
                  type="text"
                  name="last_name"
                  value={editModalData.last_name}
                />
              </span>

              <span>
                <label htmlFor="hire_date">Hire Date:</label>
                <input
                  type="text"
                  name="hire_date"
                  disabled
                  value={editModalData.hire_date}
                />
              </span>
              <span>
                <label htmlFor="pay_type">Pay Type:</label>
                <select name="pay_type">
                  <option value="hourly" selected>
                    Hourly
                  </option>
                  <option value="salary">Salary</option>
                </select>
              </span>
            </div>
            <div>
              <span>
                <label htmlFor="email">Email:</label>
                <input type="text" value={editModalData.email} name="email" />
              </span>

              <span>
                <label htmlFor="phone">Phone:</label>
                <input type="text" name="phone" value={editModalData.phone} />
              </span>

              <span>
                <label htmlFor="status">Status</label>
                <select name="status">
                  <option style={{ color: "#28A745" }} value="active" selected>
                    Active
                  </option>
                  <option style={{ color: "#DC3545" }} value="inactive">
                    Inactive
                  </option>
                </select>
              </span>
            </div>
          </form>
        </Modal>
      )}

      {isAddModalOpen && (
        <Modal isOpen={isAddModalOpen} onClose={closeAllModals}>
          <h2 style={{ marginBottom: "2rem", textAlign: "center" }}>
            Add Consultant
          </h2>
          <form className="modal-container">
            <div className="details-1">
              <span>
                <label htmlFor="title">Title:</label>
                <br />
                <input type="text" name="title" />
              </span>
              <span>
                <label htmlFor="first_name">First Name:</label>
                <input type="text" name="first_name" />
              </span>
              <span>
                <label htmlFor="last_name">Last Name:</label>
                <input type="text" name="last_name" />
              </span>

              <span>
                <label htmlFor="hire_date">Hire Date:</label>
                <input type="text" name="hire_date" disabled />
              </span>
              <span>
                <label htmlFor="pay_type">Pay Type:</label>
                <select name="pay_type">
                  <option value="hourly" selected>
                    Hourly
                  </option>
                  <option value="salary">Salary</option>
                </select>
              </span>
            </div>
            <div>
              <span>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" />
              </span>

              <span>
                <label htmlFor="phone">Phone:</label>
                <input type="text" name="phone" />
              </span>

              <span>
                <label htmlFor="status">Status</label>
                <select name="status">
                  <option style={{ color: "#28A745" }} value="active" selected>
                    Active
                  </option>
                  <option style={{ color: "#DC3545" }} value="inactive">
                    Inactive
                  </option>
                </select>
              </span>
            </div>
          </form>
        </Modal>
      )}

      {/* Consultant List */}
      <div style={{ width: "90%" }}>
        <h3 style={{ fontWeight: 700 }}>Consultant List</h3>
        <div className="btn-input-container">
          <input placeholder="Search Consultant" type="text" />
          <button onClick={openAddModal}>+ Add Consultant</button>
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
