import { useState } from 'react'
import { Route, BrowserRouter, Routes} from 'react-router-dom'
import Login from './components/pages/Login'
import Dashboard from './components/pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
          {/* ROta para login */}
          <Route path='/login' element={<Login/>}></Route>

          {/* Rota para depois de logado */}
          <Route path='/dashboard' element={<Dashboard/>}></Route>  

      </Routes>
    </BrowserRouter>
  )
}

export default App
