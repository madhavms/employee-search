import { useState } from "react";
import "./App.css";
import EmployeeList from "./components/EmployeeList";
import EmployeeSearch from "./components/EmployeeSeach";
import SubmitButton from "./components/SubmitButton";
import useEmployee from "./hooks/useEmployee";
import useFilteredEmployees from "./hooks/useFilteredEmployees";

function App() {
  const { employees, isLoading, error } = useEmployee();

  const [filterText, setFilterText] = useState<string>("");

  const { filteredEmployees } = useFilteredEmployees(employees, filterText);

  // rr - rerender child ? change method name to refect what it is doing
  const onSearch = (searchText: string) => {
    setFilterText(searchText);
  };

  // rr - separate component for loading and error
  if (isLoading)
    return <div>Loading...</div>;
  else if (error) return <div>{error}</div>;

  return (
    // rr - styles in .css file
    <div
      className="centered-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <EmployeeSearch onSearch={onSearch} />
      <SubmitButton employees={filteredEmployees} />
      <EmployeeList employees={filteredEmployees} />
    </div>
  );
}

export default App;
