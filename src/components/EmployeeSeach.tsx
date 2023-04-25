interface SearchProps {
  onSearch: (search: string) => void;
}

const EmployeeSearch: React.FC<SearchProps> = ({ onSearch }) => {

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div>
      <label>User Search: </label>
      <input placeholder="Enter the name" onChange={handleOnChange} />
    </div>
  );
};

export default EmployeeSearch;
