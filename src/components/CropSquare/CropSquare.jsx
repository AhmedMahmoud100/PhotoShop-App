import React, { useState, useContext, useRef } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import './CropSquare.scss'

export default function Test({ canvasDimentions }) {
    const [crop, setcrop] = useContext(ThemeContext)
    const square = useRef()
    const [dim, setDim] = useState({
        x: 0,
        y: 0,
        width: 50,
        height: 50,
    })


    let style = {
        width: crop.sourceW + 'px',
        height: crop.sourceH + 'px',
        top: crop.offsetY + 'px',
        left: crop.offsetX + 'px'
    }
    
    function DragStart(e) {
        let offsetX = e.clientX - canvasDimentions.x - square.current.offsetLeft;
        let offsetY = e.clientY - canvasDimentions.y - square.current.offsetTop;

        setDim({
            ...dim,
            x: offsetX,
            y: offsetY
        })
        e.dataTransfer.setDragImage(new Image(), 0, 0)
    }

    function Drag(e) {
        let x = e.clientX - canvasDimentions.x - dim.x
        let y = e.clientY - canvasDimentions.y - dim.y

        if (
            e.clientX - canvasDimentions.x > dim.x &&
            x < canvasDimentions.width - crop.sourceW &&
            e.clientY - canvasDimentions.y > dim.y &&
            y < canvasDimentions.height - crop.sourceH
        ) {
            setcrop({
                ...crop,
                offsetY: y,
                offsetX: x
            })
        }
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
            let y = e.clientY - canvasDimentions.y - square.current.offsetTop
            let x = e.clientX - dim.x + dim.width
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
        let x = dim.x - e.clientX + dim.width
        let y = dim.y - e.clientY + canvasDimentions.y + dim.height
        if (e.clientX > canvasDimentions.x && e.clientY > canvasDimentions.y) {
            setcrop({
                ...crop, sourceW: x, offsetX: dim.left - (dim.x - e.clientX),
                sourceH: y, offsetY: e.clientY - canvasDimentions.y
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
        let x = e.clientX - dim.x + dim.width
        let y = dim.y - e.clientY + canvasDimentions.y + dim.height

        if (e.clientX < canvasDimentions.x + canvasDimentions.width &&
            e.clientY > canvasDimentions.y
        ) {
            setcrop({ ...crop, sourceW: x, sourceH: y, offsetY: e.clientY - canvasDimentions.y })
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
        let x = dim.x - e.clientX + dim.width
        let y = e.clientY - canvasDimentions.y - square.current.offsetTop
        if (e.clientX > canvasDimentions.x &&
            e.clientY < canvasDimentions.y + canvasDimentions.height
        ) {
            setcrop({ ...crop, sourceW: x, offsetX: dim.left - (dim.x - e.clientX), sourceH: y })
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
            let x = e.clientX - dim.x + dim.width
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
        let x = dim.x - e.clientX + dim.width
        if (e.clientX > canvasDimentions.x) {
            setcrop({ ...crop, sourceW: x, offsetX: dim.left - (dim.x - e.clientX) })
        }
    }

    function ExtendBottom(e) {
        if (e.clientY > 0) {
            let y = e.clientY - canvasDimentions.y - square.current.offsetTop
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
        let y = dim.y - e.clientY + canvasDimentions.y + dim.height
        if (e.clientY > canvasDimentions.y) {
            setcrop({ ...crop, sourceH: y, offsetY: e.clientY - canvasDimentions.y })
        }
    }

    return (
        <>
            <div className='square' style={style} ref={square} onDragOver={Drag} >
                <div className='hidden' draggable={true} onDragStart={DragStart} onDragEnd={Drag} ></div>
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
