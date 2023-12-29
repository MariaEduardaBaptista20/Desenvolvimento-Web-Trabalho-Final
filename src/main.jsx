// import React from 'react';
// import ReactDOM from 'react-dom';
// import GlobalStyle from './global/globalStyle'; 
// import App from './App';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <GlobalStyle /> {}
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cadastro from "./pages/Cadastro/Cadastro.jsx";
import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import Produto from "./pages/produto/index.jsx";


const router = createBrowserRouter([
  {
    path: "/root",
    element: <Root />
  },

    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },

    {
      path: "/cadastro",
      element: <Cadastro />
    },

    {
      path: "/produto/:id",
      element: <Produto />
    }
  
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
