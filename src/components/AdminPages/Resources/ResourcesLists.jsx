import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "../../../App.css";
import "font-awesome/css/font-awesome.min.css";
import check from "../../../assets/images/check.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axiosInstance from "../../../../axiosInstance";
import { useLoader } from "../../Loaders/LoaderContext";

function ResourcesLists() {
  const [search, setSearch] = useState("");
  const { setLoading } = useLoader();
  const navigate = useNavigate();
  
  
 //create a data for the array columns
  const data = [
    {
      title: "Resource 1",
      description: "sample description",
      link: "http://localhost:5173/src/assets/images/sample_pdf.pdf",
      author: "John User",
      icon: <img src={check} alt="Check Icon" />,
    },
    {
      title: "Resource 2",
      description: "sample description",
      link: "http://localhost:5173/src/assets/images/sample_pdf.pdf",
      author: "James Rogan",
      icon: <img src={check} alt="Check Icon" />,
    },
    {
      title: "Resource 3",
      description: "sample description",
      link: "http://localhost:5173/src/assets/images/sample_pdf.pdf",
      author: "Jane Doe",
      icon: <img src={check} alt="Check Icon" />,
    },
    {
      title: "Resource 4",
      description: "sample description",
      link: "http://localhost:5173/src/assets/images/sample_pdf.pdf",
      author: "Ari El",
      icon: <img src={check} alt="Check Icon" />,
    },
];


  const columns = [
    {
      name: "Title",
      selector: (data) => data.title || "N/A",
      sortable: true,
    },
    {
        name: "Description",
        selector: (data) => data.description || "N/A",
        sortable: true,
      },
      {
        name: "Link",
        selector: (data) => data.link || "N/A",
        sortable: true,
      },
      {
        name: "Author",
        selector: (data) => data.author || "N/A",
        sortable: true,
      },
  
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-6">
          <h3>Resources Lists</h3>
          <div className="top-filter">
            <input
              id="search-bar"
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={() => navigate("/resources")}
              className="btn btn-primary float-end add-user-btn"
            >
              <i className="fa fa-plus"></i> Add New Resource
            </button>
          </div>

          <div className="container-content">
            <DataTable
              className="dataTables_wrapper"
              columns={columns}
              data={data}
              pagination
              paginationPerPage={10}
              paginationRowsPerPageOptions={[10, 20]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourcesLists;