import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AgeContextProvider } from './context/AgeContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AgeContextProvider>
      <App />
    </AgeContextProvider>
  </React.StrictMode>,
)
