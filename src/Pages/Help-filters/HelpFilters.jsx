import React from 'react'
import Note from '../../components/Note/Note'

export default function HelpFilters() {
    return (
        <div className='help'>
            <div className='container'>
                <h2>Help Adding Filters</h2>
                <p>For Adding Filters to images, press the "Filters" button.</p>

                <div>
                    <h3>Filters Tools</h3>
                    <p>The filters toolbar will be shown, where you can add filters to your image by
                        sliding the slider of the certain filter you want to add.
                    </p>
                    <img src="/slider.png" alt="" />
                </div>

                <div>
                    <h3>Reset</h3>
                    <p>By clicking on "reset" button, all filters values will be the default values.</p>
                </div>
                <Note />
            </div>
        </div>
    )
}
