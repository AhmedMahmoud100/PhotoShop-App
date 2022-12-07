import React from 'react'
import Note from '../../components/Note/Note'

export default function HelpDraw() {
    return (
        <div className='help'>
            <div className='container'>
                <h2>Help Draw On Image</h2>
                <p>For Drawing on images, press the "Draw" button.</p>

                <div>
                    <h3>Draw Tools</h3>
                    <p>The Draw toolbar will be shown, where you can Draw on image by
                        chossing the specific size and color you want.
                        by sliding the slider for the certain value you want .
                        also you can choose the font-size of the shadow and the color of the shadow.
                    </p>

                    <p>
                        you can change the font-size of the pen and
                        the font-size of the shadow by sliding the slider
                        for the certain value you want.
                    </p>
                    <img src="/draw-0.png" alt="" />
                    <p>
                        you can change the color of the pen and
                        the color of the shadow by clicking on one of the color circle,
                        menue will be shown click on the grediant color you want.
                    </p>
                    <img src="/draw-1.png" alt="" />
                    <Note />
                </div>
            </div>
        </div>
    )
}
