import './Sticker.scss'
import { useState, useEffect } from 'react'
import stickerData from './Sticker.json'

export default function Sticker({ stickerEffect }) {
    const [stickerProp, setstickerProp] = useState({
        width: 50,
        height: 40
    })

    function HandleSticker(e) {
        setstickerProp({ ...stickerProp, src: stickerData[e.target.id].src, id: e.target.id })
        stickerEffect({ ...stickerProp, src: stickerData[e.target.id].src, id: e.target.id })
    }
    function HandleApply() {
        setstickerProp({ ...stickerProp, apply: true })
        stickerEffect({ ...stickerProp, apply: true })
    }
    useEffect(() => {
        setstickerProp({ ...stickerProp, apply: false })
    }, [stickerProp.apply])

    function HandleSize(e) {
        setstickerProp({ ...stickerProp, [e.target.id]: e.target.value })
        stickerEffect({ ...stickerProp, [e.target.id]: e.target.value })
    }
    return (
        <div className='sticker'>
            <h2>choose your favourite sticker</h2>
            <div className='stickerContaier'>
                {stickerData.map((img) => {
                    return <img src={img.src} alt='' key={img.id} id={img.id} onClick={HandleSticker}></img>
                })}
            </div>
            <div>
                <label htmlFor="width">width</label>
                <input type="number" id='width' onChange={HandleSize} value={stickerProp.width} />
            </div>
            <div>
                <label htmlFor="height">height</label>
                <input type="number" id='height' onChange={HandleSize} value={stickerProp.height} />
            </div>
            <button onClick={HandleApply}>Apply</button>
        </div>
    )
}


