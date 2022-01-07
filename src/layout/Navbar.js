import React, { useState, useEffect } from "react";
// @import component
import { Row, Col } from "../components/Layout";
import { Image } from "../components/Image";
import { Text } from "../components/Text";
// @import style
import styled from "styled-components";
import { theme } from "../theme";
// @import assets
import logo from "../assets/images/logo.gif";
// @import date
import { Navbardata } from "../contract/navdata";
// @import social icon
import { FaInstagram, FaYoutube, FaTwitter, FaDiscord } from "react-icons/fa";

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
const RenderItem = ({ selected, name, onSelected }) => {
  return (
    <LinkItem
      sel={
        selected.toString().toLowerCase() === name.toString().toLowerCase()
          ? true
          : false
      }
      href={`#${name.toString().toLowerCase()}`}
      onClick={() => {
        onSelected(`${name.toString().toLowerCase()}`);
      }}
    >
      <Text
        color="#fffff"
        fontWeight="500"
        font-family="Montserrat"
        fontSize="12px"
      >
        {name}
      </Text>
    </LinkItem>
  );
};
const Navbar = () => {
  const [selected, setSelected] = useState("home");
  const [menushow, setMenushow] = useState(false);
  // const [userAccount, setUserAccount] = useState();
  const menustate = localStorage.getItem("rightmenu");

  useEffect(() => {
    setMenushow(localStorage.getItem("rightmenu") === "on" ? true : false);
  }, [menustate]);

  // const MenuShow = () => {
  //   if (menushow) {
  //     localStorage.setItem("rightmenu", "off");
  //   } else {
  //     localStorage.setItem("rightmenu", "on");
  //   }
  //   setMenushow((prev) => !prev);
  // };

  return (
    <Col
      height="80px"
      backgroundColor={theme.nftitem}
      align="center"
      justify="center"
      padding="5px 5px"
    >
      <Row
        justify="space-between"
        width="100%"
        maxWidth="1250px"
        margin="0 15px 0 0"
      >
        <Image src={logo} height="60px" />
        <Row mgap="0 20px 0 0">
          <Row className="navbar-item" mgap="0 10px 0 0">
            {Navbardata.map((item, key) => {
              return (
                <RenderItem
                  key={key + 1}
                  selected={selected}
                  name={item}
                  onSelected={setSelected}
                />
              );
            })}
          </Row>
          <Row mgap="0 15px 0 0">
            <FaYoutube color={theme.primaryLight} cursor="pointer" />
            <FaInstagram color={theme.primaryLight} cursor="pointer" />
            <FaDiscord color={theme.primaryLight} cursor="pointer" />
            <FaTwitter color={theme.primaryLight} cursor="pointer" />
          </Row>
        </Row>
      </Row>
    </Col>
  );
};
export default Navbar;
