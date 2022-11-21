import { useContext, useEffect, useRef, useState } from 'react'
import './Resize.scss'
import { ThemeContext } from '../../../context/ThemeContext'

export default function Resize() {
    const [theme, setTheme] = useContext(ThemeContext)
    const [checkValue, setcheckValue] = useState(false)
    const checkInput = useRef()
    const [width, setWidth] = useState(300)
    const [height, setHeight] = useState(200)

    function HandleHeight(e) {
        setHeight(e.target.value)
    }

    function HandleWidth(e) {
        setWidth(e.target.value)

    }

    function handlecheckValue(e) {
        setcheckValue(e.target.checked)

    }
    
    useEffect(() => {
        if (checkInput.current.checked) {
            let newHeight = 9 / 16 * width
            setHeight(newHeight)
        }
    }, [width])

    useEffect(() => {
        if (checkInput.current.checked) {
            let newWidth = 16 / 9 * height
            setWidth(newWidth)
        }
    }, [height])

    useEffect(() => {
        setTheme({ ...theme, ReSize: {
            width,
            height
        } })
    }, [width,height])

   
    useEffect(() => {
        if (checkInput.current.checked) {
            let newHeight = 9 / 16 * width
            setHeight(newHeight)
        }
    }, [checkValue])

    return (
        <div className='re-size'>
            <div className='width'>
                <label htmlFor="width">width(px)</label>
                <input type="number" value={width} id="width" onChange={HandleWidth} />
            </div>
            <div className='height'>
                <label htmlFor="height">height(px)</label>
                <input type="number" id='height' value={height} onChange={HandleHeight} />
            </div>
            <div className='ratio'>
                <input type="checkbox" id="ratio" ref={checkInput} checked={checkValue} onChange={handlecheckValue} />
                <label htmlFor="ratio">Maintain aspect ratio</label>
            </div>
            <button>Resize Image</button>
        </div>
    )
}
