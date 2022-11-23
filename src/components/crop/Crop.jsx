import { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import './Crop.scss'

function Crop() {
    const [crop, setCrop] = useContext(ThemeContext)

    function HandleCrop(e) {
        const target = e.target.id
        setCrop({ ...crop, [target]: e.target.value, apply: false })
    }

    function PassCropTheme(e) {
        e.preventDefault()
        setCrop({ ...crop, apply: true })
    }
    function ResetCrop() {
        setCrop({
            offsetX: 0,
            offsetY: 0,
            sourceW: 150,
            sourceH: 150,
            apply: false,
        })
    }
    return (
        <div className='crop'>
            <h2>Crop</h2>
            <p>Drag the red box inside the image or change values below.</p>
            <form onSubmit={PassCropTheme} >
                <div>
                    <label htmlFor="sourceW">width</label>
                    <input type="number" id='sourceW' onChange={HandleCrop} value={crop.sourceW} />
                </div>
                <div>
                    <label htmlFor="sourceH">height</label>
                    <input type="number" id='sourceH' onChange={HandleCrop} value={crop.sourceH} />
                </div>
                <div>
                    <label htmlFor="offsetX">Offset-X</label>
                    <input type="number" id='offsetX' onChange={HandleCrop} value={crop.offsetX} />
                </div>
                <div>
                    <label htmlFor="offsetY">Offset-y</label>
                    <input type="number" id='offsetY' onChange={HandleCrop} value={crop.offsetY} />
                </div>
                <button type='submit'>apply</button>
            </form>
            <button onClick={ResetCrop}>Reset</button>

        </div>
    )
}

export default Crop