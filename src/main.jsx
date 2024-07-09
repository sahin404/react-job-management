import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import ShoeDetails from './components/ShowDetails/ShoeDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/job/:id',
        element:<ShoeDetails></ShoeDetails>,
        loader:()=>fetch('jobs.json')
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
