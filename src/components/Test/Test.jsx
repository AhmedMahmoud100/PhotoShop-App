import React, {  useState, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import './Test.scss'

export default function Test() {
    const [crop, setcrop] = useContext(ThemeContext)
    
    const [offset, setOffset] = useState({
        x: 0,
        y: 0
    })

    const [originalWidth, setOriginalWidth] = useState({
        width: 50,
        height: 50
    })

    const [drag, setdrag] = useState(false)
    const [start, setstart] = useState(false)

    let style = {
        width: crop.sourceW + 'px',
        height: crop.sourceH + 'px',
        top: crop.offsetY + 'px',
        left: crop.offsetX + 'px'
    }

    function MoveStart(e) {
        let offsetX = e.clientX - crop.offsetX;
        let offsetY = e.clientY - 72 - crop.offsetY;

        setOffset({
            x: offsetX,
            y: offsetY
        })
        e.dataTransfer.setDragImage(new Image(), 0, 0)
        setdrag(true)
    }

    function OnMove(e) {
        let x = e.clientX - offset.x
        let y = e.clientY - 72 - offset.y

        if (drag) {
            setcrop({
                ...crop,
                offsetY: y,
                offsetX: x
            })
        }
    }

    function MoveEnd(e) {
        let x = e.clientX - offset.x
        let y = e.clientY - 72 - offset.y
        setcrop({
            ...crop,
            offsetY: y,
            offsetX: x
        })
        setdrag(false)
    }


    function MouseDown(e) {

    }

    function MouseMove(e) {
        let x = e.clientX - crop.offsetX
        let y = e.clientY - crop.offsetY
        setcrop({ ...crop, sourceW: x, sourceH: y })

    }
    function MouseEnd(e) {
        setstart(false)
    }

    
    function MoveLeftStart() {

        setOriginalWidth({
            width: crop.sourceW,
            height: crop.sourceH
        })

        setOffset({
            x: crop.offsetX,
            y: crop.offsetY
        })
        setstart(true)
    }

    function MoveLeft(e) {
        let x = offset.x - e.clientX + originalWidth.width
        let y = offset.y - e.clientY +  originalWidth.height

        if (start) {

            setcrop({
                sourceW: x,
                sourceH: y,
                offsetY: e.clientY ,
                offsetX: e.clientX
            })

        }

    }

    function MoveLeftEnd(e) {
        let x = offset.x - e.clientX + originalWidth.width
        let y = offset.y - e.clientY +  originalWidth.height

        if (start) {

            setcrop({
                sourceW: x,
                sourceH: y,
                offsetY: e.clientY ,
                offsetX: e.clientX
            })

        }

        setstart(false)
    }



    function MoveUPStart() {

        setOffset({
            y: crop.offsetY
        })

        setOriginalWidth({
            height: crop.sourceH
        })

        setstart(true)
    }

    function MoveUP(e) {
        let x = e.clientX - crop.offsetX
        let y = offset.y - e.clientY +  originalWidth.height

        if (start) {

            setcrop({
                ...crop,
                sourceW: x,
                sourceH: y,
                offsetY: e.clientY 
            })


        }
    }

    function MoveUPEnd(e) {
        let x = e.clientX - crop.offsetX
        let y = offset.y - e.clientY +  originalWidth.height

        setcrop({
            ...crop,
            sourceW: x,
            sourceH: y,
            offsetY: e.clientY 
        })

        setstart(false)
    }


    function MoveDownStart() {

        setOffset({
            x: crop.offsetX
        })

        setOriginalWidth({
            width: crop.sourceW
        })

        setstart(true)
    }

    function MoveDown(e) {
        let x = offset.x - e.clientX + originalWidth.width
        let y = e.clientY -  crop.offsetY

        if (start) {

            setcrop({...crop,
                sourceW: x,
                sourceH: y,
                offsetX: e.clientX
            })
        }
    }

    function MoveDownEnd(e) {
        let x = offset.x - e.clientX + originalWidth.width
        let y = e.clientY -  crop.offsetY

        setcrop({
            sourceW: x,
            sourceH: y,
            offsetX: e.clientX
        })

        setstart(false)
    }


    function ExtendRight(e) {
        let x = e.clientX - crop.offsetX
        setcrop({ ...crop, sourceW: x })
    }
    function ExtendRightEnd(e) {
        let x = e.clientX - crop.offsetX
        setcrop({ ...crop, sourceW: x })
    }


    function ExtendLeftStart() {
        setOffset({
            x: crop.offsetX
        })

        setOriginalWidth({
            width: crop.sourceH
        })
    }

    function ExtendLeft(e) {
        let x = offset.x - e.clientX + originalWidth.width
        setcrop({ ...crop, sourceW: x, offsetX: e.clientX })


    }
    function ExtendLeftEnd(e) {
        let x = offset.x - e.clientX + originalWidth.width
        setcrop({ ...crop, sourceW: x, offsetX: e.clientX })
    }



    function ExtendBottom(e) {
        let y = e.clientY -  crop.offsetY
        setcrop({ ...crop, sourceH: y })
    }

    function ExtendBottomEnd(e) {
        let y = e.clientY -  crop.offsetY
        setcrop({ ...crop, sourceH: y })
    }


    function ExtendTopStart() {
        setOffset({
            y: crop.offsetY
        })

        setOriginalWidth({
            height: crop.sourceH
        })

    }

    function ExtendTop(e) {
        let y = offset.y - e.clientY  + originalWidth.height
        setcrop({ ...crop, sourceH: y, offsetY: e.clientY  })

    }

    function ExtendTopEnd(e) {
        let y = offset.y -  e.clientY + originalWidth.height
        setcrop({ ...crop, sourceH: y, offsetY: e.clientY  })

    }


    return (
        <>
            <div className='square' style={style} >
                <div className='hidden' draggable={true} onDragStart={MoveStart} onDrag={OnMove} onDragEnd={MoveEnd} ></div>
                <div className='corners BR' draggable={true} onDragStart={MouseDown} onDrag={MouseMove} onDragEnd={MouseEnd} ></div>
                <div className='corners BL' draggable={true} onDragStart={MoveDownStart} onDrag={MoveDown} onDragEnd={MoveDownEnd} ></div>
                <div className='corners TR' draggable={true} onDragStart={MoveUPStart} onDrag={MoveUP} onDragEnd={MoveUPEnd} ></div>
                <div className='corners TL' draggable={true} onDragStart={MoveLeftStart} onDrag={MoveLeft} onDragEnd={MoveLeftEnd} ></div>
                <div className='sides right' draggable={true} onDrag={ExtendRight} onDragEnd={ExtendRightEnd}></div>
                <div className='sides left' draggable={true} onDragStart={ExtendLeftStart} onDrag={ExtendLeft} onDragEnd={ExtendLeftEnd}></div>
                <div className='sides top' draggable={true} onDragStart={ExtendTopStart} onDrag={ExtendTop} onDragEnd={ExtendTopEnd}></div>
                <div className='sides bottom' draggable={true} onDrag={ExtendBottom} onDragEnd={ExtendBottomEnd}></div>
            </div>
        </>
    )

}
