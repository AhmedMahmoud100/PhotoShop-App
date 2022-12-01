import './Shape.scss'
import shapeData from './Shape.json'
import { useEffect, useState } from 'react'
export default function Shape({ shapeEffect }) {
    const [shapeProp, setShapeProp] = useState({})

    function HandleShape(e) {
        setShapeProp({ ...shapeProp, src: e.target.src, id: e.target.id })
        shapeEffect({ ...shapeProp, src: e.target.src, id: e.target.id })
    }
    function HandleApply() {
        setShapeProp({ ...shapeProp, apply: true })
        shapeEffect({ ...shapeProp, apply: true })
    }

    useEffect(() => {
        setShapeProp({ ...shapeProp, apply: false })
    }, [shapeProp.apply])
    return (
        <div className='shape'>
            <h2>choose your favourite shape</h2>

            {shapeData.map((img) => {
                return <img src={img.src} alt='' key={img.id} id={img.id} onClick={HandleShape}></img>
            })}
            <button onClick={HandleApply}>Apply</button>
        </div>
    )
}
