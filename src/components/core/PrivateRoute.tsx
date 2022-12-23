import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => (
  <>{localStorage.getItem("token") ? <Outlet /> : <Navigate to="/login" />}</>
);

export default PrivateRoute;
