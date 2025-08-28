import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './shared/components/Footer'
import Navbar from './shared/components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify'
// import RefreshToken from './features/Auth/components/RefreshToken'

function App() {

  return (
    <>
    <ToastContainer></ToastContainer>
    <div className='flex flex-col justify-between min-h-screen'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* <RefreshToken></RefreshToken> */}
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
