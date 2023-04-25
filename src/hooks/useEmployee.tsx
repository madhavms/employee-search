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
        const { data } = await axios("/employees.json");
        setError(null);
        setEmployees(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false)
        setError("Unable to fetch employees data.");
      }
    };

    getEmployees();
  }, []);

  return {employees, isLoading, error}
};

export default useEmployee;