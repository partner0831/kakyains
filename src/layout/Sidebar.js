import React, { useState, useEffect } from "react";
// @import component
import { Text } from "../components/Text";
import { Navbardata } from "../contract/navdata";
// @import style
import { LinkItem, StyledSidebar, LogoIMG } from "./style";
import { theme } from "../theme";
import logo from "../assets/images/logo.gif";
import { Col, Row } from "../components/Layout";

const RenderItem = ({ selected, name, onSelected }) => {
  return (
    <Col align="center">
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
          color={theme.primaryLight}
          fontWeight="400"
          fontSize="25px"
          align="center"
        >
          {name}
        </Text>
      </LinkItem>
    </Col>
  );
};

const Sidebar = ({ menushow, menuRef }) => {
  const [selected, setSelected] = useState("home");
  const [state, setState] = useState({ mobileView: false });
  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 850
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  // useEffect(() => {
  //   console.log(ref);
  // }, [menushow]);

  return (
    mobileView && (
      <StyledSidebar menushow={menushow}>
        <div ref={menuRef} className="sidebar">
          <Row>
            <LogoIMG src={logo} />
          </Row>
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
        </div>
      </StyledSidebar>
    )
  );
};
export default Sidebar;
