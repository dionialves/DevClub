import React from 'react';

import LogoBurger from '../../assets/logo-burger.png'
import './style.css';


const Home = () => {

  return (

    <div className='container'>

      <img src={LogoBurger}></img>

      <h1>Faça seu pedido</h1>

      <div className='wrapper'>

        <label>Pedido</label>
        <input placeholder="1 Cola-Cola, 1 X-Salada" />

        <label>Nome do Cliente</label>
        <input placeholder="Dioni Alves" />

        <button>Novo Pedido</button>

      </div>
    </div>
  );
}

export default Home;
