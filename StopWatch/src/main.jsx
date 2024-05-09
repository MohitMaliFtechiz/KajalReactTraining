import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Async_await from './async_await.jsx'
import './index.css'
import Parent from './parent.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Parent/>
  </React.StrictMode>,
)
