import { useEffect, useState } from 'react';
import { Employee } from '../types/employee';


const useFilteredEmployees = (employees:Employee[], filterText:string) => {

  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>(employees);

  useEffect(() => {
    const filtered = filterText
    ? employees.filter((employee) =>
        `${employee.firstName} ${employee.lastName}`
          .toLowerCase()
          .includes(filterText.toLowerCase())
      )
    : employees;

    setFilteredEmployees(filtered);
  }, [employees, filterText]);

  return {filteredEmployees};
};

export default useFilteredEmployees;
