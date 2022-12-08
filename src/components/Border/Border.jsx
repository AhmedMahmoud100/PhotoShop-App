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

    const [customColor, setCustomColor] = useState({
        first: '#FFFFFF',
        second: '#FF0000',
        third: '#00FF00',
        fourth: '#0000FF',
        fifth: '#FFFF00'
    }
    )
    useEffect(() => {
        let XBoundary = container.current.getBoundingClientRect().width
        setBoundary(XBoundary)

    }, [])

    function HandleSize(e) {
        e.dataTransfer.setDragImage(new Image(), 0, 0)
        if (e.pageX > 10 && e.pageX < boundary - 20) {
            let width = (e.pageX - 10) / ((boundary - 20) / 100)
            setBorderProprties({ ...borderProprties, length: e.pageX - 20, width: Math.floor(width) })
            borderEffect({ ...borderProprties, length: e.pageX - 20, width: Math.floor(width) })
        }
    }

    function HandleCustomColor(e) {
        setCustomColor({ ...customColor, [e.target.name]: e.target.value });
        setBorderProprties({ ...borderProprties, color: e.target.value })
        borderEffect({ ...borderProprties, color: e.target.value })
    }

    return (
        <div className='border' ref={container}>
            <h2>Border</h2>
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

            <div className='custom-color'>
                <h3> Color</h3>
                <div className='colors-container'>
                    <div className={customColor.first === borderProprties.color ? 'active' : null}>
                        <input type="color" name="first" value={customColor.first} onChange={HandleCustomColor} />
                    </div>
                    <div className={customColor.second === borderProprties.color ? 'active' : null}>
                        <input type="color" name='second' value={customColor.second} onChange={HandleCustomColor} />
                    </div>
                    <div className={customColor.third === borderProprties.color ? 'active' : null}>
                        <input type="color" name='third' value={customColor.third} onChange={HandleCustomColor} />
                    </div>
                    <div className={customColor.fourth === borderProprties.color ? 'active' : null}>
                        <input type="color" name='fourth' value={customColor.fourth} onChange={HandleCustomColor} />
                    </div>
                    <div className={customColor.fifth === borderProprties.color ? 'active' : null}>
                        <input type="color" name='fifth' value={customColor.fifth} onChange={HandleCustomColor} />
                    </div>
                </div>
            </div>
        </div>
    )
}
