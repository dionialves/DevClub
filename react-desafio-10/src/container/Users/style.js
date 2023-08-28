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

export const Main = styled.div`
  border-radius: 61px 61px 0px 0px;
  backdrop-filter: blur(22.5px);
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.60) 0%, 
    rgba(255, 255, 255, 0.60) 0.01%, 
    rgba(255, 255, 255, 0.15) 100%);

  display: flex;
  flex-direction: column;
  width: 414px;
  min-height: calc(100vh -170px;);
  height: 100%;
  padding: 50px 36px;
`;

export const H1 = styled.h1`
  color: #FFF;
  text-align: center;
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 28px;
`;

export const Label = styled.label`
  color: #EEE;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  margin-left: 25px;
`;

export const Input = styled.input`
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 342px;
  height: 58px;
  border: none;
  margin-bottom: 34px;
  outline: none;
  color: #EEE;
  font-size: 24px;
  font-weight: 400;
  padding-left: 25px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 14px;
  background: transparent;
  width: 342px;
  height: 74px;
  flex-shrink: 0;
  color: #FFF;
  font-size: 17px;
  font-weight: 700;
  line-height: 28px; /* 164.706% */
  border: 1px solid #FFF;
  cursor: pointer;
  margin-top: 130px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  img {
    transform: scaleX(-1);
  }
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
