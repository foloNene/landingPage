import React from "react";
import styled from "styled-components";
import fixicon from "../Assests/fixicon.PNG";

const Fixed = () => {
  return (
    <>
      <FixedContainer>
        <FixedImg src={fixicon} />
      </FixedContainer>
    </>
  );
};

export default Fixed;

const FixedContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  position: fixed;
  bottom: 50px;
  right: 20px;
  z-index: 10;
`;

const FixedImg = styled.img`
  border-radius: 50px;
  padding: 15px;
`;
