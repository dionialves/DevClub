import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';

import Home from './routes/home'
import Order from './routes/order'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/orders",
    element: <Order />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);


