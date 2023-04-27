import { useEffect, useState } from "react";
import axios from "axios";
import { Employee } from "../types";

export const useEmployee = () => {
   const [employees, setEmployees] = useState<Employee[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [error, setError] = useState<string>("");

   useEffect(() => {
      let isMounted = true;
      const getEmployees = async () => {
         try {
            const { data } = await axios(
               process.env.REACT_APP_EMPLOYEE_DATA_PATH
                  ? `${process.env.REACT_APP_EMPLOYEE_DATA_PATH}`
                  : "/employees.json"
            );
            if(isMounted) {
               setError("");
               setEmployees(data);
            }
            
         } catch (err) {
            if(isMounted)
               setError("Unable to fetch employees data.");
         } finally {
            if(isMounted)
               setIsLoading(false);
         }
      };
      getEmployees();

      return () => {
         isMounted = false;
      };
   }, []);

   return { employees, isLoading, error };
};

