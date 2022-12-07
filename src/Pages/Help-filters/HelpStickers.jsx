import React from 'react'
import Note from '../../components/Note/Note'

export default function HelpStickers() {
    return (
        <div className='help'>
            <div className='container '>
                <h2>Help Adding stickers to images</h2>
                <p>For Adding stickers to images, press the "stickers" button.</p>
                
                <div>
                <h3>stickers Tools</h3>
                <p>
                    The Shapes toolbar will be shown, where you can
                    Adding stickers to images.
                </p>

                <p>
                    you can add the sticker you prefer to your images by
                    clicking on the sticker.
                </p>

                <p>
                    use the slider to see all stickers thet you can
                    choose from.
                </p>
                <img src="./stickers-0.png" alt="" />
                <p>
                    you can resize your sticker by
                    filling in the new width and height for your sticker.
                </p>
                <img src="./stickers-1.png" alt="" />

                <p>
                    you can change the position of the sticker by
                    grabbing sticker to any posiiton over the image.
                </p>
                <section className='together'>
                    <img src="/stickers-2.png" alt="" />
                    <img src="/stickers-3.png" alt="" />
                </section>

                <Note />
                </div>
            </div>
        </div>
    )
}