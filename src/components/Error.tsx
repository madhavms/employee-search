import styled from '@emotion/styled';

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

  @media (max-width: 570px) {
    font-size:1.1rem;
    width: 60vw;
  }
`;
