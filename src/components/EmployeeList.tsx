import { Employee } from "../types";
import { getEmployeeResultByDept } from "../utils";
import { ErrorBanner, ErrorComponent } from "./Error";
import styled from "@emotion/styled";

interface ListProps {
  employees: Employee[];
}

const List = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  font-size: 1.2rem;
  line-height: 1.5;
  color: #333;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const EmployeeList: React.FC<ListProps> = ({ employees }) => {
  if (!employees.length) {
    return <ErrorBanner>No employees found!</ErrorBanner>
  }

  return (
    <List>
      {employees.map((employee) => {
        return (
          <ListItem key={employee.id}>
            {getEmployeeResultByDept(employee)}
          </ListItem>
        );
      })}
    </List>
  );
};

