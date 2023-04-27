import { useState, useCallback } from "react";
import chalk from "chalk";
import { Employee } from "../types";
import { getEmployeeResultByDept } from "../helpers";

const printToConsole = (employee: Employee) => {
  const employeeData = getEmployeeResultByDept(employee);
  console.log(chalk.green(employeeData));
};

export const useHandleLogToConsole = (employees: Employee[]) => {
  const [clickCount, setClickCount] = useState<number>(0);
  const handleLogToConsole = useCallback(() => {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();
    const timestamp = `${time} ${date}`;
    console.log(
      chalk.blue(`\nLog to console #${clickCount + 1} @ ${timestamp}`)
    );
    setClickCount(clickCount + 1);
    employees.length === 0
      ? console.log(chalk.red("No Employees Found!"))
      : employees.map(printToConsole);
  }, [clickCount, employees]);

  return { handleLogToConsole };
};
