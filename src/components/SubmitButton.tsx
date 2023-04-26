import styled from "@emotion/styled";

interface ButtonProps {
  handleClick: () => void;
}

const StyledButton = styled.button`
  background-color: #0091EA;
  color: #FFFFFF;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 250px;
  font-size: 1.2rem;

  &:hover {
    background-color: #1976D2;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 1rem;
    width: 220px;
  }
`;

export const SubmitButton: React.FC<ButtonProps> = ({ handleClick }) => {
  return (
    <StyledButton onClick={handleClick}>Submit</StyledButton>
  );
};




