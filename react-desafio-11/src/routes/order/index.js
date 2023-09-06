import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Trash from '../../assets/trash.png';
import LogoOrder from '../../assets/logo-pedido.png';
import axios from 'axios';


const Home = () => {
  const { orders, setOrders } = useState([]);
  const navigate = useNavigate();

  useEffect = (() => {
    const fetctOrders = async () => {
      const { data } = await axios.get("http://localhost:3001/order")

      setOrders(data)
      console.log(data)
    }
    fetctOrders();
  }, []);


  return (

    <div className='container'>

      <img src={LogoOrder}></img>

      <h1>Pedidos</h1>

      <div className='wrapper'>

        {orders?.map((order) => (
          order.id
        ))}
        <div className='orders'>
          <div className='order-client'>
            <p>1 Coca-Cola, 1 X-Salada</p>
            <p className='client-name'>Dioni Alves</p>
          </div>
          <a href='#'> <img src={Trash} /> </a>
        </div>

        <div className='orders'>
          <div className='order-client'>
            <p>1 Coca-Cola, 1 X-Salada</p>
            <p className='client-name'>Dioni Alves</p>
          </div>
          <a href='#'> <img src={Trash} /> </a>
        </div>

        <a href={`/`} className='btn-go-back'>Voltar</a>

      </div>
    </div>
  );
}

export default Home;
