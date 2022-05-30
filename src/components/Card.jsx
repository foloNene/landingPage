import React from "react";
import styled from "styled-components";

const Card = ({ icon, discription, Title }) => {
  return (
    <>
      <CardContainer>
        <CardWrap>
          <SecondIconHolder>
            <Icon src={icon} />
          </SecondIconHolder>
          <Text>
            <p>{Title}</p>
          </Text>
          <Description></Description>
          <p>{discription}</p>
        </CardWrap>
      </CardContainer>
    </>
  );
};

export default Card;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 200px;
  background-color: white;
  border: 1px #b2beb5;
  border-radius: 20px;
  box-shadow: 0px 0 5px -2px #888;
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  cursor: pointer;
  :hover {
    cursor: pointer;
    background-color: #b5e1f7;
    font-size: medium;
  }
`;

const CardWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const SecondIconHolder = styled.div`
  display: flex;
  justify-content: center;
`;
const Icon = styled.img`
  width: 55px;
  height: 55px;
`;
const Description = styled.div``;

const Text = styled.div`
  display: flex;
  justify-content: center;
`;
