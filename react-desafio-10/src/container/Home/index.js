import React, { useState, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import People from "../../assets/people.svg"
import Arrow from "../../assets/arrow.svg"

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
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const history = useHistory();

  const addNewUser = async () => {

    const { data: newUser } = await axios.post("http://localhost:3001/users",
      {
        name: inputName.current.value,
        age: inputAge.current.value
      }
    );

    setUsers([...users, newUser]);
    history.push("/usuarios")
  }
  
  return (
    <Container>

      <Image src={People} alt="logo-people" />

      <Main>
        <H1>Olá!</H1>

        <Label>Name</Label>
        <Input ref={inputName} />

        <Label>Idade</Label>
        <Input ref={inputAge} />

        <Button onClick={addNewUser}>Cadastrar <img alt="Arrow" src={Arrow} /> </Button>

     </Main>
    </Container>
  );
}

export default App;
