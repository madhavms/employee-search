import { Employee, department } from "../types/employee";
import { NoEmployeesFound } from "./Error";

interface ListProps {
  employees: Employee[];
}

const EmployeeList: React.FC<ListProps> = ({ employees }) => {

  if (!employees.length) {
    return <NoEmployeesFound />;
  }

  return (
    <div style={{display:'flex', flexDirection:'column', minHeight:'300px'}}>
      {employees.length ? (
        <ol>
          {employees.map((employee) => {
            const name = `${employee.firstName} ${employee.lastName}`;
            const result =
              employee.department === department.FINANCE
                ? `${name} - ${employee.email}`
                : `${name} - ${employee.tel}`;
            return <li key={employee.id}>{result}</li>;
          })}
        </ol>
      ) : (
        <NoEmployeesFound />
      )}
    </div>
  );
};

export default EmployeeList;
