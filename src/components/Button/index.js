import React from "react";
import styled from "styled-components";
const StyledButton = styled.div`
  background-color: white;
  box-shadow: 0 4px 0 #19dac3;
  border-radius: 45px;
  padding: 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
