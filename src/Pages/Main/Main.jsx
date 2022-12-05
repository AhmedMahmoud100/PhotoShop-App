import './Main.scss'
import Crop from '../../components/crop/Crop'
import React from 'react'
import Border from '../../components/Border/Border'
import Color from '../../components/Color/Color'
import Draw from '../../components/Draw/Draw'
import Frame from '../../components/Frame/Frame'
import ImgSection from '../../components/ImgSection/ImgSection'
import Filter from '../../components/filters/Filter'
import Resize from '../../components/Reasize/Resize'
import Shape from '../../components/Shape/Shape'
import Sticker from '../../components/Sticker/Sticker'
import Transform from '../../components/Transform/Transform'
import Text from '../../components/Text/Text'
import ContextPovider from '../../context/ThemeContext'
import { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import CropArea from '../../components/CropArea/CropArea'
import Instructions from '../../components/instructions/Instructions'
import Options from '../../components/options/Options'

export default function Main() {
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
    const [shapeEffect, setShapeEffect] = useState({})
    const [section, setSection] = useState('first')
    const [imgDimentions, setImgDimentions] = useState({})
    const[options,setOptions] = useState({})

    return (
        <main>
            <ContextPovider>
                < NavBar section={setSection} />
                <div className='mainSection' >
                    <aside className='main-aside'>
                    <Options options={setOptions} />
                    {section === "first" && <Instructions />}
                    {section === "filter" && <Filter filtersEffect={setFiltersEffect} />}
                    {section === "resize" && <Resize resizeEffect={setresizeEffect} imgDimentions={imgDimentions} />}
                    {section === "rotate" && <Transform rotateEffect={setRotateEffect} />}
                    {section === "draw" && <Draw drawEffect={setDrawEffect} />}
                    {section === "text" && <Text textEffect={setTextEffect} />}
                    {section === "color" && <Color />}
                    {section === "border" && <Border borderEffect={setBorderEffect} />}
                    {section === "frame" && <Frame frameEffect={setFrameEffect} />}
                    {section === "sticker" && <Sticker stickerEffect={setStickerEffect} />}
                    {section === "shape" && <Shape shapeEffect={setShapeEffect} />}
                    {section === "crop" && <Crop />}
                    </aside>
                    {/* <CropArea /> */}
                    <ImgSection  options={options} imgDimentions={setImgDimentions} shapeEffect={shapeEffect} stickerEffect={stickerEffect} frameEffect={frameEffect} borderEffect={borderEffect} textEffect={textEffect} drawEffect={drawEffect} filtersEffect={filtersEffect} resizeEffect={resizeEffect} rotateEffect={rotateEffect} showBorder={section === "crop" ? true : false} section={section} />

                    {/* <Clone /> */}

                </div>
            </ContextPovider>
        </main>
    )
}
