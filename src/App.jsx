import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './components/Landing/Landing'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
      </Routes>
    </div>
  )
}

export default App
