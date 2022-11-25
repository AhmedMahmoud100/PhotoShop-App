import { useEffect, useRef, useState } from 'react'
import './Draw.scss'

export default function Draw({ drawEffect }) {
    const container = useRef()
    const [boundary, setBoundary] = useState(0)
    const [drawProprties, setDrawProprties] = useState({
        fontSize: 15,
        shadowSize: 1,
        fontColor: 'red',
        shadowColor: 'black',
        fontLength: 0,
        shadowLength: 0,
        apply: false
    })

    useEffect(() => {
        let XBoundary = container.current.getBoundingClientRect().width
        setBoundary(XBoundary)
        setDrawProprties({
            ...drawProprties, fontLength: 15 * (XBoundary / 60),
            shadowLength: 1 * (XBoundary / 20)
        })
    }, [])

    function HandleSize(e) {
        e.dataTransfer.setDragImage(new Image(), 0, 0)
        if (e.clientX > 10 && e.clientX < boundary - 20) {
            let size = (e.clientX - 10) / (boundary / 60)
            setDrawProprties({ ...drawProprties, fontLength: e.clientX - 10, fontSize: Math.floor(size) })
            drawEffect({ ...drawProprties, fontLength: e.clientX - 10, fontSize: Math.floor(size) })
        }
    }
    function HandleShadow(e) {
        e.dataTransfer.setDragImage(new Image(), 0, 0)
        if (e.clientX > 10 && e.clientX < boundary - 20) {
            let size = (e.clientX - 10) / (boundary / 20)
            setDrawProprties({ ...drawProprties, shadowLength: e.clientX - 10, shadowSize: Math.floor(size) })
            drawEffect({ ...drawProprties, shadowLength: e.clientX - 10, shadowSize: Math.floor(size) })
        }
    }

    function HandleFontColor(e) {
        let color = e.target.id;
        setDrawProprties({ ...drawProprties, fontColor: color })
        drawEffect({ ...drawProprties, fontColor: color })
    }
    function HandleShadowColor(e) {
        let color = e.target.id;
        setDrawProprties({ ...drawProprties, shadowColor: color })
        drawEffect({ ...drawProprties, shadowColor: color })
    }
    return (
        <div className='draw' ref={container}>

            <h2>Draw</h2>

            <div className='fontProp'>
                <div className='part1'>
                    <h3>Font Size</h3>
                    <span>{drawProprties.fontSize}px</span>
                </div>
                <div className='part2'>
                    <div className='progressBar' >
                        <div className='value-bar' style={{ width: drawProprties.fontLength }}>
                        </div>
                        <div className='circle' draggable={true} onDrag={HandleSize} onDragEnd={HandleSize} style={{ left: drawProprties.fontLength }} ></div>
                        <div className='transperantLine'>
                        </div>
                    </div>
                </div>
            </div>
            <div className='colorsSection'>
                <h3> Font Color</h3>
                <div className='colorsContainer'>
                    <div className={drawProprties.fontColor === "white" ? "active" : null} id="white" onClick={HandleFontColor}></div>
                    <div className={drawProprties.fontColor === "orange" ? "active" : null} id="orange" onClick={HandleFontColor}></div>
                    <div className={drawProprties.fontColor === "green" ? "active" : null} id="green" onClick={HandleFontColor}></div>
                    <div className={drawProprties.fontColor === "black" ? "active" : null} id="black" onClick={HandleFontColor}></div>
                    <div className={drawProprties.fontColor === "red" ? "active" : null} id="red" onClick={HandleFontColor}></div>
                    <div className={drawProprties.fontColor === "blue" ? "active" : null} id="blue" onClick={HandleFontColor}></div>
                </div>
            </div>
            <div className='shadowProp'>
                <div className='part1'>
                    <h3> Shadow Size</h3>
                    <span>{drawProprties.shadowSize}px</span>
                </div>
                <div className='part2'>
                    <div className='progressBar' >
                        <div className='value-bar' style={{ width: drawProprties.shadowLength }}>
                        </div>
                        <div className='circle' draggable={true} onDrag={HandleShadow} onDragEnd={HandleShadow} style={{ left: drawProprties.shadowLength }} ></div>
                        <div className='transperantLine'>
                        </div>
                    </div>
                </div>
            </div>
            <div className='colorsSection'>
                <h3> Shadow Color</h3>
                <div className='colorsContainer'>
                    <div className={drawProprties.shadowColor === "white" ? "active" : null} id="white" onClick={HandleShadowColor}></div>
                    <div className={drawProprties.shadowColor === "orange" ? "active" : null} id="orange" onClick={HandleShadowColor}></div>
                    <div className={drawProprties.shadowColor === "green" ? "active" : null} id="green" onClick={HandleShadowColor}></div>
                    <div className={drawProprties.shadowColor === "black" ? "active" : null} id="black" onClick={HandleShadowColor}></div>
                    <div className={drawProprties.shadowColor === "red" ? "active" : null} id="red" onClick={HandleShadowColor}></div>
                    <div className={drawProprties.shadowColor === "blue" ? "active" : null} id="blue" onClick={HandleShadowColor}></div>
                </div>
            </div>
            <button onClick={() => drawEffect({ ...drawProprties, apply: true })}>Apply</button>
        </div>
    )
}
