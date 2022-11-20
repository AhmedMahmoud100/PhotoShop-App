import { useContext, useRef, useState } from 'react'
import './ImgSection.scss'
import { ThemeContext } from '../../context/ThemeContext'

export default function ImgSection() {
  const [style,setStyle] = useContext(ThemeContext)
  const [imgSrc, setImgSrc] = useState('')
  const uploadInput = useRef()

  function handleUpload() {
    let file = new FileReader();
    file.readAsDataURL(uploadInput.current.files[0]);

    file.onload = function () {
      setImgSrc(file.result)
      setStyle('')
    }

  }

  return (
    <div className='imgSection'>
      <div className="image">
        <img src={imgSrc} style={{ filter: style }}  ></img>
      </div>

      <div className='img-buttons'>
        <div className='upload' >
          <label htmlFor="upload" >upload</label>
          <input type="file" id='upload' onChange={handleUpload} ref={uploadInput} />
        </div>
        <div className='download'>
        <a download={true} id="download">Download</a>
        </div>

        
      </div>
    </div>
  )
}
