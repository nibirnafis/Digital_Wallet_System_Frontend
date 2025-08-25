import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './shared/components/Footer/Footer'
import Navbar from './shared/components/Navbar/Navbar'
import RefreshToken from './features/Auth/components/RefreshToken'
import LogoutButton from './shared/components/LogoutButton'

function App() {

  return (
    <>
    <div className='flex flex-col justify-between min-h-screen'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <RefreshToken></RefreshToken>
      <LogoutButton></LogoutButton>
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
