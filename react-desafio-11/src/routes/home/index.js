import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import LogoBurger from '../../assets/logo-burger.png'


const Home = () => {
  const order = useRef();
  const clientName = useRef();
  const history = useNavigate();
  let  orderList = []

  const addNewOrder = async () => {

    const { data: newOrder } = await axios.post("http://localhost:3001/order",
      {
        order: order.current.value,
        clientName: clientName.current.value
      }
    )

    history('/orders');

  }

  return (

    <div className='container'>

      <img src={LogoBurger}></img>
      <h1>Faça seu pedido</h1>

      <div className='wrapper'>

        <label>Pedido</label>
        <input ref={order} placeholder="1 Cola-Cola, 1 X-Salada" />

        <label>Nome do Cliente</label>
        <input ref={clientName} placeholder="Dioni Alves" />

        <a onClick={addNewOrder} className='btn-new-order'>Novo Pedido</a>

      </div>
    </div>
  );
}

export default Home;
