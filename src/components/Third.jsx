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
                Providers Offer financing to your users at up to 24 months
                repayment window. You get paid immediately by us, we collect the
                payment from your customers over time.
              </Third1Para>
              <ThirdParaButton>Get OnBoarded</ThirdParaButton>
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
              <br />
              <br />
              <Layer3Upper>
                Operational and Equipment
                <br />
                Financing At comfortable interest rates and repayment length
              </Layer3Upper>
              <hr />
              <Layer3Lower>
                Plug Revenue Leakages, Grow Faster
                <br />
                We will be your reliable growth partner
              </Layer3Lower>
            </Layer3Holder>
          </ThirdLayer3>
        </ThirdWrapper>
      </ThirdContainer>
    </>
  );
};

export default Third;

const ThirdContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ThirdWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 15px;
`;

const ThirdLayer1 = styled.div`
  flex: 1;
`;

const Layer1Holder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
const Third1Para = styled.p``;

const ThirdLayer2 = styled.div`
  flex: 2;
`;

const ThirdImage = styled.img`
  width: 500px;
  height: 450px;
`;

const Third2Wrapper = styled.div``;

const Layer3Holder = styled.div``;

const ThirdLayer3 = styled.div`
  flex: 1;
`;

const Layer3Upper = styled.p``;

const Layer3Lower = styled.p``;
