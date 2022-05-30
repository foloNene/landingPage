import React, { useState } from "react";
import styled from "styled-components";
import firstImage from "../Assests/firstImage.jpg";
import logo from "../Assests/logo.png";
import curve from "../Assests/curve.png";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsWhatsapp } from "react-icons/bs";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";

const First = () => {
  const [click, setClick] = useState(false);
  const handClick = () => {
    setClick(!click);
  };

  return (
    <Container>
      <LeftWrapper>
        <LeftContainer>
          <LogoContainer>
            <LogoWrapper>
              <LogoHold>
                <Logo src={logo} />
                <NavBar onClick={handClick} click={click}>
                  <NavButHolder>
                    <NavButton>Calculator</NavButton>
                  </NavButHolder>
                  <br />
                  <br />
                  <NavLinkHolder>
                    <NavLinks>Home</NavLinks>
                    <NavLinks>About Us</NavLinks>
                    <NavLinks>Products</NavLinks>
                    <NavLinks>Blogs</NavLinks>
                    <NavLinks>Products</NavLinks>
                    <NavLinks>Products</NavLinks>
                    <NavLinks>Login</NavLinks>
                  </NavLinkHolder>

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
                </NavBar>
              </LogoHold>
            </LogoWrapper>

            <MobileIcon onClick={handClick}>
              {click ? <FaTimes /> : <GiHamburgerMenu />}
            </MobileIcon>
          </LogoContainer>
        </LeftContainer>
      </LeftWrapper>
      <RightContainer>
        <RightWrapper>
          <RightHeader>
            <Right1></Right1>
            <Right2>
              <RHeader>
                <RHeadli>Home</RHeadli>
                <RHeadli>About Us</RHeadli>
                <RHeadli>Products</RHeadli>
                <RHeadli>FAQs</RHeadli>
                <RHeadli>Calculator</RHeadli>
                <RHeadli>Login</RHeadli>
              </RHeader>
            </Right2>
            <Right3>
              <Button>Get STarted</Button>
            </Right3>
          </RightHeader>
        </RightWrapper>

        <RightDown>
          <RightPara>
            <RightParaHead>
              Modern Financial & Business Infrastructure for African Healthcare
            </RightParaHead>
            <LowerButtonHolder>
              <ButtonDiv>
                <FirstButton>
                  Get Financing - Businesses & Consumers
                </FirstButton>
              </ButtonDiv>
              <ButtonDiv>
                <SecondButton>
                  Buy Health Insurance at 0 Upfrint Cost or Pay with Waste
                </SecondButton>
              </ButtonDiv>
              <ButtonDiv>
                <ThirdButton>BNPL Payment Integration</ThirdButton>
              </ButtonDiv>
            </LowerButtonHolder>
          </RightPara>
        </RightDown>
        <FirstImageHolder>
          <FirstImg src={curve} />
        </FirstImageHolder>
      </RightContainer>
    </Container>
  );
};

export default First;

const Container = styled.div`
  background-color: #17365d;
  width: 100%;
  display: flex;
  overflow: hidden;
  @media screen and (max-width: 780px) {
    display: grid;
  }
`;

const LeftWrapper = styled.div`
  flex: 1;
  width: 100%;
  height: 80vh;
`;

const LeftContainer = styled.div`
  height: 100%;
  background: url(${firstImage});
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 780px) {
    display: grid;
  }
`;
const LogoContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LogoHold = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
`;

const Logo = styled.img`
width: 80px
height: 70px;
`;

const NavBar = styled.div`
  color: white;
  display: none;
  @media screen and (max-width: 780px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    padding-right: 0;
    padding-left: 0;
    top: 70px;
    height: 100vh;
    width: 70%;
    justify-content: flex-start;
    background: #101522;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    gap: 10px;
  }
`;
const NavLinkHolder = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`;

