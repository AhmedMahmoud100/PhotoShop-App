import { useState } from 'react'
import './Rotate.scss'

export default function Rotate({ rotateEffect }) {
  const [rotateDegree, setRotateDegree] = useState(0)

  function HandleRotate(e) {
    setRotateDegree(e.target.value)
    rotateEffect(e.target.value)
  }

  return (
    <div className='transform'>
      <h2>ROTATE</h2>
      <div className='inputField'>
        <label htmlFor="rotate">Rotate degree</label>
        <input type="number" id='rotate' value={rotateDegree} onChange={HandleRotate} />
      </div>
      <button onClick={() => {
        setRotateDegree(45)
        rotateEffect(45)
      }
      }>Rotate 45</button>
      <button onClick={() => {
        setRotateDegree(90)
        rotateEffect(90)
      }
      }>Rotate 90</button>
      <button onClick={() => {
        setRotateDegree(180)
        rotateEffect(180)
      }
      }>Rotate 180</button>
    </div>
  )
}
