import React from "react";
import styled from "styled-components";
import { BsWhatsapp } from "react-icons/bs";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { MdKeyboardArrowUp } from "react-icons/md";

const Foot = () => {
  return (
    <>
      <FootContainer>
        <FootWrapper>
          <FooterLeft>© 2022 Arteri Africa</FooterLeft>
          <FooterRight>
            <FooterI>
              <FootIconWrap>
                <FootIconHold>
                  <BsWhatsapp />
                </FootIconHold>
                <FootIconHold>
                  <FiFacebook />
                </FootIconHold>
                <FootIconHold>
                  <FiTwitter />
                </FootIconHold>
                <FootIconHold>
                  <AiFillLinkedin />
                </FootIconHold>
                <FootIconHold>
                  <FiInstagram />
                </FootIconHold>
              </FootIconWrap>
              <FootArrow>
                <MdKeyboardArrowUp />
              </FootArrow>
            </FooterI>
          </FooterRight>
        </FootWrapper>
      </FootContainer>
    </>
  );
};

export default Foot;

const FootContainer = styled.div``;

const FootWrapper = styled.div`
  display: flex;
  bottom: 0;
  @media screen and (max-width: 430px) {
    display: flex;
    flex-direction: column;
    background-color: #d3d3d3;
  }
`;

const FooterLeft = styled.p`
  font-size: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const FooterRight = styled.div`
  background-color: red;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterI = styled.div`
  font-weight: bolder;
  font-size: 24px;
  display: flex;
  justify-content: space-around;
  width: 70%;
`;

const FootIconWrap = styled.div`
  width: 50%;
  font-weight: bolder;
  display: flex;
  justify-content: space-around;
`;

const FootIconHold = styled.div`
  font-weight: bolder;
`;
const FootArrow = styled.div`
  font-size: 26px;
`;
