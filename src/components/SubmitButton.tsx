import { useState } from "react";
import { Employee } from "../types/employee";
import { department } from "../types/employee";
import chalk from "chalk";

interface ButtonProps {
  employees: Employee[];
}

const printToConsole = (employee: Employee) => {
  const name = `${employee.firstName} ${employee.lastName}`;
  const employeeData =
    employee.department === department.FINANCE
      ? `${name} - ${employee.email}`
      : `${name} - ${employee.tel}`;
  console.log(chalk.green(employeeData));
};

const SubmitButton: React.FC<ButtonProps> = ({ employees }) => {
  const [clickCount, setClickCount] = useState<number>(0);

  const handleClick = () => {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();
    const timestamp = `${time} ${date}`;

    console.log(
      chalk.blue(`\nLog to console #${clickCount + 1} @ ${timestamp}`)
    );

    setClickCount(clickCount + 1);
    employees.map(printToConsole);
  };

  return (
    <div>
      <button onClick={handleClick} disabled={!employees.length}>
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;
