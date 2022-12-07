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
    const [fontColor, setFontColor] = useState(
        {
            first: '#FFFFFF',
            second: '#FF0000',
            third: '#00FF00',
            fourth: '#0000FF',
            fifth: '#FFFF00'
        }
    )
    const [shadowColor, setShadowColor] = useState(
        {
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
        setDrawProprties({
            ...drawProprties, fontLength: 15 * (XBoundary / 60),
            shadowLength: 1 * (XBoundary / 20)
        })
    }, [])

    function HandleSize(e) {
        e.dataTransfer.setDragImage(new Image(), 0, 0)
        if (e.pageX > 10 && e.pageX < boundary - 20) {
            let size = (e.pageX - 10) / (boundary / 60)
            setDrawProprties({ ...drawProprties, fontLength: e.pageX - 10, fontSize: Math.floor(size) })
            drawEffect({ ...drawProprties, fontLength: e.pageX - 10, fontSize: Math.floor(size) })
        }
    }
    function HandleShadow(e) {
        e.dataTransfer.setDragImage(new Image(), 0, 0)
        if (e.pageX > 10 && e.pageX < boundary - 20) {
            let size = (e.pageX - 10) / (boundary / 20)
            setDrawProprties({ ...drawProprties, shadowLength: e.pageX - 10, shadowSize: Math.floor(size) })
            drawEffect({ ...drawProprties, shadowLength: e.pageX - 10, shadowSize: Math.floor(size) })
        }
    }

    function HandleFontColor(e) {
        setFontColor({ ...fontColor, [e.target.name]: e.target.value });
        setDrawProprties({ ...drawProprties, fontColor: e.target.value })
        drawEffect({ ...drawProprties, fontColor: e.target.value })
    }
    function HandleShadowColor(e) {
        setShadowColor({ ...shadowColor, [e.target.name]: e.target.value });
        setDrawProprties({ ...drawProprties, shadowColor: e.target.value })
        drawEffect({ ...drawProprties, shadowColor: e.target.value })
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
            <div className='custom-color'>

                <h3>Font Color</h3>

                <div className='colors-container'>
                    <div className={fontColor.first === drawProprties.fontColor ? 'active' : null}>
                        <input type="color" name="first" value={fontColor.first} onChange={HandleFontColor} />
                    </div>
                    <div className={fontColor.second === drawProprties.fontColor ? 'active' : null}>
                        <input type="color" name='second' value={fontColor.second} onChange={HandleFontColor} />
                    </div>
                    <div className={fontColor.third === drawProprties.fontColor ? 'active' : null}>
                        <input type="color" name='third' value={fontColor.third} onChange={HandleFontColor} />
                    </div>
                    <div className={fontColor.fourth === drawProprties.fontColor ? 'active' : null}>
                        <input type="color" name='fourth' value={fontColor.fourth} onChange={HandleFontColor} />
                    </div>
                    <div className={fontColor.fifth === drawProprties.fontColor ? 'active' : null}>
                        <input type="color" name='fifth' value={fontColor.fifth} onChange={HandleFontColor} />
                    </div>
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
            <div className='custom-color'>

                <h3>Shadow Color</h3>

                <div className='colors-container'>
                    <div className={shadowColor.first === drawProprties.shadowColor ? 'active' : null}>
                        <input type="color" name="first" value={shadowColor.first} onChange={HandleShadowColor} />
                    </div>
                    <div className={shadowColor.second === drawProprties.shadowColor ? 'active' : null}>
                        <input type="color" name='second' value={shadowColor.second} onChange={HandleShadowColor} />
                    </div>
                    <div className={shadowColor.third === drawProprties.shadowColor ? 'active' : null}>
                        <input type="color" name='third' value={shadowColor.third} onChange={HandleShadowColor} />
                    </div>
                    <div className={shadowColor.fourth === drawProprties.shadowColor ? 'active' : null}>
                        <input type="color" name='fourth' value={shadowColor.fourth} onChange={HandleShadowColor} />
                    </div>
                    <div className={shadowColor.fifth === drawProprties.shadowColor ? 'active' : null}>
                        <input type="color" name='fifth' value={shadowColor.fifth} onChange={HandleShadowColor} />
                    </div>
                </div>
            </div>

        </div>
    )
}
