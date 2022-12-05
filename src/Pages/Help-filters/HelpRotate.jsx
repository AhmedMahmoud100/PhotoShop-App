import React from 'react'
import Note from '../../components/Note/Note'

export default function HelpRotate() {
    return (
        <div className='help'>
            <div className='container'>
                <h2> Help Rotate image</h2>
                <p>For rotating images, press the "Rotate" button.</p>

                <div>
                    <h3>Rotate Tools</h3>
                    <p>The Rotate toolbar will be shown, where you can ROTATE your image by
                        filling in the rotate degree for your image, or you can click on
                        "rotate 45" button if you want the rotate degree to be 45 same as 90
                        and 180 degree .
                    </p>
                    <img src="/rotate.png" alt="" />
                </div>
                <Note />
            </div>

        </div>
    )
}
