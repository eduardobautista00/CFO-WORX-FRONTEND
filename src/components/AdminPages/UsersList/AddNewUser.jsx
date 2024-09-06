import React, { useState, useEffect} from "react";
import axiosInstance from "../../../../axiosInstance"; // Adjust the import path according to your project structure

function AddNewUser() {
  const [last_name, setLastname] = useState("");
  const [first_name, setFirstname] = useState("");
  const [branch_name, setBranch] = useState("");
  const [branch, setBranches] = useState([]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [role_name, setRole] = useState(""); 
  const [email, setEmail] = useState("");
  const [sex, setSex] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    // Fetch branches 
    const fetchBranches = async () => {
      try {
        const response = await axiosInstance.get("/branches");
        setBranches(response.data);
      } catch (error) {
        console.error("Error fetching branches:", error);
      }
    };
    fetchBranches();
  }, []);

  const validateForm = () => {
    if (
      !last_name ||
      !first_name ||
      !branch_name ||
      !password ||
      !confirmPassword ||
      !email ||
      !sex ||
      !username
    ) {
      return "All fields are required.";
    }
    if (password !== confirmPassword) {
      return "Passwords do not match.";
    }
    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return "Invalid email format.";
    }
    
    // if (!role) {
    //   return 'Role is required.';
    // }
    return "";
  };

  const addUser = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await axiosInstance.post("/addUser", {
        last_name,
        first_name,
        branch_name,
        password,
        email,
        sex,
        username,
        // role_name,
      });

      setSuccessMessage("User added successfully!");
      setError("");
      // Reset form fields after successful submission
      setLastname("");
      setFirstname("");
      setBranch("");
      setPassword("");
      setConfirmPassword("");
      setEmail("");
      setSex("");
      setUsername("");
      // setRole("");
    } catch (error) {
      console.error(
        "Error adding user:",
        error.response ? error.response.data : error.message
      );
      // Display more detailed error message if available
      setError(
        error.response && error.response.data
          ? error.response.data.message ||
              "Failed to add user. Please try again."
          : "Failed to add user. Please try again."
      );
      setSuccessMessage("");
    }
  };

  return (
    <div className="container">
      <h3>Add New User</h3>
      <div className="container-content">
        <form onSubmit={addUser}>
          {error && <div className="alert alert-danger">{error}</div>}
          {successMessage && (
            <div className="alert alert-success">{successMessage}</div>
          )}

          <div className="d-flex justify-content-between ml-5 mr-5 pt-4">
            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                className="form-control"
                value={last_name}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                className="form-control"
                value={first_name}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Sex:</label>
              <br />
              <select value={sex} onChange={(e) => setSex(e.target.value)}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div className="d-flex justify-content-between ml-5 mr-5">
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex justify-content-between ml-5">
          <div className="form-group">
              <label>Branch:</label><br />
              <select value={branch_name} onChange={(e) => setBranch(e.target.value)}>
                <option value="">Select Branch</option>
                {branch.map((branch) => (
                  <option key={branch.id} value={branch.branch_name}>
                    {branch.branch_name}
                  </option>
                ))}
              </select>
            </div>

            {/* <div className="form-group">
              <label>Role:</label>
              <br />
              <select
                value={role_name}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select Role</option>
                {roles.map((role, index) => (
                  <option key={index} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div> */}

            <div className="form-group mr-5">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <button className="submit-btn mb-4 mt-4" type="submit">
            SAVE
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNewUser;