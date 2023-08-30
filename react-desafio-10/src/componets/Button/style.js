import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  order-radius: 14px;
  background: var(--templates-5-color-1, rgba(0, 0, 0, 0.80));
  width: 342px;
  height: 74px;
  flex-shrink: 0;
  color: #FFF;
  font-size: 17px;
  font-weight: 700;
  line-height: 28px; /* 164.706% */
  border: none;
  cursor: pointer;
  margin-top: 130px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  background: ${props => props.isGoBack ? 'transparent' : 'rgba(0, 0, 0, 0.80)'};  
  border: ${props => props.isGoBack ? '1px solid #FFF' : 'none'}; 

  img {
    transform: ${props => props.isGoBack && 'scaleX(-1)'};
  }


`;
