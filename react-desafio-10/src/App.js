import React, { useState, useRef } from "react";
import Axios from "axios"

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
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  const addNewUser = async () => {

    const data = await axios.post("http://localhost:3001/users",
      {
        name: inputName.current.value,
        age: inputAge.current.value
      }
    );

    console.log(data)

    //setUsers(
    //  [
    //    ...users,
    //    {
    //      id: Math.random(),
    //      name: inputName.current.value,
    //      age: inputAge.current.value
    //    }
    //  ]
    //);
  }

  const deleteUser = (userId) => {
    const newListUser = users.filter((user) => user.id != userId);

    setUsers(newListUser)
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

        <ul>
          {users.map((user) => (
            <Users key={user.id}>
              <p>{user.name}</p>
              <p>{user.age} anos</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="trash" />
              </button>
            </Users>
          ))}
        </ul>
      </Main>
    </Container>
  );
}

export default App;
