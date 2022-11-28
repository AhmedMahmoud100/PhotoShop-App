import './Frame.scss'
import imageData from './Frame.json'
import { useEffect, useState } from 'react'
export default function Frame({ frameEffect }) {
    const [frameProp, setFrameProp] = useState({})

    function HandleFrame(e) {
        setFrameProp({ ...frameProp, src: imageData[e.target.id].src, id: e.target.id })
        frameEffect({ ...frameProp, src: imageData[e.target.id].src, id: e.target.id })
    }
    function HandleApply() {
        setFrameProp({ ...frameProp, apply: true })
        frameEffect({ ...frameProp, apply: true })
    }
    useEffect(() => {
        setFrameProp({ ...frameProp, apply: false })
    }, [frameProp.apply])
    return (
        <div className='frame'>
            <h2>choose your favourite frame</h2>
            <div className='imgContaier'>
                {imageData.map((img) => {
                    return <img src={img.src} alt='' key={img.id} id={img.id} onClick={HandleFrame}></img>
                })}
            </div>
            <button onClick={HandleApply}>Apply</button>
        </div>
    )
}
