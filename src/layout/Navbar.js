import React, { useState, useEffect, useRef } from "react";
// @import component
import { Row, Col } from "../components/Layout";
import { Image } from "../components/Image";
import { Text } from "../components/Text";
// @import style
import { theme } from "../theme";
import { StyledNavbar, LinkItem } from "./style";
// @import assets
import logo from "../assets/images/logo.gif";
// @import date
import { Navbardata } from "../contract/navdata";
// @import social icon
import { FaInstagram, FaYoutube, FaTwitter, FaDiscord } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { BarView } from "./style";

import Sidebar from "./Sidebar";

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
  const menuRef = useRef(null);
  const [selected, setSelected] = useState("home");
  const [menushow, setMenushow] = useState(false);
  // const [userAccount, setUserAccount] = useState();
  // const menustate = localStorage.getItem("rightmenu");

  useEffect(() => {
    setMenushow(false);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const MenuShow = () => {
    console.log(menushow);
    setMenushow(menushow ? false : true);
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && menuRef.current.contains(e.target)) {
      return;
    }
    setMenushow(false);
  };

  return (
    <StyledNavbar>
      <Sidebar menushow={menushow} menuRef={menuRef} />
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
            <Row mgap="0 15px 0 0" className="social_icons">
              <FaYoutube color={theme.primaryLight} cursor="pointer" />
              <FaInstagram color={theme.primaryLight} cursor="pointer" />
              <FaDiscord color={theme.primaryLight} cursor="pointer" />
              <FaTwitter color={theme.primaryLight} cursor="pointer" />
            </Row>
          </Row>
        </Row>
      </Col>
      <BarView>
        <FaBars size="30" color="white" onClick={MenuShow} />
      </BarView>
    </StyledNavbar>
  );
};
export default Navbar;
