import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CartProvider from './context/ProductContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <CartProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </CartProvider>,
)
