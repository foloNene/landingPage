import React from "react";
import styled from "styled-components";
import { GrFormCheckmark } from "react-icons/gr";
import man from "../Assests/man.jpg";

const Fourth = () => {
  return (
    <>
      <FourthContainer>
        <br />
        <br />
        <br />
        <br />
        <br />
        <FourthWarapper>
          <br />
          <FourthLeft>
            <LeftFourthwrap>
              <FourthTitle>Kova is Now Live!</FourthTitle>
              <FourthHeading>Financing for Health Coverage Plans</FourthHeading>
              <FouthNumber>
                <NumberWrappper>
                  <p>
                    {" "}
                    <GrFormCheckmark /> Health Plans like Insurance, at Zero
                    Upfront Cost
                  </p>
                  <p>
                    <GrFormCheckmark />
                    Alternative Payment Options for Bottom of the Pyramid – Pay
                    With Waste
                  </p>
                  <p>
                    <GrFormCheckmark />
                    Compare Plans Across 40+ Coverage Providers
                  </p>
                  <p>
                    <GrFormCheckmark />
                    Special features for the African Diaspora
                  </p>
                  <p>
                    <GrFormCheckmark />
                    Dependable Healthcare Advisor
                  </p>
                  <p>
                    <GrFormCheckmark />
                    AI Recommendation Engine
                  </p>
                </NumberWrappper>
                <br />
                <br />
                <br />
                <FourthButHolder>
                  <FourthButton>Get Kova</FourthButton>
                </FourthButHolder>
              </FouthNumber>
            </LeftFourthwrap>
          </FourthLeft>
          <FourthRight>
            <RightWrapper>
              <FourthImg src={man} />
            </RightWrapper>
          </FourthRight>
        </FourthWarapper>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </FourthContainer>
    </>
  );
};

export default Fourth;

const FourthContainer = styled.div`
  width: 100%;
  background-color: #efefef;
`;
const FourthWarapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 25px;
  flex-wrap: wrap;
  @media screen and (max-width: 780px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
const FourthLeft = styled.div`
  width: 50%;
  @media screen and (max-width: 780px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items-center;
  }
`;

const LeftFourthwrap = styled.div``;
const FourthRight = styled.div``;
const FourthTitle = styled.h4`
  padding-left: 15px;
  font-size: 14px;
`;
const FourthHeading = styled.h4`
  padding-left: 15px;
  font-size: 14px;
  font-weight: normal;
  color: #1f2e88;
`;
const FouthNumber = styled.div``;
const NumberWrappper = styled.ul`
  font-size: 12px;
  font-weight: bold;
  // word-spacing: 2px;
`;
const FourthButHolder = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row-reverse;
`;
const FourthButton = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 20px;
`;
const RightWrapper = styled.div`
  @media screen and (max-width: 780px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
const FourthImg = styled.img`
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 780px) {
  }
`;
