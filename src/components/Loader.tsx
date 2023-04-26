import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #09f;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s ease infinite;
  
  @keyframes spin {
    to {transform: rotate(360deg);}
  }
`;

const Loader: React.FC = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default Loader;
