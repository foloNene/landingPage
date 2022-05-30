import React from "react";
import styled from "styled-components";

import CardDisplay from "./CardDisplay";

const Second = () => {
  return (
    <>
      <SecondContainer>
        <br />
        <br />
        <br />
        <SecondHeader>FEATURES</SecondHeader>
        <SecondTitle>Individuals & Households</SecondTitle>
        <br />
        <br />
        <CardDisplay />
        <br />
        <br />
        <GetHolder>
          <SecondGetButton>Get started</SecondGetButton>
        </GetHolder>
      </SecondContainer>
    </>
  );
};

export default Second;

const SecondContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const SecondHeader = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: #17365d;
`;

const SecondTitle = styled.h4`
  color: #17365d;
  font-weight: normal;
`;

const GetHolder = styled.div``;

const SecondGetButton = styled.button`
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
