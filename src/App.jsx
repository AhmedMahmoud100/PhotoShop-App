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
import Text from './components/Text/Text'
import BackGorund from './components/BackGroung/BackGorund'
import Clone from './components/ImgSection/Clone'
import Border from './components/Border/Border'
import Frame from './components/Frame/Frame'
import Sticker from './components/Sticker/Sticker'

function App() {
  const [section, setSection] = useState('')
  const [filtersEffect, setFiltersEffect] = useState('')
  const [resizeEffect, setresizeEffect] = useState({
    width: 300,
    height: 250
  })
  const [rotateEffect, setRotateEffect] = useState(0);
  const [drawEffect, setDrawEffect] = useState('')
  const [textEffect, setTextEffect] = useState({})
  const [borderEffect, setBorderEffect] = useState({})
  const [frameEffect, setFrameEffect] = useState({})
  const [stickerEffect, setStickerEffect] = useState({})
  return (
    <div className="App">

      <NavBar section={setSection} />
      <div className='mainSection' >
        {section === "filter" && <Filter filtersEffect={setFiltersEffect} />}
        {section === "resize" && <Resize resizeEffect={setresizeEffect} />}
        {section === "transform" && <Transform rotateEffect={setRotateEffect} />}
        {section === "draw" && <Draw drawEffect={setDrawEffect} />}
        {section === "text" && <Text textEffect={setTextEffect} />}
        {section === "background" && <BackGorund />}
        {section === "border" && <Border borderEffect={setBorderEffect} />}
        {section === "frame" && <Frame frameEffect={setFrameEffect} />}
        {section === "sticker" && <Sticker stickerEffect={setStickerEffect} />}

        <ContextPovider>
          {section === "crop" && <Crop />}
          {/* <Test /> */}
          <ImgSection stickerEffect={stickerEffect} frameEffect={frameEffect} borderEffect={borderEffect} textEffect={textEffect} drawEffect={drawEffect} filtersEffect={filtersEffect} resizeEffect={resizeEffect} rotateEffect={rotateEffect} showBorder={section === "crop" ? true : false} section={section} />
          {/* <Clone /> */}
        </ContextPovider>
      </div>

    </div>
  )
}

export default App
