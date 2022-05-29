import React from "react";
import styled from "styled-components";
import Card from "./Card";
import check from "../Assests/check.png";
import devices from "../Assests/devices.png";
import loan from "../Assests/loan.png";

const CardDisplay = () => {
  return (
    <>
      <DisContainer>
        <DisWrapper>
          <Card
            icon={check}
            Title="Apply"
            discription="Apply and Pre-qualify for health insurance plans and out-of-pocket
        advance for any procedure"
          />
          <Card
            icon={devices}
            Title="Ease"
            discription="Seamless experience with your care provider, immediate onboarding with top-tier HMOs"
          />
          <Card
            icon={loan}
            Title="Repayment"
            discription="Get the care you need now, pay back in up to 24 months, 0% intrest plans available"
          />
        </DisWrapper>
      </DisContainer>
    </>
  );
};

export default CardDisplay;

const DisContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
`;

const DisWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;
