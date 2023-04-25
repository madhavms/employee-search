import React from "react";

interface SearchProps {
  onSearch: (search: string) => void;
}

const EmployeeSearch: React.FC<SearchProps> = ({ onSearch }) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div>
      <label htmlFor="searchInput">Employee Search:</label>
      <input
        id="searchInput"
        type="text"
        placeholder="Enter a name"
        onChange={handleOnChange}
      />
    </div>
  );
};

export default React.memo(EmployeeSearch);
