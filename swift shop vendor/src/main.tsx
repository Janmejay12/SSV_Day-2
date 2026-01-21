import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
import cartProvider from '../src/context/cartProvider.tsx'
    <App />
  </StrictMode>,
)
