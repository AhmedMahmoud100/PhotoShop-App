import { positions } from '@mui/system'
import React, { useEffect, useRef, useState, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import './Test.scss'

export default function Test() {

    const [theme, setTheme] = useContext(ThemeContext)
    const [dim, setdim] = useState(
        {
            width: 150,
            height: 150,
        }
    )
    if (theme) {
        console.log(dim.width)
    }
    const [position, setposition] = useState({
        top: 0,
        left: 0,
    }
    )
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
        width: dim.width + 'px',
        height: dim.height + 'px',
        top: position.top + 'px',
        left: position.left + 'px'
    }

    useEffect(() => {
        setdim({

            width: theme.crop.sourceW,
            height: theme.crop.sourceH,
        })

        setposition({
            top: theme.crop.offsetX,
            left: theme.crop.offsetY,
        })

    }, [])

    // useEffect(() => {
    //     setTheme({...theme,crop:{
    //         offsetX : position.left,
    //         offsetY : position.top ,
    //         sourceW : dim.width,
    //         sourceH : dim.height,
    //         apply:false
    //     }})
    // },[dim,position])

    function MoveStart(e) {
        let offsetX = e.clientX - position.left;
        let offsetY = e.clientY - 72 - position.top;

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
            setposition({
                top: y,
                left: x
            })
        }
    }

    function MoveEnd(e) {
        let x = e.clientX - offset.x
        let y = e.clientY - 72 - offset.y
        setposition({
            top: y,
            left: x
        })
        setdrag(false)
    }






    function MouseDown(e) {


        setstart(true)
    }

    function MouseMove(e) {
        let x = e.clientX - position.left
        let y = e.clientY - 72 - position.top


        if (start) {
            setdim({
                width: x,
                height: y,
            })
        }

    }
    function MouseEnd(e) {
        setstart(false)
    }



    function MoveLeftStart() {

        setOriginalWidth({
            width: dim.width,
            height: dim.height
        })

        setOffset({
            x: position.left,
            y: position.top
        })
        setstart(true)
    }

    function MoveLeft(e) {
        let x = offset.x - e.clientX + originalWidth.width
        let y = offset.y - e.clientY + 72 + originalWidth.height

        if (start) {

            setdim({
                width: x,
                height: y
            })

            setposition({
                top: e.clientY - 72,
                left: e.clientX
            })
        }

    }

    function MoveLeftEnd(e) {
        let x = offset.x - e.clientX + originalWidth.width
        let y = offset.y - e.clientY + 72 + originalWidth.height

        setdim({
            width: x,
            height: y
        })

        setposition({
            top: e.clientY - 72,
            left: e.clientX
        })
        setstart(false)
    }



    function MoveUPStart() {

        setOffset({
            y: position.top
        })

        setOriginalWidth({
            height: dim.height
        })

        setstart(true)
    }

    function MoveUP(e) {
        let x = e.clientX - position.left
        let y = offset.y - e.clientY + 72 + originalWidth.height

        if (start) {

            setdim({
                width: x,
                height: y
            })

            setposition({ ...position, top: e.clientY - 72 })

        }
    }

    function MoveUPEnd(e) {
        let x = e.clientX - position.left
        let y = offset.y - e.clientY + 72 + originalWidth.height

        setdim({
            width: x,
            height: y
        })

        setposition({ ...position, top: e.clientY - 72 })


        setstart(false)
    }



    function MoveDownStart() {

        setOffset({
            x: position.left
        })

        setOriginalWidth({
            width: dim.width
        })

        setstart(true)
    }

    function MoveDown(e) {
        let x = offset.x - e.clientX + originalWidth.width
        let y = e.clientY - 72 - position.top


        if (start) {

            setdim({
                width: x,
                height: y
            })

            setposition({ ...position, left: e.clientX })

        }
    }

    function MoveDownEnd(e) {
        let x = offset.x - e.clientX + originalWidth.width
        let y = e.clientY - 72 - position.top

        setdim({
            width: x,
            height: y
        })

        setposition({ ...position, left: e.clientX })

        setstart(false)
    }




    function ExtendRight(e) {
        let x = e.clientX - position.left
        setdim({ ...dim, width: x })
    }
    function ExtendRightEnd(e) {
        let x = e.clientX - position.left
        setdim({ ...dim, width: x })
    }


    function ExtendLeftStart() {
        setOffset({
            x: position.left
        })

        setOriginalWidth({
            width: dim.width
        })

    }

    function ExtendLeft(e) {
        let x = offset.x - e.clientX + originalWidth.width
        setdim({ ...dim, width: x })

        setposition({ ...position, left: e.clientX })
    }
    function ExtendLeftEnd(e) {
        let x = offset.x - e.clientX + originalWidth.width
        setdim({ ...dim, width: x })

        setposition({ ...position, left: e.clientX })
    }



    function ExtendBottom(e) {
        let y = e.clientY - 72 - position.top
        setdim({ ...dim, height: y })
    }

    function ExtendBottomEnd(e) {
        let y = e.clientY - 72 - position.top
        setdim({ ...dim, height: y })
    }


    function ExtendTopStart() {
        setOffset({
            y: position.top
        })

        setOriginalWidth({
            height: dim.height
        })

    }

    function ExtendTop(e) {
        let y = offset.y - e.clientY + 72 + originalWidth.height
        setdim({ ...dim, height: y })

        setposition({ ...position, top: e.clientY - 72 })
    }

    function ExtendTopEnd(e) {
        let y = offset.y - 72 - e.clientY + originalWidth.height
        setdim({ ...dim, height: y })

        setposition({ ...position, top: e.clientY - 72 })
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