const NavLinks = styled.div``;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 850px) {
    font-size: 25px;
    background-color: #17365d;
    color: white;
    display: block;
    position: absolute;
    top: 13px;
    right: 0;
    transform: translate(-100%, 60%);
  }
`;
const NavButHolder = styled.div`
  padding: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavButton = styled.button`
  background-color: grey;
  border: none;
  color: white;
  padding: 13px 28px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  border-radius: 20px;
`;

const RightContainer = styled.div`
  flex: 2;
  width: 100%;
  position: relative;
  @media screen and (max-width: 780px) {
    width: 100%;
    height: 100%;
  }
`;

const RightWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 780px) {
    display: none;
  }
`;

const RightHeader = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Right1 = styled.div``;

const Right2 = styled.div``;

const RHeader = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 400px;
  justify-content: space-around;
`;

const RHeadli = styled.div`
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  :hover {
    color: #31ace7;
    transition-duration: 0.4s;
  }
`;

const Right3 = styled.div``;

const Button = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 13px 28px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  border-radius: 20px;
`;

const RightDown = styled.div`
  z-index: 12;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 2;
  @media screen and (max-width: 780px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const RightPara = styled.div`
  z-index: 12;
  padding: 50px;
  width: 90%;
  // height: 350px;
  @media screen and (max-width: 780px) {
    width: 100%;
    // height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0x;
    text-align: center;
  }
`;

const RightParaHead = styled.h1`
  z-index: 12;
  width: 100%;
  color: white;
  // font-weight: 900;
  font-size: 40px;
  @media screen and (max-width: 780px) {
    font-size: 25px;
    text-align: center;
    // font-weight: 500;
    padding: 0;
    margin: 0;
  }
`;

const LowerButtonHolder = styled.div`
  z-index: 12;
  @media screen and (max-width: 780px) {
    text-align: center;
    padding: 0;
    margin: 0;
  }
`;

const ButtonDiv = styled.div`
  padding: 4px;
  @media screen and (max-width: 780px) {
    text-align: center;
  }
`;
const FirstButton = styled.button`
  background-color: #8bc34a;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 20px;
  cursor: pointer;
  transition-duration: 0.4s;
  :hover {
    background-color: #3097dd;
    color: black;
  }
  @media screen and (max-width: 780px) {
    font-size: 12px;
    font-weight: 500;
    padding: 8px 12px;
    background-color: #8BC34A;
   color: black;
  }
     :hover {
      background-color: #307ECC;
      color: white;
      cursor: pointer;
    }
  }
`;

const SecondButton = styled.button`
  background-color: #306ab2;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    background-color: #8bc34a;
    color: black;
    cursor: pointer;
  }
  @media screen and (max-width: 780px) {
    font-size: 12px;
    font-weight: 500;
    padding: 8px 12px;
    background-color: #3385D7;
    color: white;
  }
     :hover {
      background-color: #8bc34a;
      cursor: pointer;
    }
  }
`;

const ThirdButton = styled.button`
  background-color: white;
  border: none;
  color: #306ab2;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    background-color: #8bc34a;
    cursor: pointer;
  }
  @media screen and (max-width: 780px) {
    font-size: 12px;
    font-weight: 500;
    padding: 8px 12px;
    background-color: white;
    :hover {
      background-color: #8bc34a;
      cursor: pointer;
    }
  }
`;

const FirstImageHolder = styled.div`
  position: absolute;
  top: 40px;
  left: -70px;
  z-index: 1;
  @media screen and (max-width: 780px) {
    top: 150px;
    left: 70px;
  }
  @media screen and (max-width: 500px) {
    top: 14px;
    left: 45px;
  }
`;

const FirstImg = styled.img`
  @media screen and (max-width: 780px) {
    width: 500px;
    height: 500px;
  }
  @media screen and (max-width: 500px) {
    width: 400px;
    height: 250px;
  }
`;

const FootIconWrap = styled.div`
  padding-left: 50px;
  width: 50%;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const FootIconHold = styled.div`
  font-weight: bolder;
`;
