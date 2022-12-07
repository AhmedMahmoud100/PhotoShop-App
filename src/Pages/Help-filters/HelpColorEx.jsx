import React from 'react'
import Note from '../../components/Note/Note'

export default function HelpColorEx() {
    return (
        <div className='help'>
            <div className='container'>
                <h2>Help Color Extraction Tool</h2>
                <p>
                    For extracting colors from image, press the
                    "Color Extraction" button.
                </p>
                <div>

                    <h3>How to extract colos from image ?</h3>
                    <p>
                        - click on the specific color you want to extract it
                    </p>
                    <p>
                        - the specific color of the pixel you had clicked on will be show under the image
                    </p>
                    <img src="/color-0.png" alt="" className='big' />
                    <p>
                        - the average color of the (41x41) px surrounding the pixel you had clicked on will be show under the image too
                    </p>
                    <img src="/color-1.png" alt="" className='big' />

                    <Note />
                </div>
            </div>
        </div>
    )
}
