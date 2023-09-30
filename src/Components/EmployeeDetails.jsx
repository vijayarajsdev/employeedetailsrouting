import { useParams } from "react-router-dom";

const EmployeeDetails = () => {
    const params = useParams();
  return (
    <div>
      <h3>Employee Details Page: {params.empid}</h3>
      <p>{params.empname}</p>
      <p>{params.empdesignation}</p>
    </div>
  );
};

export default EmployeeDetails;
