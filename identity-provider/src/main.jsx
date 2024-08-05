import React from 'react'
import ReactDOM from 'react-dom/client'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './main.css'

// import LandingPage from './pages/LandingPage.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <LandingPage />
//   </React.StrictMode>,
// )

import ProfilePage from './pages/ProfilePage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProfilePage/>
  </React.StrictMode>,
)