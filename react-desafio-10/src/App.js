import React from "react";
import { 
  Container, 
  Image,
  Main,
  H1,
  Label,
  InputName,
  InputAge,
  Button
} from "./style.js";

function App() {

  return (
    <Container>
    
      <Image/>

      <Main>
        <H1></H1>

        <Label>Name</Label>
        <InputName/>

        <Label>Idade</Label>
        <InputAge/>

        <Button>Cadastrar</Button>

      </Main>
    </Container>
  );
}

export default App;
