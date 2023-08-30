import styled from "styled-components";

import Background1 from "../../assets/background1.svg"

export const Container = styled.div`
  background: url("${Background1}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  min-height: 100vh;
  height: 100%;
`;

export const Image = styled.img`
  width: 320px;
  margin-top: 30px;
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


