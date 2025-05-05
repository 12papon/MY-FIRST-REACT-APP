import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './components/About/About.jsx'
import Contacts from './components/Contact/Contact.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Portfolio from './components/Portfolio/Portfolio.jsx'
import ErrorPage from './components/Errorpage/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contacts',
        element: <Contacts></Contacts>
      },
      {
        path: '/portfolio',
        element: <Portfolio></Portfolio>
      }
    ]
  }
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
