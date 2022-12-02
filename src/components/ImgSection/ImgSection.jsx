import { useContext, useEffect, useRef, useState } from 'react'
import './ImgSection.scss'
import CropArea from '../CropArea/CropArea'
import { ThemeContext } from '../../context/ThemeContext'
import { Drag, DragStart } from '../../Functions/Crop'
import { useLocation } from 'react-router-dom'
export default function ImgSection(props) {
  const { state } = useLocation();
  const [imgSrc, setImgSrc] = useState('')
  const uploadInput = useRef()
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
  const [averageColor, setAverageColor] = useState('')
  const [dim, setDim] = useState()

  useEffect(() => {
    setImgSrc(state.src)
  }, [state])

  useEffect(() => {
    const image = new Image();
    image.src = imgSrc
    let ctx = canvas.current.getContext('2d', { willReadFrequently: true })
    let Newctx = NewCanvas.current.getContext('2d')
    ctxRef.current = ctx
    NewctxRef.current = Newctx

    image.onload = function () {

      canvas.current.width = image.naturalWidth;
      canvas.current.height = image.naturalHeight;
      canvas.current.style.display = "block"
      NewCanvas.current.style.display = "none"


      ctx.drawImage(image, 0, 0, canvas.current.width, canvas.current.height);
      MakeNewCanvas();
      props.imgDimentions(
        {
          width: image.naturalWidth,
          height: image.naturalHeight
        }
      )
    }
  }, [imgSrc])


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
      NewctxRef.current.fillStyle = `${props.textEffect.color}`
      NewctxRef.current.font = `${props.textEffect.weight} ${props.textEffect.size}px ${props.textEffect.font}`
      NewctxRef.current.fillText(text, stickerPosition.x, stickerPosition.y + props.textEffect.size)
    }
  }

  useEffect(() => {
    if (props.section === "text" && props.textEffect.apply) {
      HandleText()
      ConvertToTheOriginalCanvas(props.textEffect.apply);
      textInput.current.style.display = 'none'
      setDragPosition({ offsetX: 0, offsetY: 0 })
    }
  }, [props.textEffect])


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
    if (props.stickerEffect.apply) {
      setDragPosition({ x: 0, y: 0 })
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
      ConvertToTheOriginalCanvas(props.shapeEffect.apply)
    }
  }, [props.shapeEffect])



  useEffect(() => {
    if (props.section === 'color') {

      ConvertToTheOriginalCanvas(true)
    }
  }, [props])

  if (ctxRef.current) {
    let imgData = ctxRef.current.getImageData(0, 0, canvas.current.width, canvas.current.height).data;
    imgDataRef.current = imgData
  }

  function GetPixelColor(cols, offsetX, offsetY,) {

    const pixelIndex = cols * offsetY + offsetX
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


    let offsetX = Math.floor(e.clientX - canvasInfo.x)
    let offsetY = Math.floor(e.clientY - canvasInfo.y)

    let BoxOffsetX = Math.min(offsetX - 20, canvasInfo.width - 40);
    BoxOffsetX = Math.max(BoxOffsetX, 0);

    let BoxOffsetY = Math.min(offsetY - 20, canvasInfo.height - 40);
    BoxOffsetY = Math.max(BoxOffsetY, 0);

    let c = GetPixelColor(cols, offsetX, offsetY)

    let colorString = `rgb(${c.red} ${c.green} ${c.blue} / ${c.alpha / 255})`
    setBoxPosition({ top: BoxOffsetY, left: BoxOffsetX, color: colorString })
    getAverage(cols, offsetX, offsetY)

  }


  function getAverage(cols, offsetX, offsetY) {
    let reds = 0;
    let greens = 0;
    let blues = 0;
    let alphas = 0;

    for (let x = -20; x <= 20; x++) {
      for (let y = -20; y <= 20; y++) {
        let c = GetPixelColor(cols, offsetX + x, offsetY + y);
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
    let colorString = `rgb(${red} ${green} ${blue} / ${alpha / 255})`
    setAverageColor(colorString)
  }

  function AddBox() {
    let newArray = colorsArray
    const newColor =
    {
      color: boxPosition.color,
      avergColor: averageColor
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
    <div className='imgSection'>

      <div className="imgContainer">
        <div className="image active" ref={container} >

          <canvas ref={canvas} id="canvas" className={props.showBorder && !cropEffect.apply ? "blur" : "normal"} onMouseMove={props.section == "color" ? GetPixel : null}  ></canvas>
          <canvas ref={NewCanvas} onMouseDown={props.section === "draw" ? (e) => DrawStart(e, props.drawEffect.fontSize, props.drawEffect.fontColor, props.drawEffect.shadowSize, props.drawEffect.shadowColor) : null} onMouseMove={props.section === "draw" ? Draw : null} onMouseUp={props.section === "draw" ? DrawEnd : null}></canvas>
          {props.showBorder && !cropEffect.apply || cropEffect.addText ? <CropArea canvasDimentions={canvasInfo} /> : null}
          {props.section === 'text' ? <input className='text' type="text" style={Textstyle} value={text} onChange={(e) => setText(e.target.value)} onDragStart={(e) => DragStart(e, canvasInfo, textInput.current, setDim, dim)} onDragEnd={(e) => Drag(e, canvasInfo, props.textEffect.size * 2, props.textEffect.size * 1.2, setDragPosition, dragPosition, dim)} ref={textInput} ></input> : null}
          {props.section === 'sticker' ? <img src={props.stickerEffect.src} ref={sticker} className='sticker' draggable={true} onDragStart={(e) => DragStart(e, canvasInfo, sticker.current, setDim, dim)} onDragEnd={(e) => Drag(e, canvasInfo, props.stickerEffect.width, props.stickerEffect.height, setDragPosition, dragPosition, dim)} style={stickerStyle}  ></img> : null}
          {props.section === 'color' ? <div className="pointerBox" style={PointerStyle} onClick={props.section == "color" ? AddBox : null}></div> : null}

        </div>
      </div>

      <div className='img-buttons'>
        <div className='upload' >
          <label htmlFor="upload" >Upload Another Image</label>
          <input type="file" id='upload' onChange={handleUpload} ref={uploadInput} />
        </div>
        <div className='download'>
          <a download={true} id="download" onClick={handleDownload} ref={download}>Download The image</a>
        </div>
      </div>
      {props.section == 'color' && <div className='colorsContainer'>
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
    </div>
  )
}
