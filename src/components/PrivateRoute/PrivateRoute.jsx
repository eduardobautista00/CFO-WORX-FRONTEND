// ProtectedRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ element, allowedRoles }) => {
  const userRole = localStorage.getItem('role_name');
  const location = useLocation();

  if (!userRole) {
    // Redirect to login page if not authenticated
    return <Navigate to="/" state={{ from: location }} />;
  }

  if (!allowedRoles.includes(userRole)) {
    // Redirect to a "not authorized" page or home if the role is not allowed
    return <Navigate to="/" />;
  }

  return element;
};

export default ProtectedRoute;