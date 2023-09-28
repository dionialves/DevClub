import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Trash from '../../assets/trash.png';
import LogoOrder from '../../assets/logo-pedido.png';
import axios from 'axios';


const Order = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetctOrders = async () => {
      const { data } = await axios.get("http://localhost:3001/order")

      setOrders(data)
    }
    fetctOrders();
  }, []);

  return (

    <div className='container'>

      <img src={LogoOrder}></img>

      <h1>Pedidos</h1>

      <div className='wrapper'>

        {orders.map((order) => (
          <>
            <div className='orders'>
              <div className='order-client' key={order.id}>
                <p>{ order.order }</p>
                <p className='client-name'>{ order.clientName }</p>
              </div>
              <a href='#'> <img src={Trash} /> </a>
            </div>
          </>
        ))}

        <a href={`/`} className='btn-go-back'>Voltar</a>

      </div>
    </div>
  );
}

export default Order;
