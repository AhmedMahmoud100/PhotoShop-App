import { useContext, useEffect, useRef, useState } from 'react'
import './ImgSection.scss'
import Test from '../Test/Test'
import { ThemeContext } from '../../context/ThemeContext'

export default function ImgSection(props) {
  const [imgSrc, setImgSrc] = useState('')
  const uploadInput = useRef()
  const img = useRef()
  const canvas = useRef()
  const download = useRef()
  const[cropEffect,setcropEffect] = useContext(ThemeContext)

  console.log(cropEffect)
  function handleUpload() {
    // setStyle({
    //   filters: '',
    //   ReSize: '',
    //   crop: ''
    // })
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

    ctx.filter = props.filtersEffect
    ctx.drawImage(img.current, 0, 0, canvas.current.width, canvas.current.height);


    if (cropEffect.apply) {
      let offsetX = cropEffect.offsetX;
      let offsetY = cropEffect.offsetY;
      let sourceW = cropEffect.sourceW;
      let sourceH = cropEffect.sourceH;

      canvas.current.width = sourceW;
      canvas.current.height = sourceH;
      // let destX = canvas.current.width / 2 - sourceW / 2;
      // let destY = canvas.current.height / 2 - sourceH / 2;

      ctx.filter = props.filtersEffect
      ctx.drawImage(img.current, offsetX, offsetY, sourceW, sourceH, 0, 0, sourceW, sourceH);

    }
  }, [cropEffect,props])



  function handleDownload() {
    download.current.href = canvas.current.toDataURL()
  }
  let x = String(props.resizeEffect.width)

  let y = String(props.resizeEffect.height)


  return (
    <div className='imgSection'>
      <div className="image">
        <img src={imgSrc} ref={img} ></img>

        <canvas ref={canvas} id="canvas" width={`${x}px`} height={`${y}px`} ></canvas>
        <Test/>
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
      <button>crop</button>
    </div>
  )
}
