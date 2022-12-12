import { useContext, useEffect, useRef, useState } from 'react'
import './ImgSection.scss'
import CropArea from '../CropArea/CropArea'
import { ThemeContext } from '../../context/ThemeContext'
import { Drag, DragStart } from '../../Functions/Crop'
import { useLocation } from 'react-router-dom'

export default function ImgSection(props) {
  const { state } = useLocation();
  const [imgSrc, setImgSrc] = useState('')
  const canvas = useRef()
  const download = useRef()
  const [cropEffect, setcropEffect] = useContext(ThemeContext)
  const NewCanvas = useRef()
  const [canvasInfo, setCanvasInfo] = useState({})
  const ctxRef = useRef()
  const NewctxRef = useRef()
  const imgDataRef = useRef()
  const [drawing, setdrawing] = useState(false)
  const container = useRef()
  const [text, setText] = useState('text')
  const textInput = useRef()
  const sticker = useRef()
  const [dragPosition, setDragPosition] = useState(
    {
      offsetX: 0,
      offsetY: 0
    }
  )
  const [boxPosition, setBoxPosition] = useState({
    top: 50,
    left: 50,
    color: 'black'
  })
  const [colorsArray, SetColorsArray] = useState([])
  const [dim, setDim] = useState()
  const [cropArea, setCropArea] = useState(false)

  useEffect(() => {
    setImgSrc(props.options.src)
  }, [props.options.src])

  useEffect(() => {
    if (props.options.download) {
      download.current.click();
      setCropArea(false)
    }
    else {
      if (props.section === "text" && props.options.save) {
        HandleText()
        ConvertToTheOriginalCanvas()
        MakeNewCanvas();

      }
      else if (props.section === "sticker" && props.options.save) {
        HandleSticker()
        ConvertToTheOriginalCanvas()
        MakeNewCanvas();
      }
      else if (props.section == "crop" && props.options.save) {
        setCropArea(false)
        HandleCrop();
        ConvertToTheOriginalCanvas()
        MakeNewCanvas();
      }
      else if (props.options.save && props.section != 'color') {
        ConvertToTheOriginalCanvas()
        MakeNewCanvas();
      }
    }

  }, [props.options])

  useEffect(() => {
    if (state.test === true) {
      setImgSrc('/cat.png')
    } else {
      setImgSrc(state.src)
    }

  }, [state])

  useEffect(() => {
    const image = new Image();
    image.src = imgSrc
    let ctx = canvas.current.getContext('2d', { willReadFrequently: true })
    let Newctx = NewCanvas.current.getContext('2d')
    ctxRef.current = ctx
    NewctxRef.current = Newctx

    image.onload = function () {
      canvas.current.width = image.naturalWidth / 2;
      canvas.current.height = image.naturalHeight / 2;
      canvas.current.style.display = "block"
      NewCanvas.current.style.display = "none"

      ctx.drawImage(image, 0, 0, canvas.current.width, canvas.current.height);
      MakeNewCanvas();
      CanvasInfo();
      props.imgDimentions(
        {
          width: image.naturalWidth,
          height: image.naturalHeight
        }
      )
    }
  }, [imgSrc])

  useEffect(() => {
    setcropEffect({
      offsetX: 0,
      offsetY: 0,
      sourceW: canvas.current.width / 2,
      sourceH: canvas.current.height / 2,
    })
  }, [props.options.save])

  function handleDownload() {
    NewCanvas.current.width = canvas.current.width * 2;
    NewCanvas.current.height = canvas.current.height * 2;

    NewctxRef.current.drawImage(canvas.current, 0, 0, NewCanvas.current.width, NewCanvas.current.height)
    download.current.href = NewCanvas.current.toDataURL()
    NewctxRef.current.clearRect(0, 0, NewCanvas.current.width, NewCanvas.current.height)
    NewCanvas.current.width = canvas.current.width;
    NewCanvas.current.height = canvas.current.height;
    NewctxRef.current.drawImage(canvas.current, 0, 0, canvas.current.width, canvas.current.height)
  }

  function CanvasInfo() {
    const updatedCanvasInfo = {
      width: canvas.current.width,
      height: canvas.current.height,
      x: container.current.getBoundingClientRect().left,
      y: container.current.getBoundingClientRect().top
    }
    setCanvasInfo({ ...updatedCanvasInfo })
  }


  function MakeNewCanvas() {
    NewCanvas.current.width = canvas.current.width;
    NewCanvas.current.height = canvas.current.height;
    NewCanvas.current.style.display = "block"
    canvas.current.style.display = "none";
    NewctxRef.current.drawImage(canvas.current, 0, 0, canvas.current.width, canvas.current.height);
    CanvasInfo();
  }

  useEffect(() => {
    if (NewctxRef.current) {
      MakeNewCanvas();
      if ((props.section == "crop")) {
        setCropArea(true)
      } else {
        setCropArea(false)
      }
      if (props.section === 'color') {
        ConvertToTheOriginalCanvas();
      }
    }
  }, [props.section])

  function ConvertToTheOriginalCanvas() {
    NewCanvas.current.style.display = "none"
    canvas.current.style.display = "block";
    canvas.current.width = NewCanvas.current.width;
    canvas.current.height = NewCanvas.current.height;
    ctxRef.current.drawImage(NewCanvas.current, 0, 0, NewCanvas.current.width, NewCanvas.current.height);
  }

  function HandleFilters() {
    NewctxRef.current.clearRect(0, 0, canvas.current.width, canvas.current.height)
    NewctxRef.current.filter = props.filtersEffect.filter
    NewctxRef.current.drawImage(canvas.current, 0, 0, canvas.current.width, canvas.current.height);
  }

  useEffect(() => {
    if (props.section === "filter") {
      HandleFilters();
    }
  }, [props.filtersEffect])

  function HandleResize() {
    NewCanvas.current.width = props.resizeEffect.width / 2;
    NewCanvas.current.height = props.resizeEffect.height / 2;
    NewctxRef.current.drawImage(canvas.current, 0, 0, NewCanvas.current.width, NewCanvas.current.height)
  }

  useEffect(() => {
    if (props.section === "resize") {
      HandleResize();
    }
  }, [props.resizeEffect])

  function HandleRotate() {
    NewctxRef.current.clearRect(0, 0, canvas.current.width, canvas.current.height)
    const rad = props.rotateEffect * Math.PI / 180
    const width = canvas.current.width;
    const height = canvas.current.height
    NewctxRef.current.translate(width / 2, height / 2)
    NewctxRef.current.rotate(rad)
    NewctxRef.current.drawImage(canvas.current, width / 2 * (-1), height / 2 * (-1), width, height)
    NewctxRef.current.rotate(rad * (-1));
    NewctxRef.current.translate(width / 2 * (-1), height / 2 * (-1))
  }

  useEffect(() => {
    if (props.section === "rotate") {
      HandleRotate();
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

  function DrawStart(e, fontSize, fontColor, shadowSize, shadowColor) {
    let x = e.pageX - canvasInfo.x
    let y = e.pageY - canvasInfo.y
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
      let x = e.pageX - canvasInfo.x
      let y = e.pageY - canvasInfo.y
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
      NewctxRef.current.fillStyle = `${props.textEffect.color}`
      NewctxRef.current.font = `${props.textEffect.weight} ${props.textEffect.size}px ${props.textEffect.font}`
      NewctxRef.current.fillText(text, dragPosition.offsetX, dragPosition.offsetY + props.textEffect.size)
      textInput.current.style.display = 'none'
      setDragPosition({ offsetX: 0, offsetY: 0 })
    }
  }

  const Textstyle = {
    color: props.textEffect.color,
    fontSize: props.textEffect.size,
    fontWeight: props.textEffect.weight,
    left: dragPosition.offsetX,
    top: dragPosition.offsetY,
  }

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
      NewctxRef.current.drawImage(canvas.current, props.borderEffect.width / 2, props.borderEffect.width / 2, canvas.current.width + props.borderEffect.width, canvas.current.height + props.borderEffect.width)
    }
  }

  useEffect(() => {
    HandleBorder();
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
  }, [props.frameEffect])


  function HandleSticker() {
    sticker.current.style.display = 'none'
    NewctxRef.current.drawImage(sticker.current, dragPosition.offsetX, dragPosition.offsetY, props.stickerEffect.width, props.stickerEffect.height)
    setDragPosition({ offsetX: 0, offsetY: 0 })
  }

  useEffect(() => {
    if (NewctxRef.current && props.stickerEffect.src) {
      sticker.current.style.display = 'block'
    }
  }, [props.stickerEffect])

  const stickerStyle = {
    top: dragPosition.offsetY,
    left: dragPosition.offsetX,
    width: +props.stickerEffect.width || 50,
    height: +props.stickerEffect.height || 40
  }

  function HandleShape() {
    if (NewctxRef.current) {
      const frameImage = new Image(NewCanvas.current.width, NewCanvas.current.height);
      frameImage.src = props.shapeEffect.src

      frameImage.onload = function () {
        NewctxRef.current.save()
        NewctxRef.current.clearRect(0, 0, NewCanvas.current.width, NewCanvas.current.height)
        if (props.shapeEffect.id == 2) {

          const raduis = Math.min(NewCanvas.current.width, NewCanvas.current.height)
          NewCanvas.current.width = NewCanvas.current.height = raduis
          NewctxRef.current.drawImage(frameImage, 0, 0, raduis, raduis)
        }
        else {
          NewCanvas.current.width = canvas.current.width
          NewCanvas.current.height = canvas.current.height
          NewctxRef.current.drawImage(frameImage, 0, 0, NewCanvas.current.width, NewCanvas.current.height)
        }
        NewctxRef.current.globalCompositeOperation = 'source-in'
        NewctxRef.current.drawImage(canvas.current, 0, 0, NewCanvas.current.width, NewCanvas.current.height)
        NewctxRef.current.restore()
      }

    }
  }

  useEffect(() => {
    if (props.section === 'shape') {
      HandleShape()
    }
  }, [props.shapeEffect])

  if (ctxRef.current) {
    let imgData = ctxRef.current.getImageData(0, 0, canvas.current.width, canvas.current.height).data;
    imgDataRef.current = imgData
  }

  function GetPixelColor(cols, offsetX, offsetY) {
    let y = offsetY - 1 >= 0 ? offsetY - 1 : 0
    let x = offsetX - 1 >= 0 ? offsetX - 1 : 0
    const pixelIndex = (cols * y) + x
    const colorIndex = pixelIndex * 4

    const PixelColor = {
      red: imgDataRef.current[colorIndex],
      green: imgDataRef.current[colorIndex + 1],
      blue: imgDataRef.current[colorIndex + 2],
      alpha: imgDataRef.current[colorIndex + 3]
    }
    return PixelColor
  }

  function GetPixel(e) {
    let cols = canvas.current.width

    let offsetX = Math.floor(e.pageX - canvasInfo.x)
    let offsetY = Math.floor(e.pageY - canvasInfo.y)

    let clientX = Math.min(offsetX, canvasInfo.width);
    clientX = Math.max(clientX, 0);

    let clientY = Math.min(offsetY, canvasInfo.height);
    clientY = Math.max(clientY, 0);

    let BoxOffsetX = Math.min(offsetX - 20, canvasInfo.width - 40);
    BoxOffsetX = Math.max(BoxOffsetX, 0);

    let BoxOffsetY = Math.min(offsetY - 20, canvasInfo.height - 40);
    BoxOffsetY = Math.max(BoxOffsetY, 0);

    let c = GetPixelColor(cols, clientX, clientY)

    let colorString;

    if (c.alpha == 255) {
      colorString = `rgb(${c.red} ${c.green} ${c.blue})`
    } else {
      const alpha = c.alpha / 255
      colorString = `rgb(${c.red} ${c.green} ${c.blue} / ${alpha.toFixed(1)})`
    }

    setBoxPosition({ top: BoxOffsetY, left: BoxOffsetX, color: colorString, clientX: clientX, clientY: clientY })
  }

  function getAverage(cols, offsetX, offsetY) {
    let reds = 0;
    let greens = 0;
    let blues = 0;
    let alphas = 0;

    for (let x = -20; x <= 20; x++) {
      for (let y = -20; y <= 20; y++) {

        let PositionX = Math.min(offsetX + x, canvasInfo.width)
        PositionX = Math.max(PositionX, 0)

        let PositionY = Math.min(offsetY + y, canvasInfo.height)
        PositionY = Math.max(PositionY, 0)

        let c = GetPixelColor(cols, PositionX, PositionY);
        reds += c.red;
        greens += c.green;
        blues += c.blue;
        alphas += c.alpha
      }
    }
    let nums = 41 * 41;
    let red = Math.round(reds / nums)
    let green = Math.round(greens / nums)
    let blue = Math.round(blues / nums)
    let alpha = Math.round(alphas / nums)

    let colorString;

    if (alpha == 255) {
      colorString = `rgb(${red} ${green} ${blue})`
    } else {
      colorString = `rgb(${red} ${green} ${blue} / ${(alpha / 255).toFixed(1)})`
    }

    return colorString;
  }

  function AddBox() {
    let cols = canvas.current.width
    const AverageColor = getAverage(cols, boxPosition.clientX, boxPosition.clientY)

    let newArray = colorsArray
    const newColor =
    {
      color: boxPosition.color,
      avergColor: AverageColor
    }

    newArray.push(newColor)
    SetColorsArray([...newArray])

  }

  const PointerStyle = {
    top: boxPosition.top,
    left: boxPosition.left,
    backgroundColor: boxPosition.color
  }

  return (
    <div className='imgSection' style={canvas.current && { width: canvas.current.width + 40 }}>

      <div className="imgContainer">
        <div className="image active" ref={container} >

          <canvas ref={canvas} id="canvas" className={cropArea ? "blur" : "normal"} onMouseMove={props.section == "color" ? GetPixel : null}  ></canvas>
          <canvas ref={NewCanvas} onMouseDown={props.section === "draw" ? (e) => DrawStart(e, props.drawEffect.fontSize, props.drawEffect.fontColor, props.drawEffect.shadowSize, props.drawEffect.shadowColor) : null} onMouseMove={props.section === "draw" ? Draw : null} onMouseUp={props.section === "draw" ? DrawEnd : null}></canvas>
          {cropArea ? <CropArea canvasDimentions={canvasInfo} /> : null}
          {props.section === 'text' ? <input className='text' type="text" style={Textstyle} value={text} onChange={(e) => setText(e.target.value)} onDragStart={(e) => DragStart(e, canvasInfo, textInput.current, setDim, dim)} onDragEnd={(e) => Drag(e, canvasInfo, props.textEffect.size * 2, props.textEffect.size * 1.2, setDragPosition, dragPosition, dim)} ref={textInput} ></input> : null}
          {props.section === 'sticker' ? <img src={props.stickerEffect.src} ref={sticker} className='sticker' draggable={true} onDragStart={(e) => DragStart(e, canvasInfo, sticker.current, setDim, dim)} onDragEnd={(e) => Drag(e, canvasInfo, props.stickerEffect.width, props.stickerEffect.height, setDragPosition, dragPosition, dim)} style={stickerStyle}  ></img> : null}
          {props.section === 'color' ? <div className="pointerBox" style={PointerStyle} onClick={props.section == "color" ? AddBox : null}></div> : null}

        </div>
      </div>

      {props.section == 'color' && <div className='colorsExtraction'>
        {colorsArray.map((e, i) => {
          return <div key={i} className='box'>
            <div style={{ backgroundColor: e.color }}  >
              <span>Exact Pixel</span>
              <span>{e.color}</span>
            </div>
            <div style={{ backgroundColor: e.avergColor }}  >
              <span>average Color</span>
              <span>{e.avergColor}</span>
            </div>
          </div>
        })}
      </div>}
      <a download={true} id="download" onClick={handleDownload} style={{ display: "none" }} ref={download}>Download</a>
    </div>
  )
}
