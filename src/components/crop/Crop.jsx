import { useEffect, useRef, useState,useContext } from 'react'
import './Crop.scss'
import {ThemeContext} from '../../context/ThemeContext'

function Crop() {
    const [theme, setTheme] = useContext(ThemeContext)

  const initialState = {
        offsetX: 0,
        offsetY: 0,
        sourceW: 150,
        sourceH: 150,
        apply : false,
        
    }
    const [crop, setCrop] = useState(initialState)
    const widthInput = useRef()
    const heightInput = useRef()
    const offsetXInput = useRef()
    const offsetYInput = useRef()

    function handleCrop(e) {
        e.preventDefault()
        setCrop({
            offsetX : offsetXInput.current.value,
            offsetY : offsetYInput.current.value ,
            sourceW : widthInput.current.value,
            sourceH : heightInput.current.value,
            apply : true
        })
    }

    useEffect(() => {
        setTheme({...theme,crop:crop})
    },[crop])


console.log(theme)
    return (
        <div className='crop'>
            <h2>Crop</h2>
            <p>Drag the red box inside the image or change values below.</p>
            <form onSubmit={handleCrop} >
                <div>
                    <label htmlFor="width">width</label>
                    <input type="number" id='width' ref={widthInput}/>
                </div>
                <div>
                    <label htmlFor="height">height</label>
                    <input type="number" id='height' ref={heightInput}/>
                </div>
                <div>
                    <label htmlFor="offSetX">Offset-X</label>
                    <input type="number" id='offSetX' ref={offsetXInput}/>
                </div>
                <div>
                    <label htmlFor="offSetY">Offset-y</label>
                    <input type="number" id='offSety' ref={offsetYInput}/>
                </div>
                <button type='submit'>apply</button>
            </form>
            <button>Reset</button>

        </div>
    )
}

export default Crop