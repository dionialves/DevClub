import React from "react";
import { Main as MainContainer } from "./style";


const Main = ({children, ...props}) => {
  return <MainContainer {...props}>{children}</MainContainer>
};

export default Main
