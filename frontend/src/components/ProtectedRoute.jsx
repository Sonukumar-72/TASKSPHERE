import React from "react";
import { Navigate } from "react-router-dom";

/**
 * A simple route guard that redirects to /login if no JWT token is found.
 * Wrap any route that requires authentication with this component.
 */
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
