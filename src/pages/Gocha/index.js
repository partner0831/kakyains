import React, { useState } from "react";
import { PlayGocha, SocialGocha, StyledGocha } from "../../style/Gocha/style";
import { Row, Col } from "../../components/Layout";
import { Image } from "../../components/Image";
import { Text } from "../../components/Text";
import { theme } from "../../theme";

import { FaEthereum } from "react-icons/fa";
import {
  BsFillShareFill,
  BsFillBarChartFill,
  BsFillMicFill,
  BsFillMicMuteFill,
} from "react-icons/bs";
import gochaImg from "../../assets/images/box.gif";

const Gocha = () => {
  const [count, setCount] = useState(1);
  const [mute, setMute] = useState(false);
  return (
    <StyledGocha>
      <Text
        margin="30px 0 0 0"
        fontSize="55px"
        padding="0 40px"
        className="overview_header"
        wordBreak="break-word"
        fontFamily="horizon"
        align="center"
      >
        GOCHA SYSTEM
      </Text>
      <Col
        maxWidth="450px"
        padding="25px 30px 30px 30px"
        borderRadius="50px"
        backgroundColor="#364C77E9"
        margin="40px 0 20px 0"
      >
        <Row
          justify="center"
          align="center"
          maxHeight="90%"
          width="100%"
          borderRadius="30px"
          backgroundColor="#1E314E"
          boxShadow="0 -3px 0 #19dac3"
          padding="20px"
          position="relative"
        >
          <SocialGocha
            style={{ position: "absolute", top: "12px", left: "20px" }}
          >
            <BsFillBarChartFill color="#1E314E" size={25} />
          </SocialGocha>

          <SocialGocha
            style={{ position: "absolute", bottom: "12px", left: "20px" }}
          >
            <BsFillShareFill color="#1E314E" size={25} />
          </SocialGocha>
          <SocialGocha
            style={{ position: "absolute", bottom: "12px", right: "20px" }}
            onClick={() => setMute(!mute)}
          >
            {mute ? (
              <BsFillMicFill color="#1E314E" size={25} />
            ) : (
              <BsFillMicMuteFill color="#1E314E" size={25} />
            )}
          </SocialGocha>
          <Image width="180px" height="280px" src={gochaImg} />
        </Row>
        <Row
          boxShadow="0 -3px 0 #19dac3"
          width="100%"
          margin="15px 0 0"
          backgroundColor="#1E314E"
          borderRadius="50px"
          padding="8px 15px"
          justify="flex-start"
        >
          <FaEthereum size={30} color={theme.primaryLight} />
          <Text
            fontSize="24px"
            margin="0 0 0 10px"
            fontWeight="400"
            fontFamily="Mitr"
          >
            Balance: 0
          </Text>
        </Row>
        <Row
          margin="15px 0 0 0"
          mgap="0 20px 0 0"
          justify="space-between"
          width="100%"
          align="center"
        >
          <Row mgap="0 10px 0 0">
            <SocialGocha onClick={() => setCount(1)}>
              <Text
                fontSize="24px"
                fontWeight="bold"
                fontFamily="Mitr"
                color="#1E314E"
              >
                1x
              </Text>
            </SocialGocha>
            <SocialGocha onClick={() => setCount(5)}>
              <Text
                fontSize="24px"
                fontWeight="bold"
                fontFamily="Mitr"
                color="#1E314E"
              >
                5x
              </Text>
            </SocialGocha>
            <SocialGocha onClick={() => setCount(10)}>
              <Text
                fontSize="24px"
                fontWeight="bold"
                fontFamily="Mitr"
                color="#1E314E"
              >
                10x
              </Text>
            </SocialGocha>
          </Row>
          <Row
            boxShadow="0 -3px 0 #19dac3"
            backgroundColor="#1E314E"
            borderRadius="50px"
            padding="8px 20px"
            justify="flex-start"
            width="180px"
          >
            <Text
              fontSize="16px"
              margin="0 0 0 10px"
              fontWeight="400"
              fontFamily="Mitr"
            >
              TOTAL = {0.1 * count} ETH
            </Text>
          </Row>
        </Row>
        <Row></Row>
        <Row margin="15px 0 0 0" width="100%" justify="center">
          <PlayGocha>
            <Text
              fontSize="45px"
              margin="0 0 0 10px"
              fontWeight="bold"
              fontFamily="Mitr"
              color="#1E314E"
              align="center"
            >
              PLAY!
            </Text>
          </PlayGocha>
        </Row>
        <Row margin="15px 0 0 0" width="100%">
          <Row>
            <Row>
              <Text
                color={theme.primaryLight}
                fontSize="24px"
                margin="0 0 0 10px"
                fontWeight="400"
                fontFamily="Mitr"
              >
                !
              </Text>
            </Row>
            <Text
              color={theme.primaryLight}
              fontSize="24px"
              margin="0 0 0 10px"
              fontWeight="400"
              fontFamily="Mitr"
              align="center"
            >
              Please conntect wallet
            </Text>
          </Row>
        </Row>
      </Col>
    </StyledGocha>
  );
};
export default Gocha;
