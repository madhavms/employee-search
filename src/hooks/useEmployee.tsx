import { useEffect, useState } from "react";
import { Employee } from "../types/employee";
import axios from "axios";

const useEmployee = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const { data } = await axios(
          process.env.REACT_APP_EMPLOYEE_DATA_PATH
            ? `${process.env.REACT_APP_EMPLOYEE_DATA_PATH}`
            : "/employees.json"
        );
        setError(null);
        setEmployees(data);
      } catch (err: any) {
        setError("Unable to fetch employees data.");
      } finally {
        setIsLoading(false);
      }
    };

    getEmployees();
  }, []);

  return { employees, isLoading, error };
};

export default useEmployee;
