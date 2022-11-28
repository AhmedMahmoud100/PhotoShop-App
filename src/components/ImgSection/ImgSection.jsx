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
  const [drawing, setdrawing] = useState(false)
  const container = useRef()
  const sticker = useRef()
  const [stickerPosition, setStickerPosition] = useState(
    {
      x: 0,
      y: 0
    }
  )

  function handleUpload() {
    setcropEffect({
      offsetX: 0,
      offsetY: 0,
      sourceW: 150,
      sourceH: 150,
      apply: false,
      text: 'text',
      font: "sans-serif",
      weight: "400",
      color: "red",
      size: 20,
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
      MakeNewCanvas();
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
    const updatedCanvasInfo = {
      width: canvas.current.width,
      height: canvas.current.height,
      x: container.current.getBoundingClientRect().left,
      y: container.current.getBoundingClientRect().top
    }
    setCanvasInfo({ ...updatedCanvasInfo })
  }

  useEffect(() => {
    CanvasInfo();
  }
    , [props])
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
      setcropEffect({ ...cropEffect, addText: false })
    }
  }, [props.section])

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
    if (props.drawEffect.apply) {
      ConvertToTheOriginalCanvas(props.drawEffect.apply)
    }
  }, [props.drawEffect])

  function DrawStart(e, fontSize, fontColor, shadowSize, shadowColor) {
    let x = e.clientX - canvasInfo.x
    let y = e.clientY - canvasInfo.y
    NewctxRef.current.beginPath()

    NewctxRef.current.lineJoin = NewctxRef.current.lineCap = 'round'
    NewctxRef.current.shadowBlur = shadowSize;
    NewctxRef.current.shadowColor = shadowColor
    NewctxRef.current.strokeStyle = fontColor
    NewctxRef.current.lineWidth = fontSize
    NewctxRef.current.moveTo(x, y)
    setdrawing(true)
  }

  function Draw(e) {
    if (drawing) {
      let x = e.clientX - canvasInfo.x
      let y = e.clientY - canvasInfo.y
      NewctxRef.current.lineTo(x, y)
      NewctxRef.current.stroke()
    }

  }
  function DrawEnd() {
    NewctxRef.current.closePath();
    setdrawing(false)
  }

  function HandleText() {
    if (NewctxRef.current) {
      MakeNewCanvas();
      let textOffsetY = cropEffect.offsetY + props.textEffect.size
      let maxTextWidth = cropEffect.sourceW + cropEffect.offsetX
      NewctxRef.current.fillStyle = `${props.textEffect.color}`
      NewctxRef.current.font = `${props.textEffect.weight} ${props.textEffect.size}px ${props.textEffect.font}`
      NewctxRef.current.fillText(cropEffect.text, cropEffect.offsetX, textOffsetY, maxTextWidth)
    }
  }

  useEffect(() => {
    if (props.section === "text" && props.textEffect.addText) {
      setcropEffect({ ...cropEffect, ...props.textEffect })
    }
  }, [props.textEffect])
  useEffect(() => {

    if (props.section === "text" && props.textEffect.apply) {
      HandleText();
      ConvertToTheOriginalCanvas(true)
    }
  }, [props, cropEffect])

  function HandleBorder() {
    if (NewctxRef.current) {
      let newWidth = canvas.current.width + props.borderEffect.width * 2
      let newHeight = canvas.current.height + props.borderEffect.width * 2
      NewCanvas.current.width = newWidth
      NewCanvas.current.height = newHeight

      NewctxRef.current.beginPath();
      NewctxRef.current.strokeStyle = props.borderEffect.color;
      NewctxRef.current.lineWidth = props.borderEffect.width
      NewctxRef.current.strokeRect(0, 0, newWidth, newHeight)
      NewctxRef.current.drawImage(img.current, props.borderEffect.width / 2, props.borderEffect.width / 2, canvas.current.width + props.borderEffect.width, canvas.current.height + props.borderEffect.width)
    }
  }

  useEffect(() => {
    HandleBorder();
    ConvertToTheOriginalCanvas(props.borderEffect.apply)
  }, [props.borderEffect])

  function HandleFrame() {
    if (NewctxRef.current) {
      let offsite = 50;
      if (props.frameEffect.id == 2) {
        offsite = 80
      }
      else if (props.frameEffect.id == 3) {
        offsite = 100
      }
      else if (props.frameEffect.id == 4 || props.frameEffect.id == 5) {
        offsite = 40
      }
      else if (props.frameEffect.id == 6) {
        offsite = 350
      }
      const frameImage = new Image(NewCanvas.current.width, NewCanvas.current.height);
      frameImage.src = props.frameEffect.src

      NewCanvas.current.width = canvas.current.width + offsite
      NewCanvas.current.height = canvas.current.height + offsite
      NewctxRef.current.drawImage(canvas.current, offsite / 2, offsite / 2, canvas.current.width, canvas.current.height)
      NewctxRef.current.drawImage(frameImage, 0, 0, NewCanvas.current.width, NewCanvas.current.height)
    }
  }

  useEffect(() => {
    HandleFrame();
    ConvertToTheOriginalCanvas(props.frameEffect.apply)
  }, [props.frameEffect])


  function HandleSticker() {
    if (NewctxRef.current && props.stickerEffect.src) {
      sticker.current.style.display = 'block'
      if (props.stickerEffect.apply) {
        sticker.current.style.display = 'none'
        NewctxRef.current.drawImage(sticker.current, stickerPosition.x, stickerPosition.y, props.stickerEffect.width, props.stickerEffect.height)
      }
    }
  }

  useEffect(() => {
    HandleSticker();
    ConvertToTheOriginalCanvas(props.stickerEffect.apply)
  }, [props.stickerEffect])


  function DragStart(e) {
    e.dataTransfer.setDragImage(new Image(), 0, 0)
  }

  function Drag(e) {
    let offsetX = e.clientX - canvasInfo.x;
    let offsetY = e.clientY - canvasInfo.y;
    if (offsetX < canvasInfo.width + props.stickerEffect.width && offsetY < canvasInfo.height + props.stickerEffect.height) {
      setStickerPosition({
        x: offsetX,
        y: offsetY
      })
    }
  }

  const stickerStyle = {
    top: stickerPosition.y,
    left: stickerPosition.x,
    width: +props.stickerEffect.width || 50,
    height: +props.stickerEffect.height || 40
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

          <canvas ref={canvas} id="canvas" className={props.showBorder && !cropEffect.apply ? "blur" : "normal"} ></canvas>
          <canvas ref={NewCanvas} onMouseDown={props.section === "draw" ? (e) => DrawStart(e, props.drawEffect.fontSize, props.drawEffect.fontColor, props.drawEffect.shadowSize, props.drawEffect.shadowColor) : null} onMouseMove={props.section === "draw" ? Draw : null} onMouseUp={props.section === "draw" ? DrawEnd : null}></canvas>
          {props.showBorder && !cropEffect.apply || cropEffect.addText ? <CropSquare canvasDimentions={canvasInfo} /> : null}
          {props.section === 'sticker' ? <img src={props.stickerEffect.src} ref={sticker} className='sticker' draggable={true} onDragStart={DragStart} onDragEnd={Drag} style={stickerStyle} ></img> : null}

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
