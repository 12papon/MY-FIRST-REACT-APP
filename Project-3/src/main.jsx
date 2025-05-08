import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,} from "react-router";
import Error from './components/ErrorPage/Error.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Info from './components/Info/Info.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/about",
        loader: ()=> fetch('https://fakestoreapi.com/products'),
        element: <About></About>
      },
      {
        path: '/about/:id',
        loader: ({params})=> fetch(`https://fakestoreapi.com/products/${params.id}`),
        element: <Info></Info>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
