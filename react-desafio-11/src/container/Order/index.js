import React from 'react';

import Trash from '../../assets/trash.png';
import LogoOrder from '../../assets/logo-pedido.png';
import './style.css';


const Home = () => {

  return (

    <div className='container'>

      <img src={LogoOrder}></img>

      <h1>Pedidos</h1>

      <div className='wrapper'>

        <div className='orders'>
          <div className='order-client'>
            <p>1 Coca-COla, 1 X-Salada</p>
            <p>Dioni Alves</p>
          </div>
          <img src={Trash} />
        </div>
        
        <div className='orders'>
          <div className='order-client'>
            <p>1 Coca-COla, 1 X-Salada</p>
            <p>Dioni Alves</p>
          </div>
          <img src={Trash} />
        </div>

        <button>Novo Pedido</button>

      </div>
    </div>
  );
}

export default Home;
