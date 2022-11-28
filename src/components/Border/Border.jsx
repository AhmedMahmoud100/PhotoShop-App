import { useState, useEffect, useRef } from 'react'
import './Border.scss'
export default function Border({ borderEffect }) {
    const container = useRef()
    const [boundary, setBoundary] = useState(0)
    const [borderProprties, setBorderProprties] = useState({
        width: 0,
        color: 'black',
        apply: false,
        length: 0
    })

    const [customColor, setCustomColor] = useState('#000000')
    useEffect(() => {
        let XBoundary = container.current.getBoundingClientRect().width
        setBoundary(XBoundary)
        
    }, [])

    function HandleSize(e) {
        e.dataTransfer.setDragImage(new Image(), 0, 0)
        if (e.clientX > 10 && e.clientX < boundary - 20) {
            let width = (e.clientX - 10) / ((boundary - 20) / 100)
            setBorderProprties({ ...borderProprties, length: e.clientX - 20, width: Math.floor(width) })
            borderEffect({ ...borderProprties, length: e.clientX - 20, width: Math.floor(width) })
        }
    }
    function HandleBorderColor(e) {
        let color = e.target.id;
        setBorderProprties({ ...borderProprties, color: color })
        borderEffect({ ...borderProprties, color: color })
    }

    function HandleCustomColor(e) {
        setCustomColor(e.target.value);
        setBorderProprties({ ...borderProprties, color: e.target.value })
        borderEffect({ ...borderProprties, color: e.target.value })
    }

    function HandleApply() {
        setBorderProprties({ ...borderProprties, apply: true })
        borderEffect({ ...borderProprties, apply: true })
    }

    useEffect(() => {
        setBorderProprties({ ...borderProprties, apply: false })
    }, [borderProprties.apply])

    return (
        <div className='border' ref={container}>
            <h2>Add A border</h2>
            <div className='width'>
                <div className='part1'>
                    <h3>Width</h3>
                    <span>{borderProprties.width}px</span>
                </div>
                <div className='part2'>
                    <div className='progressBar' >
                        <div className='value-bar' style={{ width: borderProprties.length }}>
                        </div>
                        <div className='circle' draggable={true} onDrag={HandleSize} onDragEnd={HandleSize} style={{ left: borderProprties.length }} ></div>
                        <div className='transperantLine'>
                        </div>
                    </div>
                </div>
            </div>

            <div className='colorsSection'>
                <h3> Border Color</h3>

                <div className='colorsContainer'>
                    <div className={borderProprties.color === "white" ? "active" : null} id="white" onClick={HandleBorderColor}></div>
                    <div className={borderProprties.color === "orange" ? "active" : null} id="orange" onClick={HandleBorderColor}></div>
                    <div className={borderProprties.color === "green" ? "active" : null} id="green" onClick={HandleBorderColor}></div>
                    <div className={borderProprties.color === "black" ? "active" : null} id="black" onClick={HandleBorderColor}></div>
                    <div className={borderProprties.color === "red" ? "active" : null} id="red" onClick={HandleBorderColor}></div>
                    <div className={borderProprties.color === "blue" ? "active" : null} id="blue" onClick={HandleBorderColor}></div>
                </div>
                <div className='custom-color'>
                    <label htmlFor="">custom Color</label>
                    <div>
                        <input type="color" value={customColor} onChange={HandleCustomColor} />
                    </div>

                </div>
            </div>
            <button onClick={HandleApply}>Apply</button>
        </div>
    )
}
