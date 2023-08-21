import React from "react";
import People from "./assets/people.svg"
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
    
      <Image src={People}/>

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
