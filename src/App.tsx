import React, { useCallback, useState } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeSearch from "./components/EmployeeSearch";
import SubmitButton from "./components/SubmitButton";
import useEmployee from "./hooks/useEmployee";
import useFilteredEmployees from "./hooks/useFilteredEmployees";
import useHandleLogToConsole from "./hooks/useHandleLogToConsole";
import styled from "@emotion/styled";
import "./App.css";
import Navbar from "./components/NavBar";
import LoaderComponent from "./components/Loader";
import {ErrorComponent} from "./components/Error";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  padding-top: 5rem;
  gap:1rem;
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

  // memoize onSearch function
  const onSearch = useCallback((searchText: string) => {
    setFilterText(searchText);
  }, []);

  const onKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.currentTarget.blur();
      handleLogToConsole();
    }
  }, [handleLogToConsole]);

  if (isLoading) return <LoaderComponent/>;
  else if (error) return <ErrorComponent message={error}/>;

  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <SearchContainer>
          <EmployeeSearch onSearch={onSearch} onKeyDown={onKeyDown}/>
          <SubmitButton handleClick={handleLogToConsole} />
        </SearchContainer>
        <EmployeeList employees={filterText ? filteredEmployees : employees} />
      </Container>
    </React.Fragment>
  );
}

export default App;
