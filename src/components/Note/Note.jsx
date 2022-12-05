import React from 'react'

export default function Note() {
    return (
        <div className='note'>
            <h3>Save changes</h3>
            <p>you must click on "save" button to save the changes,
                before trying to use another tool or
                trying to download the image .
            </p>
            <img src="/save.png" alt="" />
        </div>
    )
}
