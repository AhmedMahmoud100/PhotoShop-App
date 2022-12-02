import React, { useState, useContext, useRef } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import './CropArea.scss'
import { Drag, DragStart } from '../../Functions/Crop'

export default function CropArea({ canvasDimentions }) {
    const [crop, setcrop] = useContext(ThemeContext)
    const square = useRef()
    const [dim, setDim] = useState({
        x: 0,
        y: 0,
        width: 50,
        height: 50,
    })

    const style = {
        width: crop.sourceW + 'px',
        height: crop.sourceH + 'px',
        top: crop.offsetY + 'px',
        left: crop.offsetX + 'px'
    }

    function ExtendBottomRightStart(e) {
        setDim({
            ...dim,
            x: e.clientX,
            width: crop.sourceW
        })
    }

    function ExtendBottomRight(e) {
        if (e.clientY > 0 && e.clientX > 0) {
            let y = Math.round(e.clientY - canvasDimentions.y - square.current.offsetTop)
            let x = Math.round(e.clientX - dim.x + dim.width)
            if (e.clientY < canvasDimentions.y + canvasDimentions.height && e.clientX < canvasDimentions.x + canvasDimentions.width) {
                setcrop({ ...crop, sourceH: y, sourceW: x })
            }
        }

    }


    function ExtendTopLeftStart(e) {
        setDim({
            x: e.clientX,
            left: square.current.offsetLeft,
            width: crop.sourceW,
            y: square.current.offsetTop,
            height: crop.sourceH,
        })
        e.dataTransfer.setDragImage(new Image(), 0, 0)
    }

    function ExtendTopLeft(e) {
        let x = Math.round(dim.x - e.clientX + dim.width)
        let y = Math.round(dim.y - e.clientY + canvasDimentions.y + dim.height)
        if (e.clientX > canvasDimentions.x && e.clientY > canvasDimentions.y) {
            setcrop({
                ...crop, sourceW: x, offsetX: Math.round(dim.left - (dim.x - e.clientX)),
                sourceH: y, offsetY: Math.round(e.clientY - canvasDimentions.y)
            })
        }
    }

    function ExtendTopRightStart(e) {
        setDim({
            ...dim,
            x: e.clientX,
            width: crop.sourceW,
            y: square.current.offsetTop,
            height: crop.sourceH
        })
    }

    function ExtendTopRight(e) {
        let x = Math.round(e.clientX - dim.x + dim.width)
        let y = Math.round(dim.y - e.clientY + canvasDimentions.y + dim.height)

        if (e.clientX < canvasDimentions.x + canvasDimentions.width &&
            e.clientY > canvasDimentions.y
        ) {
            setcrop({ ...crop, sourceW: x, sourceH: y, offsetY: Math.round(e.clientY - canvasDimentions.y) })
        }
    }

    function ExtendBottomLeftStart(e) {
        setDim({
            ...dim,
            x: e.clientX,
            left: square.current.offsetLeft,
            width: crop.sourceW
        })
        e.dataTransfer.setDragImage(new Image(), 0, 0)
    }

    function ExtendBottomLeft(e) {
        let x = Math.round(dim.x - e.clientX + dim.width)
        let y = Math.round(e.clientY - canvasDimentions.y - square.current.offsetTop)
        if (e.clientX > canvasDimentions.x &&
            e.clientY < canvasDimentions.y + canvasDimentions.height
        ) {
            setcrop({ ...crop, sourceW: x, offsetX: Math.round(dim.left - (dim.x - e.clientX)), sourceH: y })
        }
    }

    function ExtendRightStart(e) {
        setDim({
            ...dim,
            x: e.clientX,
            width: crop.sourceW
        })
    }

    function ExtendRight(e) {
        if (e.clientX > 0) {
            let x = Math.round(e.clientX - dim.x + dim.width)
            if (e.clientX < canvasDimentions.x + canvasDimentions.width) {
                setcrop({ ...crop, sourceW: x })
            }
        }
    }

    function ExtendLeftStart(e) {
        setDim({
            ...dim,
            x: e.clientX,
            left: square.current.offsetLeft,
            width: crop.sourceW
        })
        e.dataTransfer.setDragImage(new Image(), 0, 0)
    }

    function ExtendLeft(e) {
        let x = Math.round(dim.x - e.clientX + dim.width)
        let offsetX = Math.round(dim.left - (dim.x - e.clientX))
        if (e.clientX > canvasDimentions.x) {
            setcrop({ ...crop, sourceW: x, offsetX: offsetX })
        }
    }

    function ExtendBottom(e) {
        if (e.clientY > 0) {
            let y = Math.round(e.clientY - canvasDimentions.y - square.current.offsetTop)

            if (e.clientY < canvasDimentions.y + canvasDimentions.height) {
                setcrop({ ...crop, sourceH: y })
            }
        }
    }

    function ExtendTopStart(e) {
        setDim({
            ...dim,
            y: square.current.offsetTop,
            height: crop.sourceH,
        })
    }

    function ExtendTop(e) {
        let y = Math.round(dim.y - e.clientY + canvasDimentions.y + dim.height)
        if (e.clientY > canvasDimentions.y) {
            setcrop({ ...crop, sourceH: y, offsetY: Math.round(e.clientY - canvasDimentions.y) })
        }
    }
   
    return (
        <>
            <div className='square' style={style} ref={square}  >

                <div className='hidden' draggable={true} onDragStart={(e) => DragStart(e, canvasDimentions, square.current, setDim, dim)} onDrag={(e) =>  Drag(e, canvasDimentions, crop.sourceW,crop.sourceH,setcrop,crop,dim)} onDragEnd={(e) => Drag(e, canvasDimentions, crop.sourceW,crop.sourceH,setcrop,crop,dim)} >

                </div>
                <div className='corners BR' draggable={true} onDragStart={ExtendBottomRightStart} onDrag={ExtendBottomRight} ></div>
                <div className='corners BL' draggable={true} onDragStart={ExtendBottomLeftStart} onDrag={ExtendBottomLeft}  ></div>
                <div className='corners TR' draggable={true} onDragStart={ExtendTopRightStart} onDrag={ExtendTopRight}  ></div>
                <div className='corners TL' draggable={true} onDragStart={ExtendTopLeftStart} onDrag={ExtendTopLeft}  ></div>
                <div className='sides right' draggable={true} onDragStart={ExtendRightStart} onDrag={ExtendRight} ></div>
                <div className='sides left' draggable={true} onDragStart={ExtendLeftStart} onDrag={ExtendLeft} ></div>
                <div className='sides top' draggable={true} onDragStart={ExtendTopStart} onDrag={ExtendTop} ></div>
                <div className='sides bottom' draggable={true} onDrag={ExtendBottom} ></div>
            </div>
        </>
    )

}
