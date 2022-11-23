
import { useState } from 'react'
import './App.scss'
import Aside from './components/Aside/Aside'
import Crop from './components/crop/Crop'
import ImgSection from './components/ImgSection/ImgSection'
import NavBar from './components/NavBar/NavBar'
import Filter from './components/options/filters/Filter'
import Resize from './components/options/Reasize/Resize'
import ContextPovider from './context/ThemeContext'
import Test from './components/Test/Test'
function App() {
  const [section, setSection] = useState('')
  const [filtersEffect, setFiltersEffect] = useState('')
  const [resizeEffect,setresizeEffect] = useState({
    width : 300,
    height : 250
  })
  
  return (
    <div className="App">
      
        <NavBar section={setSection} />
        <div className='mainSection' >
          {section === "filter" && <Filter filtersEffect={setFiltersEffect} />}
          {section === "resize" && <Resize resizeEffect={setresizeEffect}/>}
          
          <ContextPovider>
          {/* {section === "transform" && <Test />} */}
          {section === "crop" && <Crop />}

          <ImgSection filtersEffect={filtersEffect} resizeEffect={resizeEffect} />
          </ContextPovider>
        </div>
      
    </div>
  )
}

export default App
