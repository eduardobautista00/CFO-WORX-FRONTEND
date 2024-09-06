import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "../../../App.css";
import "font-awesome/css/font-awesome.min.css";
import view_icon from "../../../assets/images/view_icon.png";
import edit_icon from "../../../assets/images/edit_icon.png";
import delete_icon from "../../../assets/images/delete_icon.png";
import man from "../../../assets/images/man.png";
import woman from "../../../assets/images/woman.png";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import axiosInstance from "../../../../axiosInstance";

function UsersList() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    // Fetch user data after component mounts
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get('/users');
        setUsers(response.data); // Adjust this according to your API response
      } catch (error) {
        console.error("Error fetching users:", error);
        if (error.response && error.response.status === 401) {
          console.error("Unauthorized access. Please login.");
          navigate('/login'); // Redirect to login page if unauthorized
        }
      }
    };
    fetchUsers();
  }, [navigate]);
  // View modal(user)
  const handleViewClick = (users) => {
    setSelectedUser(users);
    setShowModal(true);
  };

  // Close view modal(user)
  const handleCloseModal = () => {
    setShowModal(false);
  };

  //handle deleting of user
  const handleDeleteUserClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this? This action can’t be undone",
      showCancelButton: true,
      confirmButtonColor: "#EC221F",
      cancelButtonColor: "#00000000",
      cancelTextColor: "#000000",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        container: "custom-container",
        confirmButton: "custom-confirm-button",
        cancelButton: "custom-cancel-button",
        title: "custom-swal-title",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Success!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#0ABAA6",
          customClass: {
            confirmButton: "custom-success-confirm-button",
            title: "custom-swal-title",
          },
        });
      }
    });
  };

  // Table columns
  const columns = [
    {
      name: "Name",
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
          {row.first_name}{" "}
          {row.last_name}
        </div>
      ),
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email || "N/A", // Handle cases where email might be undefined
      sortable: true,
    },
    {
      name: "Username",
      selector: (row) => row.username || "N/A", // Handle cases where username might be undefined
      sortable: true,
    },
    {
      name: "Branch",
      selector: (row) => (row.branch && row.branch.branch_name) || "N/A", // Adjust according to your data structure
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div>
          <img
            src={view_icon}
            title="View User Details"
            alt="view"
            width="25"
            height="25"
            onClick={() => handleViewClick(row)} 
            style={{ cursor: "pointer" }}
          />
          <img
            className="ml-3"
            src={edit_icon}
            title="Edit User Details"
            onClick={() => navigate("/edit-user")}
            alt="edit"
            width="25"
            height="25"
          />
          <img
            className="ml-3"
            src={delete_icon}
            title="Delete User"
            alt="delete"
            width="25"
            height="25"
            onClick={handleDeleteUserClick}
          />
        </div>
      ),
      sortable: false,
    },
  ];


  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-6">
          <h3>Users List</h3>
          <div className="top-filter">
            <select name="" id="filter">
              <option value="">All Users</option>
              <option value="">Staffs</option>
              <option value="">Admins</option>
            </select>
            <input id="search-bar" type="text" placeholder="Search" />
            <button
              onClick={() => navigate("/add-new-user")}
              className="btn btn-primary float-end add-user-btn"
            >
              <i className="fa fa-plus"></i> Add New User
            </button>
          </div>
          <div className="container-content">
            <DataTable
              className="dataTables_wrapper"
              columns={columns}
              data={users}
              pagination
              paginationPerPage={5}
              paginationRowsPerPageOptions={[5, 10, 20]}
            />

          </div>
        </div>
      </div>

      {/* View User Modal */}
      {selectedUser && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>User Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="profile-container">
              <img
                src={selectedUser.sex === 'Male' ? man : woman}
                alt={selectedUser.last_name}
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <h2>{selectedUser.first_name} {selectedUser.last_name}</h2>
              <div className="user-details">
                <h5>
                  Username:<p>{selectedUser.username}</p>
                </h5>
                <h5>
                  {/* Role: <p>{selectedUser.role_name}</p> */}
                </h5>
                <h5>
                  Branch: <p>{selectedUser.branch_name}</p>
                </h5>
                <h5>
                  Email:<p>{selectedUser.email}</p>
                </h5>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}

export default UsersList;