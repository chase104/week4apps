import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import PrimaryProvider from './context/primaryContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <PrimaryProvider>
          <App />
      </PrimaryProvider>
    </Router>
  </React.StrictMode>,
)
