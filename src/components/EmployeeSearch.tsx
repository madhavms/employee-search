import { memo, FC, KeyboardEvent, ChangeEvent } from "react";
import styled from "@emotion/styled";

interface SearchProps {
  onSearch: (search: string) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const Label = styled.label`
  margin-right: 1rem;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  flex-grow: 1;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 0.9rem;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
`;

export const EmployeeSearch: FC<SearchProps> = memo(
   ({ onSearch, onKeyDown }) => {
      const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
         onSearch(event.target.value);
      };

      return (
      <Container>
        <Label htmlFor="searchInput">Employee Search:</Label>
        <Input
           id="searchInput"
           type="text"
           placeholder="Enter a name"
           onChange={handleOnChange}
           onKeyDown={onKeyDown}
        />
      </Container>
      );
   }
);
