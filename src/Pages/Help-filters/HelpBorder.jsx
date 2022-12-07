import React from 'react'
import Note from '../../components/Note/Note'
export default function HelpBorder() {
    return (
        <div className='help'>
            <div className='container'>
                <h2>Help Add Border On Image</h2>
                <p>For adding border to images, press the "Border" button.</p>

                <div>
                    <h3>Border Tools</h3>
                    <p>
                        The Border toolbar will be shown, where you can
                        add border to image by chossing the specific
                        width and color you want.
                    </p>

                    <p>
                        you can change the width of the border by sliding
                        the slider for the certain value you want.
                    </p>
                    <img src="/border-0.png" alt="" />

                    <p>
                        you can change the color of the border a
                        by clicking on one of the color circle,
                        menue will be shown click on the grediant color you want.
                    </p>
                    <img src="/border-1.png" alt="" />
                    <Note />
                </div>
            </div>
        </div>
    )
}
