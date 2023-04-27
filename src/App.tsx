import { Fragment, useCallback, useState, KeyboardEvent } from "react";
import styled from "@emotion/styled";
import {
   EmployeeList,
   ErrorComponent,
   EmployeeSearch,
   Loader,
   Navbar,
   SubmitButton,
} from "./components";
import {
   useEmployee,
   useFilteredEmployees,
   useHandleLogToConsole,
} from "./hooks";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  padding-top: 5rem;
  gap: 1rem;
`;
const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;

  @media (max-width: 570px) {
    flex-direction: column;
  }
`;

function App() {
   const { employees, isLoading, error } = useEmployee();
   const [filterText, setFilterText] = useState<string>("");
   const { filteredEmployees } = useFilteredEmployees(employees, filterText);
   const { handleLogToConsole } = useHandleLogToConsole(filteredEmployees);

   const onSearch = useCallback((searchText: string) => {
      setFilterText(searchText);
   }, []);
   const onKeyDown = useCallback(
      (event: KeyboardEvent<HTMLInputElement>) => {
         if (event.key === "Enter") {
            event.currentTarget.blur();
            handleLogToConsole();
         }
      },
      []
   );

   return (
    <Fragment>
      <Navbar />
      {isLoading && <Loader />}
      {error && <ErrorComponent message={error} />}
      {!isLoading && !error && (
        <Container>
          <SearchContainer>
            <EmployeeSearch onSearch={onSearch} onKeyDown={onKeyDown} />
            <SubmitButton handleClick={handleLogToConsole} />
          </SearchContainer>
          <EmployeeList
             employees={filterText ? filteredEmployees : employees}
          />
        </Container>
      )}
    </Fragment>
   );
}

export default App;

