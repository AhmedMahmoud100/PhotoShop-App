import React from 'react'
import Note from '../../components/Note/Note'

export default function HelpText() {
    return (
        <div className='help'>
            <div className='container'>
                <h2>Help Add Text On Image</h2>
                <p>For Adding Text on images, press the "Text" button.</p>

                <div>
                    <h3>Text Tools</h3>
                    <p>The Text toolbar will be shown, where you can Add text on image by
                        chossing the specific font and font-weight you want.
                        also you can choose the font-size and the color of the text.
                    </p>

                    <p>
                        you can change the font and the font-weight of the text by
                        clicking on the "Down" Icon ,menue will be shown,
                        choose the font and font-weight you want .
                    </p>
                    <img src="/text-0.png" alt="" />

                    <p>
                        you can change the font-size of the Text by sliding
                        the sliderfor the certain value you want.
                    </p>
                    <img src="/text-1.png" alt="" />

                    <p>
                        you can change the color of the Text and
                        by clicking on one of the color circle,
                        menue will be shown click on the grediant color you want.
                    </p>
                    <img src="/text-2.png" alt="" />

                    <p>
                        you can change the position of the text by
                        grabbing text to any posiiton over the image.
                    </p>
                    <section className='together'>
                        <img src="/text-3.png" alt="" />
                        <img src="/text-4.png" alt="" />
                    </section>
                    <Note />
                </div>
            </div>
        </div>
    )
}
