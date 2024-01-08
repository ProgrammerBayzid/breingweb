import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProfileDataProvider } from './Components/ProfieComponent/ProfileDataProvider.jsx'
import { SocketProvider } from './Components/SocketContext/SocketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SocketProvider>

     <ProfileDataProvider>
      <App />
    </ProfileDataProvider>
    </SocketProvider>
    
  </React.StrictMode>,
)

