import { useState } from 'react'
import './Transform.scss'

export default function Transform({rotateEffect}) {
    const[rotateDegree,setRotateDegree] = useState()
    function HandleRotate(e){
        setRotateDegree(e.target.value)
        rotateEffect(e.target.value)
    }
  return (
    <div className='transform'>
        <h2>ROTATE IMAGE</h2>
        <div className='inputField'>
            <label htmlFor="rotate">Rotate degree</label>
            <input type="number" id='rotate' value={rotateDegree} onChange={HandleRotate}/>
        </div>
        <button onClick={() =>rotateEffect(45) }>Rotate 45</button>
        <button onClick={() =>rotateEffect(90) }>Rotate 90</button>
        <button onClick={() =>rotateEffect(180) }>Rotate 180</button>
        </div>
  )
}
