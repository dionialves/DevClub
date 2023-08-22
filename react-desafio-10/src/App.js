import React from "react";
import People from "./assets/people.svg"
import Arrow from "./assets/arrow.svg"
import { 
  Container, 
  Image,
  Main,
  H1,
  Label,
  Input,
  Button
} from "./style.js";

function App() {
  const users = [
    {id: Math.random(), name: "Dioni Alves", age: 35},
    {id: Math.random(), name: "Rozana", age: 36},
    {id: Math.random(), name: "Heitor", age: 10}
  ]

  return (
    <Container>
    
        <Image src={People} alt="logo-people"/>

      <Main>
        <H1>Olá!</H1>

        <Label>Name</Label>
        <Input/>

        <Label>Idade</Label>
        <Input />

        <Button>Cadastrar <img alt="Arrow" src={Arrow}/> </Button>

        <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.age}</li>
        ))}    
        </ul>
      </Main>
    </Container>
  );
}

export default App;
