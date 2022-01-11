import styled from "styled-components";
import { theme } from "../../theme";

export const StyledGocha = styled.div`
  background-color: ${theme.nftitem};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 20px;
`;
export const SocialGocha = styled.div`
  background-color: white;
  box-shadow: 0 4px 0 #19dac3;
  border-radius: 45px;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;
  transition: 0.2s ease-in-out;
  :active {
    background-color: #1e314e;
    span {
      color: white;
    }
    svg {
      color: white;
    }
    box-shadow: 0 4px 0 #19dac3;
    transform: translateY(4px);
  }
`;
export const PlayGocha = styled.div`
  background-color: white;
  box-shadow: 0 10px 0 #19dac3;
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;
  height: 60px;
  transition: 0.2s ease-in-out;
  :active {
    background-color: #1e314e;
    span {
      color: white;
    }
    box-shadow: 0 4px 0 #19dac3;
    transform: translateY(4px);
  }
`;
