import { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import './Crop.scss'

function Crop() {
    const [crop, setCrop] = useContext(ThemeContext)

    function HandleCrop(e) {
        const target = e.target.id
        setCrop({ ...crop, [target]: e.target.value, apply: false })
    }

    return (
        <div className='crop'>
            <h2>Crop</h2>
            <p>Drag the red box inside the image or change values below.</p>
            <form >
                <div>
                    <label htmlFor="sourceW">width(px)</label>
                    <input type="number" id='sourceW' onChange={HandleCrop} value={crop.sourceW} />
                </div>
                <div>
                    <label htmlFor="sourceH">height(px)</label>
                    <input type="number" id='sourceH' onChange={HandleCrop} value={crop.sourceH} />
                </div>
                <div>
                    <label htmlFor="offsetX">Offset-X(px)</label>
                    <input type="number" id='offsetX' onChange={HandleCrop} value={crop.offsetX} />
                </div>
                <div>
                    <label htmlFor="offsetY">Offset-y(px)</label>
                    <input type="number" id='offsetY' onChange={HandleCrop} value={crop.offsetY} />
                </div>
            </form>
        </div>
    )
}

export default Crop