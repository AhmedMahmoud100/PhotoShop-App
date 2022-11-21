import { useContext, useEffect, useRef, useState } from 'react'
import './ImgSection.scss'
import { ThemeContext } from '../../context/ThemeContext'

export default function ImgSection() {
  const [style, setStyle] = useContext(ThemeContext)
  const [imgSrc, setImgSrc] = useState('')
  const uploadInput = useRef()
  const img = useRef()
  const canvas = useRef()
  const download = useRef()

  function handleUpload() {
    setStyle({
      filters:'' ,
      ReSize : ''
    })
    let file = new FileReader();
    file.readAsDataURL(uploadInput.current.files[0]);

    file.onload = function () {
      setImgSrc(file.result)
    }
  }

  useEffect(() => {

    let ctx = canvas.current.getContext('2d')
    img.current.onload = function () {
      
      canvas.current.width = img.current.width;
      canvas.current.height = img.current.height;
      img.current.style.display = "none"

      ctx.drawImage(img.current, 0, 0, canvas.current.width, canvas.current.height);
    }

    ctx.filter = style.filters
    ctx.drawImage(img.current, 0, 0, canvas.current.width, canvas.current.height);
  }, [style])

  function handleDownload() {
    download.current.href = canvas.current.toDataURL()
  }
  let x = String(style.ReSize.width)
  
  let y =String(style.ReSize.height)
 
  
  
  return (
    <div className='imgSection'>
      <div className="image">
        <img src={imgSrc}  ref={img} ></img>

        <canvas ref={canvas} id="canvas" width={`${x}px`} height ={`${y}px`} ></canvas>

      </div>

      <div className='img-buttons'>
        <div className='upload' >
          <label htmlFor="upload" >upload</label>
          <input type="file" id='upload' onChange={handleUpload} ref={uploadInput} />
        </div>
        <div className='download'>
          <a download={true} id="download" onClick={handleDownload} ref={download}>Download</a>
        </div>


      </div>
    </div>
  )
}
