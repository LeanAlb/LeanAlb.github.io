import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import SobreMi from './components/SobreMi/SobreMi'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/sobreMi' element={<SobreMi/>}></Route>
      </Routes>
    </div>
  )
}

export default App
