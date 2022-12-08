import './Color.scss'

export default function Color() {
  return (
    <div className='color'>
      <h2>Color Extraction</h2>
      <h3> - click on the specific color you want to extract it </h3>
      <p>
        - the specific color of the pixel you had clicked on
        will be show under the image
      </p>
      <p> - the average color of the <span>41x41 px</span> surrounding the pixel you had clicked on
        will be show under the image too </p>
    </div>
  )
}
