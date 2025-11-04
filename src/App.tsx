import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import PasswordRecoveryPage from './pages/PasswordRecoveryPage'
import OTPPassowordCheck from './pages/OTPPassowordCheck'
import Homepage from './pages/Homepage'
import Sign from './pages/Sign'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Register/>}/>  
        <Route path='/password-recovery' element={<PasswordRecoveryPage/>}/>
        <Route path='/otp-checking' element={<OTPPassowordCheck/>}/>
        <Route path='/homepage' element={<Homepage/>}/>
        <Route path='/sign' element={<Sign/>}/>
      </Routes>
    </Router>
  )
}

export default App
