import { useEffect, useState } from "react";
import { Employee } from "../types";
import { getEmployees, getEmployeesCleanUp } from "../helpers/employeeHelper";

export const useEmployee = () => {
   const [employees, setEmployees] = useState<Employee[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [error, setError] = useState<string>("");

   useEffect(() => {
      console.log("useEffect called");
      setIsLoading(true);
      getEmployees()
         .then(data => {
            console.log(data);
            setEmployees(data);
            setIsLoading(false);
         })
         .catch(err => {
            console.log(error);
            setError(err.message);
            setIsLoading(false);
         });

      return () => 
         getEmployeesCleanUp();
   }, []);
   
   return { employees, isLoading, error };
};

