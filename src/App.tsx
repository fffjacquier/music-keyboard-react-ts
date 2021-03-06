import React from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Logo from './components/Logo/Logo'
import Main from './components/Main/Main'

function App() {
  return (
    <div className="app">
      <Logo />
      <main role="main" className="app-content">
        <Main />
      </main>
      <Footer />
    </div>
  )
}

export default App
