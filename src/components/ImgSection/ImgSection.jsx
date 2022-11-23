import { useContext, useEffect, useRef, useState } from 'react'
import './ImgSection.scss'
import CropSquare from '../CropSquare/CropSquare'
import { ThemeContext } from '../../context/ThemeContext'

export default function ImgSection(props) {
  const [imgSrc, setImgSrc] = useState('')
  const uploadInput = useRef()
  const img = useRef()
  const canvas = useRef()
  const download = useRef()
  const [cropEffect, setcropEffect] = useContext(ThemeContext)
  const NewCanvas = useRef()
  const [first, setfirst] = useState(true)
  const [canvasInfo,setCanvasInfo]= useState({})
  const[style,setStyle] = useState()

  function handleUpload() {
    setcropEffect({
      offsetX: 0,
      offsetY: 0,
      sourceW: 150,
      sourceH: 100,
      apply: false,
    })
    let file = new FileReader();
    file.readAsDataURL(uploadInput.current.files[0]);

    file.onload = function () {
      setImgSrc(file.result)
    }

    let ctx = canvas.current.getContext('2d')
    img.current.onload = function () {
      setfirst(false)
      canvas.current.width = img.current.width;
      canvas.current.height = img.current.height;
      canvas.current.style.display = "block"
      NewCanvas.current.style.display = "none"
      img.current.style.display = "none"
     
      ctx.drawImage(img.current, 0, 0, canvas.current.width, canvas.current.height);
     
    }
   
  }

  useEffect(() => {
    let ctx = canvas.current.getContext('2d')
    if (img.current) {

      canvas.current.width = props.resizeEffect.width;
      canvas.current.height = props.resizeEffect.height;
      img.current.style.display = "none"
      NewCanvas.current.style.display = "none"
      canvas.current.style.display = "block"
      ctx.filter = props.filtersEffect
     
      ctx.drawImage(img.current, 0, 0, canvas.current.width, canvas.current.height);
     
      
      if (cropEffect.apply) {
        let Newctx = NewCanvas.current.getContext('2d')
        NewCanvas.current.width = canvas.current.width;
        NewCanvas.current.height = canvas.current.height;
        NewCanvas.current.style.display = "block"
        canvas.current.style.display = "none"
        Newctx.filter = props.filtersEffect

        let offsetX = cropEffect.offsetX;
        let offsetY = cropEffect.offsetY;
        let sourceW = cropEffect.sourceW;
        let sourceH = cropEffect.sourceH;

        NewCanvas.current.width = sourceW;
        NewCanvas.current.height = sourceH;

        Newctx.filter = props.filtersEffect
        Newctx.drawImage(canvas.current, offsetX, offsetY, sourceW, sourceH, 0, 0, sourceW, sourceH);
      }
    }
  }, [cropEffect, props])

  useEffect(() => {
    setcropEffect({
      offsetX: 0,
      offsetY: 0,
      sourceW: props.resizeEffect.width / 2,
      sourceH: props.resizeEffect.height / 2,
      apply: false,
    })
  }, [props.resizeEffect])


  function handleDownload() {
    if (cropEffect.apply) {
      download.current.href = NewCanvas.current.toDataURL()
    } else {
      download.current.href = canvas.current.toDataURL()
    }

  }

function CanvasInfo(e){
  const newCanvasInfo = {
    width : canvas.current.width,
    height :canvas.current.height,
    x : canvas.current.getBoundingClientRect().left ,
    y : canvas.current.getBoundingClientRect().top
  }
  setCanvasInfo({...newCanvasInfo})
}
 useEffect(()=> {
  console.log(canvas.current.getBoundingClientRect().left)
  CanvasInfo();
  if(props.rotateEffect > 0){
           setStyle ({ ...style, transform : `rotate(${props.rotateEffect}deg)`})
          
  }

 },[props,imgSrc])
  

//  useEffect(() => {
//   let ctx = canvas.current.getContext('2d')
//   ctx.drawImage(img.current, 0, 0, canvas.current.width, canvas.current.height)
//  },[style])
  return (
    <div className='imgSection'>
      <div className="up">
        <div className={first ? "first active" : "first hidden"}>
          <h2>Photo Editor</h2>
          <p> welcome to the free modern photo editor ,start editing by clicking on
            the open photo button.
          </p>
        </div>
        <div className={first ? "image hidden" : "image active"} >

          <img src={imgSrc} ref={img} width='300px' height='250px' ></img>

          <canvas ref={canvas} id="canvas" className={props.showBorder && !cropEffect.apply ? "blur" :"normal"} style={style}></canvas>
          <canvas ref={NewCanvas} ></canvas>
          {  props.showBorder && !cropEffect.apply ? <CropSquare canvasDimentions= {canvasInfo}/> : null }

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
