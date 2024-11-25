
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './pages/Landingpage'
import Home from './pages/Home'
import Watchhistory from './pages/Watchhistory'
import Footer from './components/Footer'
import Header from './components/Header'
function App() {
  

  return (
    <>
     <Header/>
      <Routes>

       <Route path='/' element={<Landingpage/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/Watchhistory' element={<Watchhistory/>}/>

      </Routes>
     <Footer/>

   
    </>
  )
}

export default App
