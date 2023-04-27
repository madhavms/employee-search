import styled from "@emotion/styled";
import { Employee } from "../types";
import { ErrorBanner } from "./Error";
import { getEmployeeResultByDept } from "../helpers";

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

export const EmployeeList: React.FC<ListProps> = ({ employees }) => (
  <>
    {!employees.length && <ErrorBanner>No employees found!</ErrorBanner>}
    {!!employees.length && (
      <List>
        {employees.map((employee) => (
          <ListItem key={employee.id}>
            {getEmployeeResultByDept(employee)}
          </ListItem>
        ))}
      </List>
    )}
  </>
);
