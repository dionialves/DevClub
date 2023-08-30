import styled from "styled-components";

export const Main = styled.div`
  border-radius: 61px 61px 0px 0px;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.60) 0%, 
    rgba(255, 255, 255, 0.60) 0.01%, 
    rgba(255, 255, 255, 0.15) 100%);

  display: flex;
  flex-direction: column;
  width: 414px;
  min-height: calc(100vh -170px;);
  padding: 50px 36px;

  backdrop-filter: ${props => props.isBlur && 'blur(22.5px)'};
`;


