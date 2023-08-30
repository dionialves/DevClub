import styled from "styled-components";

import Background from "../../assets/background2.svg"

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  min-height: calc(100vh -170px;);
  height: 100%;
  min-height: 100vh;
`;

export const Image = styled.img`
  width: 320px;
  margin-top: 30px;
`;

export const ListUsers = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 17px 0 27px;
  margin-top: 20px;

  border: none;
  outline: none;
 
  width: 342px;
  height: 58px;
  
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.20);
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  p {
    color: #FFF;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }
`;
