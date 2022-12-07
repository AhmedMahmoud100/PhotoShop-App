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
        fontLength: 0,
        addText: false
    })

    const [customColor, setCustomColor] = useState({
        first: '#FFFFFF',
        second: '#FF0000',
        third: '#00FF00',
        fourth: '#0000FF',
        fifth: '#FFFF00'
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
        if (e.pageX > 10 && e.pageX < boundary - 20) {
            let size = (e.pageX - 20) / (boundary / 100)
            setTextProp({ ...textProp, fontLength: e.pageX - 20, size: Math.floor(size) })
            textEffect({ ...textProp, fontLength: e.pageX - 20, size: Math.floor(size) })
        }
    }
    function HandleCustomColor(e) {

        setCustomColor({ ...customColor, [e.target.name]: e.target.value });
        setTextProp({ ...textProp, color: e.target.value })
        textEffect({ ...textProp, color: e.target.value })
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
            <div className='custom-color'>

                <h3> Color</h3>

                <div className='colors-container'>
                    <div className={customColor.first === textProp.color ? 'active' : null}>
                        <input type="color" name="first" value={customColor.first} onChange={HandleCustomColor} />
                    </div>
                    <div className={customColor.second === textProp.color ? 'active' : null}>
                        <input type="color" name='second' value={customColor.second} onChange={HandleCustomColor} />
                    </div>
                    <div className={customColor.third === textProp.color ? 'active' : null}>
                        <input type="color" name='third' value={customColor.third} onChange={HandleCustomColor} />
                    </div>
                    <div className={customColor.fourth === textProp.color ? 'active' : null}>
                        <input type="color" name='fourth' value={customColor.fourth} onChange={HandleCustomColor} />
                    </div>
                    <div className={customColor.fifth === textProp.color ? 'active' : null}>
                        <input type="color" name='fifth' value={customColor.fifth} onChange={HandleCustomColor} />
                    </div>
                </div>
            </div>

        </div>
    )
}
