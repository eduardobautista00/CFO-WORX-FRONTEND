import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import login_image_2 from '../../assets/images/login_image_2.png';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    // Create a login function
    const login = (event) => {
        event.preventDefault();
        console.log(`Login attempt with username: ${username}, password: ${password}`);
    };

    // Handle dropdown change
    const handleRoleChange = (event) => {
        setIsAdmin(event.target.value === 'admin');
    };

    return (
        <div className="d-flex align-items-center justify-content-center custom-login">
            <div className="row">
                <div className="col-lg-6 col-md-6 custom-col">
                    <div className="header-title">
                        <h3>Welcome to Revive</h3>
                        <h3>Pharmacy Price Ticket Generator</h3>
                    </div>
                    <div className='bg-image'>
                        <img className='img-fluid login_image' src={login_image_2} alt="React logo" />
                    </div>
                </div>

                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div className="card p-4" style={{ width: '450px' }}>
                        <h2 className="text-center mb-4">{isAdmin ? 'ADMIN LOGIN' : 'STAFF LOGIN'}</h2>
                        <form onSubmit={login}>
                            <label htmlFor="username">Username</label><br />
                            <div className="form-group mb-3">
                                <input
                                    type="text"
                                    className="form-control-lg w-100 mb-2"
                                    value={username}
                                    placeholder="Username"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <label htmlFor="password">Password</label><br />
                            <div className="form-group mb-3">
                                <input
                                    type="password"
                                    className="form-control-lg w-100 mb-2"
                                    value={password}
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="d-flex">
                                <h6>
                                    Log in as
                                    &nbsp;
                                    <select value={isAdmin ? 'admin' : 'staff'} onChange={handleRoleChange}>
                                        <option value="admin">Admin</option>
                                        <option value="staff">Staff</option>
                                    </select>
                                </h6>
                            </div>

                            <div className='d-flex justify-content-center'>
                                <button type="submit" className="btn btn-primary mt-2 custom-btn">LOGIN</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
