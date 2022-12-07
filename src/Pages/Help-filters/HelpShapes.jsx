import React from 'react'
import Note from '../../components/Note/Note'

export default function HelpShapes() {
    return (
        <div className='help'>
            <div className='container '>
                <h2>Help Croppig images into shapes</h2>
                <p>For Croppig images into shapes, press the "shapes" button.</p>

                <h3>Shapes Tools</h3>
                <p>
                    The Shapes toolbar will be shown, where you can
                    Croppig images into the shape you want .
                </p>

                <p>
                    you can Crope images into the shape you prefer by
                    clicking on the shape .
                </p>

                <p>
                    use the slider to see all shapes thet you can
                    choose from.
                </p>
                <img src="./shapes-0.png" alt="" />
                <Note />
            </div>
        </div>
    )
}
