
import './App.css'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Navbar from './component/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'

function App() {
 

  return (
    <>
      
        
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>

        </Routes>
      
    </>
  )
}

export default App
