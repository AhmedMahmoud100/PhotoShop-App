import { useState } from 'react'
import './Transform.scss'

export default function Transform({ rotateEffect }) {
  const [rotateDegree, setRotateDegree] = useState({
    deg: 0,
    apply: false
  })
  function HandleRotate(e) {
    setRotateDegree(setRotateDegree({ deg: e.target.value, apply: false }))

  }
  function Apply() {
    rotateEffect({ deg: rotateDegree.deg, apply: true })
  }

  return (
    <div className='transform'>
      <h2>ROTATE IMAGE</h2>
      <div className='inputField'>
        <label htmlFor="rotate">Rotate degree</label>
        <input type="number" id='rotate' value={rotateDegree.deg} onChange={HandleRotate} />
      </div>
      <button onClick={() => setRotateDegree({ deg: 45, apply: false })}>Rotate 45</button>
      <button onClick={() => setRotateDegree({ deg: 90, apply: false })}>Rotate 90</button>
      <button onClick={() => setRotateDegree({ deg: 180, apply: false })}>Rotate 180</button>
      <button onClick={Apply}>Apply</button>
    </div>
  )
}
