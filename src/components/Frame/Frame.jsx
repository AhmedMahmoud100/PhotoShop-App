import './Frame.scss'
import imageData from './Frame.json'
import { useEffect, useState } from 'react'
export default function Frame({ frameEffect }) {
    const [frameProp, setFrameProp] = useState({})

    function HandleFrame(e) {
        setFrameProp({ ...frameProp, src: imageData[e.target.id].src, id: e.target.id })
        frameEffect({ ...frameProp, src: imageData[e.target.id].src, id: e.target.id })
    }

    return (
        <div className='frame'>
            <h2>frames</h2>
            <div className='imgContaier'>
                {imageData.map((img) => {
                    return <img src={img.src} alt='' key={img.id} id={img.id} onClick={HandleFrame} referrerPolicy='no-referrer'></img>
                })}
            </div>

        </div>
    )
}
