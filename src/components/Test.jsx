import { useEffect, useRef } from 'react'
import './Test.scss'
export default function Test() {
    const canvas = useRef()
    const contextRef = useRef()

    useEffect(() => {
        if (canvas) {
            let ctx = canvas.current.getContext('2d')
            contextRef.current = ctx 
            ctx.strokeRect(0, 0, 200, 100)
            const rd = Math.PI / 180
            const angle = 10 * rd;
            const cos = Math.cos(angle)
            const sin = Math.sin(angle)

            ctx.transform(cos, sin, -sin, cos, 0, 0)
            ctx.storkeStyle = "line"
            ctx.strokeRect(0, 0, 200, 100)
        }
    })
 useEffect(() => {
    if(contextRef){
        console.log(contextRef.current)
    }
 },[])
    
    return (
        <div className='test'>
            <canvas width="800px" height="200px" ref={canvas}></canvas>
        </div>
    )
}
