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
                    <GrFormCheckmark />
                    Health Plans like Insurance, at Zero Upfront Cost
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
      </FourthContainer>
    </>
  );
};

export default Fourth;

const FourthContainer = styled.div`
  width: 100%;
`;
const FourthWarapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 25px;
  flex-wrap: wrap;
`;
const FourthLeft = styled.div``;

const LeftFourthwrap = styled.div``;
const FourthRight = styled.div``;
const FourthTitle = styled.p``;
const FourthHeading = styled.h4``;
const FouthNumber = styled.div``;
const NumberWrappper = styled.ul``;
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
const RightWrapper = styled.div``;
const FourthImg = styled.img``;
