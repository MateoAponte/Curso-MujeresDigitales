import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/index.scss';
import { UserDetail } from './page/UserDetail.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserDetail />
  </StrictMode>,
)
