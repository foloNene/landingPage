import React from "react";
import styled from "styled-components";
import doctor from "../Assests/doctor.jpg";

const Third = () => {
  return (
    <>
      <ThirdContainer>
        <ThirdWrapper>
          <ThirdLayer1>
            <Layer1Holder>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Third1Para>
                Offer financing to your users at up to 24 months repayment
                window. You get paid immediately by us, we collect the payment
                from your customers over time.
              </Third1Para>
              <br />
              <ThirdParaButton>GET ONBOARDED</ThirdParaButton>
              <br />
              <br />
            </Layer1Holder>
          </ThirdLayer1>
          <ThirdLayer2>
            <Third2Wrapper>
              <ThirdImage src={doctor} />
            </Third2Wrapper>
          </ThirdLayer2>
          <ThirdLayer3>
            <Layer3Holder>
              <br />
              <br />
              <Layer3Upper>
                <Layer3Header>Operational and Equipment</Layer3Header>
                Financing At comfortable interest rates and repayment length
              </Layer3Upper>
              <br />
              <hr />
              <br />
              <Layer3Lower>
                <Layer3Header>Plug Revenue Leakages, Grow Faster</Layer3Header>
                We will be your reliable growth partner
              </Layer3Lower>
            </Layer3Holder>
          </ThirdLayer3>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </ThirdWrapper>
        <br />
        <br />
        <br />
      </ThirdContainer>
    </>
  );
};

export default Third;

const ThirdContainer = styled.div`
  background-color: #17365d;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 780px) {
    height: 100%;
  }
`;

const ThirdWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 15px;
  @media screen and (max-width: 780px) {
    display: grid;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const ThirdLayer1 = styled.div`
  width: 25%;
  padding-left: 20px;
  font-size: 14px;
  // flex: 1;
  @media screen and (max-width: 780px) {
    width: 90%;
    display: grid;
    align-items: center;
    justify-content: center;
  }
`;

const Layer1Holder = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 12px;
`;

const ThirdParaButton = styled.button`
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
const Third1Para = styled.p`
  @media screen and (max-width: 780px) {
    text-align: center;
  }
`;

const ThirdLayer2 = styled.div`
  flex: 2;
`;

const ThirdImage = styled.img`
  width: 100%;
  background-position: center;
  background-size: cover;
`;

const Third2Wrapper = styled.div``;

const Layer3Holder = styled.div``;

const ThirdLayer3 = styled.div`
  color: white;
  width: 25%;
  padding-left: 10px;
  text-align: center;
  @media screen and (max-width: 780px) {
    width: 100%;
    display: grid;
    justify-content: center;
  }
`;
const Layer3Upper = styled.p`
  font-size: 12px;
`;

const Layer3Lower = styled.p`
  font-size: 12px;
`;

const Layer3Header = styled.h4`
  font-size: 12px;
`;
