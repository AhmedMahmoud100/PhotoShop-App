import { useState } from 'react'
import './App.scss'
import Aside from './components/Aside/Aside'
import ImgSection from './components/ImgSection/ImgSection'
import NavBar from './components/NavBar/NavBar'
import ContextPovider from './context/ThemeContext'

function App() {

  return (
    <div className="App">
      <ContextPovider>
        <NavBar />
        <div className='mainSection' >
          <Aside />
          <ImgSection />
        </div>
      </ContextPovider>
    </div>
  )
}

export default App
