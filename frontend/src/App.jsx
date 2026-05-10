import { useState } from 'react'
import { Route, BrowserRouter, Routes} from 'react-router-dom'
import Login from './components/pages/Login'
import Dashboard from './components/pages/Dashboard'
import Register from './components/pages/Register'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
          {/* ROta para login */}
          <Route path='/' element={<Login/>}></Route>

          {/* Rota para depois de logado */}
          <Route path='/dashboard' element={<Dashboard/>}></Route> 

          <Route path='/register' element={<Register/>}></Route> 

      </Routes>
    </BrowserRouter>
  )
}

export default App
