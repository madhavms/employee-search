interface ButtonProps {
  handleClick: () => void;
}

const SubmitButton: React.FC<ButtonProps> = ({ handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default SubmitButton;
