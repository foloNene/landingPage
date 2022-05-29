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

const FootWrapper = styled.div``;

const FooterLeft = styled.p``;

const FooterRight = styled.div``;

const FooterI = styled.div``;

const FootIconWrap = styled.div``;

const FootIconHold = styled.div``;
const FootArrow = styled.div``;
