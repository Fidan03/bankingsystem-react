import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'antd/dist/reset.css';
import './components/reset.css'


createRoot(document.getElementById('root')!).render(
  <App />
)
