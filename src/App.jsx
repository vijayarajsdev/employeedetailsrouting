import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
// import About from './Components/About';
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Error from "./Components/Error";
import EmployeeDetails from "./Components/EmployeeDetails";
import Admin from "./Components/Admin";
import Employee from "./Components/Employee";
import React from "react";

const AboutPage = React.lazy(() => import("./Components/About"));
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route
          path="/about"
          element={
            <React.Suspense fallback="Loading....">
              <AboutPage />
            </React.Suspense>
          }
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/employee" element={<Employee />}>
          <Route index element={<Admin />}></Route>
          <Route path="empdetails" element={<EmployeeDetails />}></Route>
          <Route
            path=":empid/:empname/:empdesignation"
            element={<EmployeeDetails />}
          ></Route>
          <Route path="admin" element={<Admin />}></Route>
        </Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
};

export default App;
