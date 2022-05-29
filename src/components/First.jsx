import React, { useState } from "react";
import styled from "styled-components";
import firstImage from "../Assests/firstImage.jpg";
import logo from "../Assests/logo.png";
import curve from "../Assests/curve.png";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

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
                <div>Home</div>
                <div>About Us</div>
                <div>Products</div>
                <div>FAQs</div>
                <div>Calculator</div>
                <div>Login</div>
              </RHeader>
            </Right2>
            <Right3>
              <Button>Get STarted</Button>
            </Right3>
          </RightHeader>
        </RightWrapper>
        <br />
        <br />
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
  width: 100%;
  display: flex;
  overflow: hidden;
  @media screen and (max-width: 780px) {
    display: grid;
  }
`;

const LeftWrapper = styled.div`
  background-color: green;
  flex: 1;
  width: 100%;
  height: 700px;
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
  background-color: red;
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
  display: none;
  @media screen and (max-width: 780px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    padding-right: 0;
    padding-left: 0;
    top: 70px;
    height: 100vh;
    width: 100%;
    justify-content: flex-start;
    background: #101522;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    gap: 10px;
  }
`;
const NavLinkHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`;

const NavLinks = styled.div`
  background-color: red;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 850px) {
    font-size: 20px;
    background-color: green;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
  }
`;
const NavButHolder = styled.div`
  background-color: green;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavButton = styled.button`
  width: 50%;
  border-radius: 14px;
  padding: 10px;
`;

const RightContainer = styled.div`
  background-color: blue;
  flex: 2;
  width: 100%;
  position: relative;
`;

const RightWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
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
  background-color: red;
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

const Right3 = styled.div``;

const Button = styled.button`
  border-radius: 20px;
  background-color: #dbdddf;
  color: black;
  text-align: center;
  text-docoration: none;
  padding: 5px;
`;

const RightDown = styled.div`
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
  padding: 50px;
  width: 90%;
  height: 350px;
  background-color: pink;
  @media screen and (max-width: 780px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const RightParaHead = styled.h1`
  width: 100%;
  color: white;
  font-weight: 900;
  font-size: 45px;
  @media screen and (max-width: 780px) {
    font-size: 30px;
  }
`;

const LowerButtonHolder = styled.div``;

const ButtonDiv = styled.div`
  padding: 2px;
`;
const FirstButton = styled.button`
  padding: 5px;
  font-size: 14px;
  border-radius: 20px;
  font-weight: 900;
  @media screen and (max-width: 780px) {
    font-size: 12px;
    font-weight: 500;
  }
`;

const SecondButton = styled.button`
  padding: 5px;
  font-size: 14px;
  border-radius: 20px;
  @media screen and (max-width: 780px) {
    font-size: 12px;
    font-weight: 500;
  }
`;

const ThirdButton = styled.button`
  padding: 5px;
  font-size: 14px;
  border-radius: 20px;
  @media screen and (max-width: 780px) {
    font-size: 12px;
    font-weight: 500;
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
    top: 200px;
    left: 150px;
  }
`;

const FirstImg = styled.img`
  @media screen and (max-width: 780px) {
    width: 500px;
    height: 500px;
  }
  @media screen and (max-width: 500px) {
    width: 300px;
    height: 300px;
  }
`;
