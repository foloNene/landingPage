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
              <li>Terms of use</li>
              <li>Privacy Policy</li>
            </Fifth4div>
          </Fifth4>
        </FifthWrapper>
      </FifthContainer>
    </>
  );
};

export default Fifth;

const FifthContainer = styled.div`
  width: 100%;
`;
const FifthWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  @media screen and (max-width: 780px) {
    display: grid;
  }
`;
const Fifth1 = styled.div``;
const Fifth2 = styled.div``;
const Fifth3 = styled.div``;
const Fifth4 = styled.div``;
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

const Fifth4div = styled.div``;
