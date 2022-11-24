import { useState } from 'react'
import './Draw.scss'
export default function Draw() {
    const [size, setSize] = useState(0)
    const [softness, setSoftness] = useState(0)
    const [transparency, setTransparency] = useState(0)

    function HandleSize(e) {
        e.dataTransfer.setDragImage(new Image(), 0, 0)
        if (e.clientX > 10 && e.clientX < 245) {
            setSize(e.clientX - 10)
        }
    }
    function HandleSoftness(e) {
        e.dataTransfer.setDragImage(new Image(), 0, 0)
        if (e.clientX > 10 && e.clientX < 245) {
            setSoftness(e.clientX - 10)
        }
    }
    function HandleTransparency(e) {
        e.dataTransfer.setDragImage(new Image(), 0, 0)
        if (e.clientX > 10 && e.clientX < 245) {
            setTransparency(e.clientX - 10)
        }
    }


    return (
        <div className='draw'>

            <h2>Draw</h2>

            <div className='box'>
                <div className='part1'>
                    <h3>size</h3>
                    <span>{size}px</span>
                </div>
                <div className='part2'>
                    <div className='progressBar' >
                        <div className='value-bar' style={{ width: size }}>
                        </div>
                        <div className='circle' draggable={true} onDrag={HandleSize} onDragEnd={HandleSize} style={{ left: size }} ></div>
                        <div className='transperantLine'>
                        </div>
                    </div>
                </div>
            </div>
            <div className='box'>
                <div className='part1'>
                    <h3>softness</h3>
                    <span>{softness}%</span>
                </div>
                <div className='part2'>
                    <div className='progressBar' >
                        <div className='value-bar' style={{ width: softness }}>
                        </div>
                        <div className='circle' draggable={true} onDrag={HandleSoftness} onDragEnd={HandleSoftness} style={{ left: softness }} ></div>
                        <div className='transperantLine'>
                        </div>
                    </div>
                </div>
            </div>
            <div className='box'>
                <div className='part1'>
                    <h3>transparency</h3>
                    <span>{transparency}%</span>
                </div>
                <div className='part2'>
                    <div className='progressBar' >
                        <div className='value-bar' style={{ width: transparency }}>
                        </div>
                        <div className='circle' draggable={true} onDrag={HandleTransparency} onDragEnd={HandleTransparency} style={{ left: transparency }} ></div>
                        <div className='transperantLine'>
                        </div>
                    </div>
                </div>
            </div>
            <div className='colorsSection'>
                <h2>color</h2>
                <div className='colorsContainer'>
                    <div className='white'></div>
                    <div className='orange'></div>
                    <div className='green'></div>
                    <div className='black'></div>
                    <div className='red'></div>
                    <div className='blue'></div>
                </div>
            </div>
            <button>Apply</button>
        </div>
    )
}
