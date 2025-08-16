import { useState, useEffect } from 'react'
import io from 'socket.io-client';
import { Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';



function App() {

  return (
    <Routes>
      <Route path={'/login'} element={<Login />}></Route>
      <Route path={'/register'} element={<Register />}></Route>
    </Routes>
  )
}

export default App
