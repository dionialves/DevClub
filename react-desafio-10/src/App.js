import React, { useState } from "react";
import People from "./assets/people.svg"
import Arrow from "./assets/arrow.svg"
import Trash from "./assets/trash.svg"
import {
  Container,
  Image,
  Main,
  H1,
  Label,
  Input,
  Button,
  Users
} from "./style.js";


function App() {
  const [users, setUsers] = useState([])


  const addNewUser = () => {
    setUsers([{id: Math.random(), name: "Dioni Alves", age: 35}])
  }

  return (
    <Container>

      <Image src={People} alt="logo-people" />

      <Main>
        <H1>Olá!</H1>

        <Label>Name</Label>
        <Input />

        <Label>Idade</Label>
        <Input />

        <Button onClick={addNewUser}>Cadastrar <img alt="Arrow" src={Arrow} /> </Button>

        <ul>
          {users.map((user) => (
            <Users key={user.id}>
              <p>{user.name}</p>
              <p>{user.age} anos</p>
              <button><img src={Trash}  alt="trash"/></button>
            </Users>
          ))}
        </ul>
      </Main>
    </Container>
  );
}

export default App;
