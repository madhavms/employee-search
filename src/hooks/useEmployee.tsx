import { useEffect, useState } from "react";
import { Employee } from "../types/employee";
import axios from "axios";

const useEmployee = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getEmployees = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios("/employees.json");
        setIsLoading(false);
        setError(null);
        setEmployees(data);
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