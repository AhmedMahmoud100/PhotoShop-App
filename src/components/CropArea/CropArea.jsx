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
            x: e.pageX,
            width: crop.sourceW
        })
    }

    function ExtendBottomRight(e) {
        if (e.pageY > 0 && e.pageX > 0) {
            let y = Math.round(e.pageY - canvasDimentions.y - square.current.offsetTop)
            let x = Math.round(e.pageX - dim.x + dim.width)
            if (e.pageY < canvasDimentions.y + canvasDimentions.height && e.pageX < canvasDimentions.x + canvasDimentions.width) {
                setcrop({ ...crop, sourceH: y, sourceW: x })
            }
        }
    }

    function ExtendTopLeftStart(e) {
        setDim({
            x: e.pageX,
            left: square.current.offsetLeft,
            width: crop.sourceW,
            y: square.current.offsetTop,
            height: crop.sourceH,
        })
        e.dataTransfer.setDragImage(new Image(), 0, 0)
    }

    function ExtendTopLeft(e) {
        let x = Math.round(dim.x - e.pageX + dim.width)
        let y = Math.round(dim.y - e.pageY + canvasDimentions.y + dim.height)
        if (e.pageX > canvasDimentions.x && e.pageY > canvasDimentions.y) {
            setcrop({
                ...crop, sourceW: x, offsetX: Math.round(dim.left - (dim.x - e.pageX)),
                sourceH: y, offsetY: Math.round(e.pageY - canvasDimentions.y)
            })
        }
    }

    function ExtendTopRightStart(e) {
        setDim({
            ...dim,
            x: e.pageX,
            width: crop.sourceW,
            y: square.current.offsetTop,
            height: crop.sourceH
        })
    }

    function ExtendTopRight(e) {
        let x = Math.round(e.pageX - dim.x + dim.width)
        let y = Math.round(dim.y - e.pageY + canvasDimentions.y + dim.height)

        if (e.pageX < canvasDimentions.x + canvasDimentions.width &&
            e.pageY > canvasDimentions.y
        ) {
            setcrop({ ...crop, sourceW: x, sourceH: y, offsetY: Math.round(e.pageY - canvasDimentions.y) })
        }
    }

    function ExtendBottomLeftStart(e) {
        setDim({
            ...dim,
            x: e.pageX,
            left: square.current.offsetLeft,
            width: crop.sourceW
        })
        e.dataTransfer.setDragImage(new Image(), 0, 0)
    }

    function ExtendBottomLeft(e) {
        let x = Math.round(dim.x - e.pageX + dim.width)
        let y = Math.round(e.pageY - canvasDimentions.y - square.current.offsetTop)
        if (e.pageX > canvasDimentions.x &&
            e.pageY < canvasDimentions.y + canvasDimentions.height
        ) {
            setcrop({ ...crop, sourceW: x, offsetX: Math.round(dim.left - (dim.x - e.pageX)), sourceH: y })
        }
    }

    function ExtendRightStart(e) {
        setDim({
            ...dim,
            x: e.pageX,
            width: crop.sourceW
        })
    }

    function ExtendRight(e) {
        if (e.pageX > 0) {
            let x = Math.round(e.pageX - dim.x + dim.width)
            if (e.pageX < canvasDimentions.x + canvasDimentions.width) {
                setcrop({ ...crop, sourceW: x })
            }
        }
    }

    function ExtendLeftStart(e) {
        setDim({
            ...dim,
            x: e.pageX,
            left: square.current.offsetLeft,
            width: crop.sourceW
        })
        e.dataTransfer.setDragImage(new Image(), 0, 0)
    }

    function ExtendLeft(e) {
        let x = Math.round(dim.x - e.pageX + dim.width)
        let offsetX = Math.round(dim.left - (dim.x - e.pageX))
        if (e.pageX > canvasDimentions.x) {
            setcrop({ ...crop, sourceW: x, offsetX: offsetX })
        }
    }

    function ExtendBottom(e) {
        if (e.pageY > 0) {
            let y = Math.round(e.pageY - canvasDimentions.y - square.current.offsetTop)

            if (e.pageY < canvasDimentions.y + canvasDimentions.height) {
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
        let y = Math.round(dim.y - e.pageY + canvasDimentions.y + dim.height)
        if (e.pageY > canvasDimentions.y) {
            setcrop({ ...crop, sourceH: y, offsetY: Math.round(e.pageY - canvasDimentions.y) })
        }
    }

    return (
        <>
            <div className='cropArea' style={style} ref={square}  >
                <div className='hidden' draggable={true}
                    onDragStart={(e) => DragStart(e, canvasDimentions, square.current, setDim, dim)}
                    onDrag={(e) => Drag(e, canvasDimentions, crop.sourceW, crop.sourceH, setcrop, crop, dim)}
                    onDragEnd={(e) => Drag(e, canvasDimentions, crop.sourceW, crop.sourceH, setcrop, crop, dim)} >
                </div>
                <div className='corners BR' draggable={true}
                    onDragStart={ExtendBottomRightStart}
                    onDrag={ExtendBottomRight} ></div>

                <div className='corners BL' draggable={true}
                    onDragStart={ExtendBottomLeftStart}
                    onDrag={ExtendBottomLeft}  ></div>

                <div className='corners TR' draggable={true}
                    onDragStart={ExtendTopRightStart}
                    onDrag={ExtendTopRight}  ></div>

                <div className='corners TL' draggable={true}
                    onDragStart={ExtendTopLeftStart}
                    onDrag={ExtendTopLeft}  ></div>

                <div className='sides right' draggable={true}
                    onDragStart={ExtendRightStart}
                    onDrag={ExtendRight} ></div>

                <div className='sides left' draggable={true}
                    onDragStart={ExtendLeftStart}
                    onDrag={ExtendLeft} ></div>

                <div className='sides top' draggable={true}
                    onDragStart={ExtendTopStart}
                    onDrag={ExtendTop} ></div>

                <div className='sides bottom' draggable={true}
                    onDrag={ExtendBottom} ></div>
            </div>
        </>
    )

}
