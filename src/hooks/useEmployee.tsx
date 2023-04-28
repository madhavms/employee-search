import { useEffect, useState } from "react";
import axios from "axios";
import { Employee } from "../types";

export const useEmployee = () => {
   const [employees, setEmployees] = useState<Employee[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [error, setError] = useState<string>("");

   useEffect(() => {
      const abortController = new AbortController();
      const signal = abortController.signal;

      const getEmployees = async () => {
         try {
            const { data } = await axios(
               process.env.REACT_APP_EMPLOYEE_DATA_PATH
                  ? `${process.env.REACT_APP_EMPLOYEE_DATA_PATH}`
                  : "/employees.json",
               { signal}
            );
            setError("");
            setEmployees(data);
         } catch (err) {
            setError("Unable to fetch employees data.");
         } finally {
            setIsLoading(false);
         }
      };
      getEmployees();
      return () => {
         abortController.abort();
      };
   }, []);
   return { employees, isLoading, error };
};

