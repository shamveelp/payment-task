import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Payments from './pages/Payments'

function App() {


  return (
    <>
    <div>
      <button>Payments</button>
    </div>

  

    <BrowserRouter>
      <Routes>
        <Route path='/payments' element={<Payments/> } />

      </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App
