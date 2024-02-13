import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { TiendaContextProvider } from './context/TiendaContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TiendaContextProvider>
      <App />
    </TiendaContextProvider>
  </React.StrictMode>
)
