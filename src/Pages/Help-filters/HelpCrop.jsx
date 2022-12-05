import React from 'react'
import Note from '../../components/Note/Note'

export default function HelpCrop() {
    return (
        <div className='help'>
            <div className='container'>
                <h2>Help Crop image</h2>
                <p>For crop images, press the "crop" button.</p>
                <div>
                    <h3>Crop Tools</h3>
                    <p>The crop toolbar will be shown, where you can crop your image by
                        chossing the specific area of the image you want to crop.
                        a red box will appear on your image. With the red box you can select the area you want to cut.
                    </p>
                    <img src="/crop-0.png" alt="" />

                    <p>
                        The red box you can drag around your image by clicking
                        and holding down your left mouse button,
                        while moving the mouse.
                        When you put your cursor on the edge or corner of the red
                        box you can resize the box to make it smaller or larger
                        by clicking and holding down the left mouse button
                        while moving the mouse.
                    </p>

                    <p>Or you can change the width ,the height ,offsetX and offsetY
                        of the crop area by filling in the new width,height,offsetX,
                        and offsetY of the crop area .
                    </p>
                    <img src="/crop-1.png" alt="" />
                    <Note />
                </div>
            </div>
        </div>
    )
}
