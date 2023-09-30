import { NavLink, Outlet } from "react-router-dom";

const Employee = () => {
  return (
    <div>
      <h3>Employee Page</h3>
      <NavLink to="empdetails">Employee Details page</NavLink>
      <NavLink to="admin">Admin Details page</NavLink>
      <Outlet/>
    </div>
  );
};

export default Employee;
