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
  const [canvasInfo, setCanvasInfo] = useState({})
  const ctxRef = useRef()
  const NewctxRef = useRef()

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
    let Newctx = NewCanvas.current.getContext('2d')
    ctxRef.current = ctx
    NewctxRef.current = Newctx

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
    setcropEffect({
      offsetX: 0,
      offsetY: 0,
      sourceW: props.resizeEffect.width / 2,
      sourceH: props.resizeEffect.height / 2,
      apply: false,
    })
  }, [props.resizeEffect])

  function handleDownload() {
    download.current.href = canvas.current.toDataURL()
  }

  function CanvasInfo(e) {
    const newCanvasInfo = {
      width: canvas.current.width,
      height: canvas.current.height,
      x: canvas.current.getBoundingClientRect().left,
      y: canvas.current.getBoundingClientRect().top
    }
    setCanvasInfo({ ...newCanvasInfo })
  }

  useEffect(() => {
    console.log(canvas.current.getBoundingClientRect().left)
    CanvasInfo();
  }, [props, imgSrc])

  function MakeNewCanvas() {
    NewCanvas.current.width = canvas.current.width;
    NewCanvas.current.height = canvas.current.height;
    NewCanvas.current.style.display = "block"
    canvas.current.style.display = "none";
    NewctxRef.current.drawImage(canvas.current, 0, 0, canvas.current.width, canvas.current.height);
  }

  useEffect(() => {
    if (NewctxRef.current) {
      MakeNewCanvas();
    }
  }, [props])


  function ConvertToTheOriginalCanvas(option) {
    if (option) {
      NewCanvas.current.style.display = "none"
      canvas.current.style.display = "block";
      canvas.current.width = NewCanvas.current.width;
      canvas.current.height = NewCanvas.current.height;
      ctxRef.current.drawImage(NewCanvas.current, 0, 0, NewCanvas.current.width, NewCanvas.current.height);
    }
  }

  function HandleFilters() {
    NewctxRef.current.filter = props.filtersEffect.filter
    NewctxRef.current.drawImage(canvas.current, 0, 0, canvas.current.width, canvas.current.height);
  }

  useEffect(() => {
    if (props.section === "filter") {
      HandleFilters();
      ConvertToTheOriginalCanvas(props.filtersEffect.apply);
    }
  }, [props.filtersEffect])

  function HandleResize() {
    NewCanvas.current.width = props.resizeEffect.width;
    NewCanvas.current.height = props.resizeEffect.height;
    NewctxRef.current.drawImage(canvas.current, 0, 0, NewCanvas.current.width, NewCanvas.current.height)
  }

  useEffect(() => {
    if (props.section === "resize") {
      HandleResize();
      ConvertToTheOriginalCanvas(props.resizeEffect.apply);
    }
  }, [props.resizeEffect])

  function HandleRotate() {
    const rad = props.rotateEffect.deg * Math.PI / 180
    const width = canvas.current.width;
    const height = canvas.current.height
    NewctxRef.current.translate(width / 2, height / 2)
    NewctxRef.current.rotate(rad)
    NewctxRef.current.drawImage(canvas.current, width / 2 * (-1), height / 2 * (-1), width, height)
    NewctxRef.current.rotate(rad * (-1));
    NewctxRef.current.translate(width / 2 * (-1), height / 2 * (-1))
  }

  useEffect(() => {
    if (props.section === "transform") {
      HandleRotate();
      ConvertToTheOriginalCanvas(props.rotateEffect.apply);
    }
  }, [props.rotateEffect])

  function HandleCrop() {
    let offsetX = cropEffect.offsetX;
    let offsetY = cropEffect.offsetY;
    let sourceW = cropEffect.sourceW;
    let sourceH = cropEffect.sourceH;
    NewCanvas.current.width = sourceW;
    NewCanvas.current.height = sourceH;

    NewctxRef.current.drawImage(canvas.current, offsetX, offsetY, sourceW, sourceH, 0, 0, sourceW, sourceH);
  }

  useEffect(() => {
    if (props.section === "crop" && cropEffect.apply) {
      HandleCrop();
      ConvertToTheOriginalCanvas(cropEffect.apply);
    }
  }, [cropEffect])

  useEffect(() => {

  }, [props])
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

          <canvas ref={canvas} id="canvas" className={props.showBorder && !cropEffect.apply ? "blur" : "normal"} ></canvas>
          <canvas ref={NewCanvas} ></canvas>
          {props.showBorder && !cropEffect.apply ? <CropSquare canvasDimentions={canvasInfo} /> : null}

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
