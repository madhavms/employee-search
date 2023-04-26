import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ErrorBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFD3D3;
  color: #C20000;
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px gray;
  width: 40vw;
  max-width: 500px;

  @media (max-width: 570px) {
    font-size: 1.1rem;
    width: 60vw;
  }
`;

export const ErrorComponent: React.FC<{ message: string }> = ({ message }) => {
  return (
    <Container>
      <ErrorBanner>{message}</ErrorBanner>
    </Container>
  );
};

