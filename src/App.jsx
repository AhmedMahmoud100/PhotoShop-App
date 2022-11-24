import { useState } from 'react'
import './App.scss'
import Crop from './components/crop/Crop'
import ImgSection from './components/ImgSection/ImgSection'
import NavBar from './components/NavBar/NavBar'
import Filter from './components/options/filters/Filter'
import Resize from './components/options/Reasize/Resize'
import ContextPovider from './context/ThemeContext'

import Transform from './components/Transform/Transform'
import Test from './components/Test'
import Draw from './components/Draw/Draw'

function App() {
  const [section, setSection] = useState('')
  const [filtersEffect, setFiltersEffect] = useState('')
  const [resizeEffect,setresizeEffect] = useState({
    width : 300,
    height : 250
  })
  const[rotateEffect,setRotateEffect]=useState(0)
  return (
    <div className="App">
      
        <NavBar section={setSection} />
        <div className='mainSection' >
          {section === "filter" && <Filter filtersEffect={setFiltersEffect} />}
          {section === "resize" && <Resize resizeEffect={setresizeEffect}/>}
          {section === "transform" && <Transform rotateEffect={setRotateEffect}/>}
          {section === "draw" && <Draw/>}
          
          <ContextPovider>
          {section === "crop" && <Crop />}
          {/* <Test /> */}
          <ImgSection filtersEffect={filtersEffect} resizeEffect={resizeEffect} rotateEffect={rotateEffect}  showBorder={section === "crop" ? true : false} section={section}/>
          </ContextPovider>
        </div>
      
    </div>
  )
}

export default App
