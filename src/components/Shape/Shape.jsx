import './Shape.scss'
import shapeData from './Shape.json'
import { useState } from 'react'
export default function Shape({ shapeEffect }) {
    const [shapeProp, setShapeProp] = useState({})

    function HandleShape(e) {
        setShapeProp({ ...shapeProp, src: e.target.src, id: e.target.id })
        shapeEffect({ ...shapeProp, src: e.target.src, id: e.target.id })
    }

    return (
        <div className='shape'>
            <h2>Shapes</h2>
            <div className='shapes-container'>
                {shapeData.map((img) => {
                    return <img src={img.src} alt='' key={img.id} id={img.id} onClick={HandleShape} referrerPolicy='no-referrer' ></img>
                })}
            </div>
        </div>
    )
}
