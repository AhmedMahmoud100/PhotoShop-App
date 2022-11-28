import { useContext, useEffect, useRef, useState } from 'react'
import './ImgSection.scss'
import CropSquare from '../CropSquare/CropSquare'
import { ThemeContext } from '../../context/ThemeContext'

export default function Clone() {
const [imgSrc, setImgSrc] = useState('')
  const uploadInput = useRef()
  const img = useRef()
  const canvas = useRef()
  const download = useRef()
  const [cropEffect, setcropEffect] = useContext(ThemeContext)
  const NewCanvas = useRef()
  const [first, setfirst] = useState(true)
  const [canvasInfo, setCanvasInfo] = useState({})
  const ctxRef = useRef()
  const NewctxRef = useRef()
  const [drawing, setdrawing] = useState(false)
  const container = useRef()


  function handleUpload() {
  let file = new FileReader();
  file.readAsDataURL(uploadInput.current.files[0]);

  file.onload = function () {
    setImgSrc(file.result)
  }

  let ctx = canvas.current.getContext('2d')
  let Newctx = NewCanvas.current.getContext('2d')
  ctxRef.current = ctx
  NewctxRef.current = Newctx

  img.current.onload = function () {
    setfirst(false)
    canvas.current.width = NewCanvas.current.width = img.current.width;
    canvas.current.height = NewCanvas.current.height = img.current.height;

    // canvas.current.style.display = "block"
    // NewCanvas.current.style.display = "none"
    // img.current.style.display = "none"
    // NewctxRef.current.drawImage(img.current,0,0)

    NewctxRef.current.drawImage(img.current, 0, 0, canvas.current.width, canvas.current.height);

    const canvasImageData = NewctxRef.current.getImageData(0,0,canvas.current.width,canvas.current.height)
    console.log(canvasImageData.data[0])
    console.log(canvasImageData.data[1])
    console.log(canvasImageData.data[2])
    console.log(canvasImageData.data[3])
    console.log("gg" , (canvas.current.width - 1) * 4)
    console.log(canvasImageData.data[(canvas.current.width - 1) * 4])
    console.log(canvasImageData.data[(canvas.current.width - 1) * 4 + 1])
    console.log(canvasImageData.data[(canvas.current.width - 1) * 4 + 2])
    console.log(canvasImageData.data[(canvas.current.width - 1) * 4 + 3])
    
    NewctxRef.current.clearRect(0,0,canvas.current.width,canvas.current.height)
    for (let index = 0 ,datalength = canvasImageData.data.length ;
      index < datalength ; index+=4 ) {
         
        let firstR = canvasImageData.data[0]
        let firsrG = canvasImageData.data[1]
        let firstB = canvasImageData.data[2]

        let endR = (canvas.current.width - 1) * 4
        let endG = (canvas.current.width - 1) * 4
        let endB = (canvas.current.width - 1) * 4
        const r = canvasImageData.data[index] ;
        const g = canvasImageData.data[index + 1] ;
        const b = canvasImageData.data[index + 2] ;
        
       
        if(r >= firstR && r <= endR && g >= firsrG && g <= endG && b >= firstB && b <= endB ){
        canvasImageData.data[index + 3] = 0 ;
       }

      }
      img.current.width = NewCanvas.current.width ;
      img.current.height = NewCanvas.current.height ;
      ctxRef.current.putImageData(canvasImageData,0,0)
      // NewctxRef.current.putImageData(canvasImageData,0,0) ;

  }
  // img.current.crossOrigin = ''
}
function handleDownload() {
    download.current.href = canvas.current.toDataURL()
  }



  return (
    <div className='imgSection'>
      <div className="up">
        <div className={first ? "first active" : "first hidden"}>
          <h2>Photo Editor</h2>
          <p> welcome to the free modern photo editor ,start editing by clicking on
            the open photo button.
          </p>
        </div>
        <div className={first ? "image hidden" : "image active"} ref={container} >

          <img src={imgSrc} ref={img} width='300px' height='250px' ></img>

          <canvas ref={canvas} id="canvas"  ></canvas>
          <canvas ref={NewCanvas} ></canvas>
         

        </div>

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