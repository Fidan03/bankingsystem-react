import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import PasswordRecoveryPage from './pages/PasswordRecoveryPage'
import OTPPassowordCheck from './pages/OTPPassowordCheck'
import Homepage from './pages/Homepage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Register/>}/>  
        <Route path='/password-recovery' element={<PasswordRecoveryPage/>}/>
        <Route path='/otp-checking' element={<OTPPassowordCheck/>}/>
        <Route path='/homepage' element={<Homepage/>}/>
      </Routes>
    </Router>
  )
}

export default App
