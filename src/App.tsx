import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './shared/components/Footer/Footer'
import Navbar from './shared/components/Navbar/Navbar'

function App() {

  return (
    <>
    <div className='flex flex-col justify-between min-h-screen'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
