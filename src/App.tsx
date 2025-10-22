import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import PasswordRecoveryPage from './pages/PasswordRecoveryPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Register/>}/>  
        <Route path='password-recovery' element={<PasswordRecoveryPage/>}/> 
      </Routes>
    </Router>
  )
}

export default App
