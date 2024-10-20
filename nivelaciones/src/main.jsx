import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserDetail } from './page/UserDetail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserDetail />
  </StrictMode>,
)
