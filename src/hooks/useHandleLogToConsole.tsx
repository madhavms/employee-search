import { Employee } from "../types/employee";
import chalk from "chalk";
import { useState } from "react";
import { getEmployeeResultByDept } from "../utils/employeeUtils";

const printToConsole = (employee: Employee) => {
  const employeeData = getEmployeeResultByDept(employee);
  console.log(chalk.green(employeeData));
};

const useHandleLogToConsole = (employees: Employee[]) => {
  const [clickCount, setClickCount] = useState<number>(0);

  const handleLogToConsole = () => {
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
  };

  return { handleLogToConsole };
};

export default useHandleLogToConsole;
