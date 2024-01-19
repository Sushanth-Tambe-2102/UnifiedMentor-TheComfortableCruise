
import Login from './Pages/Login'
import './App.css'
import Home from './Pages/Home'
import Register from './Pages/Register'

import {Routes,Route} from 'react-router-dom'
import UserCart from './Pages/UserCart'

function App() {
 

  return (
    <>
      
      <Routes>
        
        
        
          <Route path="/" element={<Home/>}/>
          
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/user" element={<UserCart/>}/>
          
          
        </Routes>
        
        
    </>
  )
}

export default App
