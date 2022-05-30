import React from "react";
import styled from "styled-components";
import arteri from "../Assests/arteri.png";

const Fifth = () => {
  return (
    <>
      <FifthContainer>
        <FifthWrapper>
          <Fifth1>
            <FithImgHold>
              <FifthImage src={arteri} />
            </FithImgHold>
            <Fith1Para>
              We make it easier for you to take care <br /> of you and your
              family’s health
            </Fith1Para>
          </Fifth1>
          <Fifth2>
            <Fif2Head>Contact</Fif2Head>
            <Fif2Para>hi@arteri.africa</Fif2Para>
            <Fif2Para>loan@arteri.africa</Fif2Para>
            <Fif2Para>09067345883 (Call and WhatsApp)</Fif2Para>
          </Fifth2>
          <Fifth3>
            <Fif3Head>Where we operate</Fif3Head>
            <Fit3Para>Nigeria</Fit3Para>
            <Fit3Para>United States</Fit3Para>
          </Fifth3>
          <Fifth4>
            <Fifth4Head>Links</Fifth4Head>
            <Fifth4div>
              <Fifth4li>Terms of use</Fifth4li>
              <Fifth4li>Privacy Policy</Fifth4li>
            </Fifth4div>
          </Fifth4>
        </FifthWrapper>
      </FifthContainer>
    </>
  );
};

export default Fifth;

const FifthContainer = styled.div`
  font-size: 12px;
  background-color: #17365d;
  color: white;
  width: 100%;
  border: none;
  @media screen and (max-width: 780px) {
    padding: 0;
    margin: 0;
  }
`;
const FifthWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  @media screen and (max-width: 780px) {
    display: grid;
    // padding-left: 0;
    width: 80%;
  }
`;
const Fifth1 = styled.div``;
const Fifth2 = styled.div``;
const Fifth3 = styled.div`
  padding-bottom: 35px;
  @media screen and (max-width: 780px) {
    padding-bottom: 0;
  }
`;
const Fifth4 = styled.div`
  padding-bottom: 30px;
  @media screen and (max-width: 780px) {
    padding-bottom: 0;
    padding-top: 10px;
  }
`;
const FithImgHold = styled.div``;
const FifthImage = styled.img`
  width: 200px;
  height: 200px;
`;

const Fith1Para = styled.p``;

const Fif2Head = styled.h3``;
const Fif2Para = styled.p``;
const Fif3Head = styled.h3``;
const Fit3Para = styled.p``;
const Fifth4Head = styled.h3``;

const Fifth4div = styled.ul`
  background-color: transparent;
  border: 1px #b2beb5;
  border-radius: none;
  box-shadow: 0px 0 5px -2px #888;
`;

const Fifth4li = styled.li`
  color: #3385d7;
  padding-top: 10px;
  margin: 5px;
  background-color: transparent;
  border: 1px #b2beb5;
  border-radius: none;
  box-shadow: 0px 0 5px -2px #888;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
