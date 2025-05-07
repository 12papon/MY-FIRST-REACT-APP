import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { ContextProvider } from './components/API/ContextApi/Context1'

function App() {

  return (
    <div>
      <ContextProvider>
                <div>
                        <Navbar></Navbar>
                        <Outlet></Outlet>
                </div>
      </ContextProvider>
    </div>
  )

  }


export default App
