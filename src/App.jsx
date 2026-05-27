import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <ScrollToTop/>
      <header>
        <Navbar/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
