import { useState, useEffect, useRef } from 'react';
import './Text.scss'

export default function Text({ textEffect }) {
    const container = useRef()
    const [boundary, setBoundary] = useState(0)
    const [textProp, setTextProp] = useState({
        font: "sans-serif",
        weight: "400",
        color: "red",
        apply: false,
        size: 20,
        fontLength: 0 ,
        addText : false
    })

    useEffect(() => {
      
        textEffect({ ...textProp, apply: false })
        setTextProp({ ...textProp, apply: false })
    }, [textProp.apply])

    useEffect(() => {
        let XBoundary = container.current.getBoundingClientRect().width
        setBoundary(XBoundary)
        setTextProp({
            ...textProp, fontLength: 20 * (XBoundary / 100)
        })
    }, [])

    function HandleSize(e) {
        e.dataTransfer.setDragImage(new Image(), 0, 0)
        if (e.clientX > 10 && e.clientX < boundary - 20) {
            let size = (e.clientX - 20) / (boundary / 100)
            setTextProp({ ...textProp, fontLength: e.clientX - 20, size: Math.floor(size) })
            textEffect({ ...textProp, fontLength: e.clientX - 20, size: Math.floor(size) })
        }
    }
    function HandleFontColor(e) {
        let color = e.target.id;

        setTextProp({ ...textProp, color: color })
        textEffect({ ...textProp, color: color })
    }

    function HandleFont(e) {
        setTextProp({ ...textProp, font: e.target.value })
        textEffect({ ...textProp, font: e.target.value })
    }

    function HandleFontWeight(e) {
        setTextProp({ ...textProp, weight: e.target.value })
        textEffect({ ...textProp, weight: e.target.value })
    }

   

    return (
        <div className='textSection' ref={container}>
            <h2>Add Text</h2>

            <div className='font'>
                <label htmlFor="font">font</label>
                <select id="font" value={textProp.font} onChange={HandleFont}>
                    <option value="sans-serif">sans-serif</option>
                    <option value="arial">arial</option>
                    <option value="courier">courier</option>
                    <option value="italic">italic</option>
                </select>
            </div>

            <div className='fontWeight'>
                <label htmlFor="fontWeight">FontWeight</label>
                <select id="fontWeight" value={textProp.weight} onChange={HandleFontWeight}>
                    <option value="300">200</option>
                    <option value="500">400</option>
                    <option value="italic">500</option>
                    <option value="bold">bold</option>
                </select>
            </div>

            <div className='fontProp'>
                <div className='part1'>
                    <h3>Font Size</h3>
                    <span>{textProp.size}px</span>
                </div>
                <div className='part2'>
                    <div className='progressBar' >
                        <div className='value-bar' style={{ width: textProp.fontLength }}>
                        </div>
                        <div className='circle' draggable={true} onDrag={HandleSize} onDragEnd={HandleSize} style={{ left: textProp.fontLength }} ></div>
                        <div className='transperantLine'>
                        </div>
                    </div>
                </div>
            </div>
            <div className='colorsSection'>
                <h3> Font Color</h3>
                <div className='colorsContainer'>
                    <div className={textProp.color === "white" ? "active" : null} id="white" onClick={HandleFontColor}></div>
                    <div className={textProp.color === "orange" ? "active" : null} id="orange" onClick={HandleFontColor}></div>
                    <div className={textProp.color === "green" ? "active" : null} id="green" onClick={HandleFontColor}></div>
                    <div className={textProp.color === "black" ? "active" : null} id="black" onClick={HandleFontColor}></div>
                    <div className={textProp.color === "red" ? "active" : null} id="red" onClick={HandleFontColor}></div>
                    <div className={textProp.color === "blue" ? "active" : null} id="blue" onClick={HandleFontColor}></div>
                </div>
            </div>
            <button onClick={() => {
                setTextProp({ ...textProp, apply: true , addText : false})
                textEffect({ ...textProp, apply: true , addText : false})
            }}>Apply</button>
            <button onClick={() => {
                setTextProp({ ...textProp, addText: true })
                textEffect({ ...textProp, addText: true })
            }}>Add Text</button>
        </div>
    )
}
