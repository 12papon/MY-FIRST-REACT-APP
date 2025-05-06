import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Products from './components/Products/Products.jsx';
import Error from './components/Error/Error.jsx';
import Info from './components/info/Info.jsx'
import ConditionalStyle from './components/ConditionalStyle/ConditionalStyle.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/home",
        loader: ()=> fetch('https://fakestoreapi.com/products'),
        element: <Home></Home>
      },
      {
        path: "/home/:id",
        loader: ({params}) => fetch(`https://fakestoreapi.com/products/${params.id}`),
        element: <Info></Info>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/products",
        element: <Products></Products>
      },
      {
        path: "/styling",
        element: <ConditionalStyle></ConditionalStyle>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
