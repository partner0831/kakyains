import styled from "styled-components";
import { theme } from "../theme";
export const LinkItem = styled.a`
  position: relative;
  cursor: pointer;
  text-decoration: none;
  color: white;
  span {
    font-style: italic;
  }
  span {
    transition: all 0.4s ease-in-out;
    opacity: 0.5;
    ::after {
      margin-top: 5px;
      transition: all 0.4s ease-in-out;
      opacity: 0.5;
      content: "";
      display: block;
      height: 2px;
      width: 100%;
      background: #fff;
      transform: scaleX(0);
    }
  }

  :hover {
    span {
      opacity: 1;
      ::after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;
export const BarView = styled.div`
  @media only screen and (max-width: 715px) {
    display: block;
    position: fixed;
    right: 10px;
    top: 25px;
  }
  cursor: pointer;
  display: none;
  svg: {
    cursor: pointer;
  }
`;
export const StyledNavbar = styled.div`
  width: 100%;

  @media screen and (max-width: 810px) {
    .social_icons {
      display: none;
    }
  }
  @media screen and (max-width: 715px) {
    .navbar-item {
      display: none;
    }
  }
`;
export const StyledSidebar = styled.div`
  .sidebar {
    width: 260px;
    ${({ menushow }) => {
      return menushow
        ? "right: 0;transition: 0.7s ease;"
        : "right: -290px;transition: 0.7s ease;";
    }}
    background: ${theme.nftitem};
    position: fixed;
    height: 100%;
    z-index: 100000;
    padding: 15px;
    box-shadow: 0 0 5px 0 rgb(0 0 0 / 20%);
    & > *:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
export const LogoIMG = styled.img`
  margin-right: 0.7rem !important;
  border-style: none;
  height: 45px;
`;
