import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './Index.jsx'
import './index.css'
import { TiendaContextProvider } from './context/TiendaContext'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TiendaContextProvider>
      <App />
    </TiendaContextProvider>
  </React.StrictMode>
)
