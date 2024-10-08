import React, { useState, useEffect } from "react";
import axiosInstance from "../../../../axiosInstance";
import Swal from "sweetalert2";
import { useNavigate, useParams } from 'react-router-dom';
import check from "../../../assets/images/check.png";

function EditBranch() {
    const { branchId } = useParams();
    const [branch, setBranch] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState(''); // Changed to be a dropdown for Australian states
    const [zipCode, setZipCode] = useState('');
    const [country, setCountry] = useState('Australia'); // Set default country to Australia
    const [openTime, setOpenTime] = useState('');
    const [closeTime, setCloseTime] = useState('');
    const [status, setStatus] = useState('Closed');

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const australianStates = [
        "New South Wales",
        "Victoria",
        "Queensland",
        "Western Australia",
        "South Australia",
        "Tasmania",
        "Australian Capital Territory",
        "Northern Territory"
    ];


    //assuming these are th data from database
    useEffect(() => {
        // Fetch branches
        const fetchBranches = async () => {

            try {
                const response = await axiosInstance.get(`/branch/${branchId}`);
                const { branch_name, branch_address, operating_hours, status } = response.data;
                setBranch(branch_name);
                const addressParts = branch_address.split(", ");
                setAddressLine1(addressParts[0]);
                setAddressLine2(addressParts[1]);
                setCity(addressParts[2]);
                setState(addressParts[3]);
                setZipCode(addressParts[4]);
                setCountry(addressParts[5]);
                setOpenTime(operating_hours.open);
                setCloseTime(operating_hours.close);
                setCountry('Australia');
                setStatus(status);
            } catch (error) {
                console.error("Error fetching branches:", error);
            }

        };
        fetchBranches();
    }, [branchId]);

    const updateBranch = async (e) => {
        e.preventDefault();

        const branchAddress = `${addressLine1}, ${addressLine2}, ${city}, ${state}, ${zipCode}, ${country}`;

        const operatingHours = {
            open: openTime,
            close: closeTime
        };

        const updatedBranchData = {
            branch_name: branch,
            branch_address: branchAddress,
            operating_hours: operatingHours,
            status: status
        };
        //add validation
        if (!branch || !city || !state || !zipCode || !country || !openTime || !closeTime) {
            setError("All fields are required.");
            setTimeout(() => setError(""), 3000)
            return;
        }

        if (openTime >= closeTime) {
            setError("Invalid operating hours. Open time should be before close time.");
            setTimeout(() => setError(""), 3000)
            return;
        }
        try {
            await axiosInstance.put(`/update-branch/${branchId}`, updatedBranchData);
            Swal.fire({
                title: "Branch Updated Successfully",
                text: `${branch} has been updated in the system.`,
                imageUrl: check,
                imageWidth: 100,
                imageHeight: 100,
                confirmButtonText: "OK",
                confirmButtonColor: "#0ABAA6",
            }).then(() => {
                navigate("/branches");
            });
        } catch (error) {
            console.error("Error updating branch:", error);
            setError("An error occurred while updating the branch.");
        }
    };



    return (
        <div className="container">
            <h3>Update  Branch</h3>
            <div className="container-content">
                <form onSubmit={updateBranch}>
                    <div style={{ position: "relative", textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                        {error && <div className="alert alert-danger" style={{ position: "absolute", left: "25%", top: "-10px", width: "50%", padding: "4px" }}>{error}</div>}
                    </div>
                    <div className="d-flex justify-content-between ml-5 mr-5 pt-4 mt-3">
                        <div className="form-group">
                            <label>Branch Name:</label>
                            <input type="text" className="form-control" value={branch} onChange={(e) => setBranch(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Address Line 1:</label>
                            <input type="text" className="form-control" value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Address Line 2:</label>
                            <input type="text" className="form-control" value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)} />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between ml-5 mr-5">
                        <div className="form-group">
                            <label>City:</label>
                            <input type="text" className="form-control" value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>State:</label> <br />
                            <select  value={state} onChange={(e) => setState(e.target.value)}>
                                <option value="">Select State</option>
                                {australianStates.map((state, index) => (
                                    <option key={index} value={state}>{state}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Zip Code:</label>
                            <input type="number" className="form-control" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between ml-5">
                        <div className="form-group">
                            <label>Country:</label>
                            <input type="text" disabled className="form-control" value={country} />
                        </div>
                        <div className="form-group">
                            <label>Opening Time:</label>
                            <input type="time" className="form-control operating-time" value={openTime} onChange={(e) => setOpenTime(e.target.value)} />
                        </div>
                         {/* custom spacer */}
                        <div className="form-group mr-5">
                            <input
                                disabled
                                className="form-control"
                                style={{ opacity: "0" }}
                            />
                        </div>
                    </div>
                    <div className="d-flex ml-5">

                    </div>
                    <div className="d-flex justify-content-between ml-5">
                        <div className="form-group ">
                            <label>Status:</label><br />
                            <select value={status} onChange={(e) => setStatus(e.target.value)} className="branch-status">
                                <option value="Closed">Closed</option>
                                <option value="Open">Open</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Closing Time:</label>
                            <input type="time" className="form-control operating-time" value={closeTime} onChange={(e) => setCloseTime(e.target.value)} />
                        </div>
                        {/* custom spacer */}
                        <div className="form-group mr-5">
                            <input
                                disabled
                                className="form-control"
                                style={{ opacity: "0" }}
                            />
                        </div>
                    </div>
                    <button className='submit-btn mb-4 mt-4' type="submit">SAVE</button>
                </form>
            </div>
        </div>
    );
}

export default EditBranch;
