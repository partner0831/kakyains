import styled from "styled-components";
import { theme } from "../../theme";

export const StyledGocha = styled.div`
  background-color: ${theme.nftitem};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  @media screen and (max-width: 775px) {
    .gocha_header {
      font-size: 40px;
    }
    .gocha_view {
      padding: 15px;
      max-width: 350px;
    }
    .gocha_image {
      width: 150px;
      height: 200px;
    }
    .gocha_select {
      flex-direction: column;
      & > *:not(:last-child) {
        margin-bottom: 15px;
      }
    }
    .gocha_play {
      font-size: 35px;
    }
  }
  @media screen and (max-width: 600px) {
    .gocha_header {
      font-size: 30px;
    }
    .gocha_image {
      width: 100px;
      height: 150px;
    }
    .gocha_play {
      font-size: 30px;
    }
  }
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
