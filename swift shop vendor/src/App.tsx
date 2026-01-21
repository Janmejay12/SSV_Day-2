import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {cartProvider} from './context/CartProvider'
import Dashboard from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CartProvider>
     <Dashboard/>
     </CartProvider>
  )
}

export default App
