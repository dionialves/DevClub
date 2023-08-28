import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"

import Avatar from "../../assets/avatar.svg"
import Arrow from "../../assets/arrow.svg"
import Trash from "../../assets/trash.svg"

import {
  Container,
  Image,
  Main,
  H1,
  Button,
  ListUsers
} from "./style.js";


function Users() {
  const [users, setUsers] = useState([]);
  const history = useHistory()

  useEffect(() => {

    const fetchUser = async () => {
      const { data } = await axios.get("http://localhost:3001/users");

      setUsers(data);
    }
    fetchUser();
  }, []);

  const deleteUser = async (userId) => {
    await axios.delete("http://localhost:3001/users/" + userId);
    const newListUser = users.filter((user) => user.id !== userId);

    setUsers(newListUser)
  }

  const goBack = () => {
    history.push("/")
  }

  return (
    <Container>

      <Image src={Avatar} alt="logo-people" />

      <Main>
        <H1>Usuário</H1>
        
        <ul>
          {users.map((user) => (
            <ListUsers key={user.id}>
              <p>{user.name}</p>
              <p>{user.age} anos</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="trash" />
              </button>
            </ListUsers>
          ))}
        </ul>

        <Button onClick={goBack}><img alt="Arrow" src={Arrow} /> Voltar </Button>

      </Main>
    </Container>
  );
};
export default Users;
