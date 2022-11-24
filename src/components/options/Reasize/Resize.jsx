import { useState } from 'react'
import './Resize.scss'

export default function Resize({ resizeEffect }) {
    const [checkValue, setcheckValue] = useState(false)
    const [width, setWidth] = useState(300)
    const [height, setHeight] = useState(200)

    function HandleHeight(e) {
        setHeight(e.target.value)
        if (checkValue) {
            let newWidth = 16 / 9 * e.target.value
            setWidth(newWidth)

        }
    }

    function HandleWidth(e) {
        setWidth(e.target.value)
        if (checkValue) {
            let newHeight = 9 / 16 * e.target.value
            setHeight(newHeight)
        }
    }

    function handlecheckValue(e) {
        setcheckValue(e.target.checked)
        if (e.target.checked) {
            let newHeight = 9 / 16 * width
            setHeight(newHeight)

        }
    }

    function handleResize() {
        resizeEffect({ width: width, height: height,apply:true })
    }

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
                <input type="checkbox" id="ratio" checked={checkValue} onChange={handlecheckValue} />
                <label htmlFor="ratio">Maintain aspect ratio</label>
            </div>
            <button onClick={handleResize}>Resize Image</button>
        </div>
    )
}
