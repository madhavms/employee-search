import React from "react";
import styled from "@emotion/styled";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #0091EA;
  color: #ffffff;
  padding: 0 16px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Title>Employee Search</Title>
    </NavbarContainer>
  );
};

