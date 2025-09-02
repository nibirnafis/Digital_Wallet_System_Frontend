import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './shared/components/Footer'
import Navbar from './shared/components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
    <ToastContainer></ToastContainer>
    <div className='flex flex-col justify-between min-h-screen'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
