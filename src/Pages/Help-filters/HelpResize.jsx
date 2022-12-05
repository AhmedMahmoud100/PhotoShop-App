import Note from '../../components/Note/Note'
import './Help.scss'

export default function HelpResize() {
    return (
        <div className='help'>
            <div className='container'>
                <h2>Help Resize image</h2>
                <p>For resizing images, press the "Resize" button.</p>

                <div>
                    <h3>Resize Tools</h3>
                    <p>The resize toolbar will be shown, where you can resize your image by
                        filling in the new width and height for your image.
                    </p>
                    <img src="/resize-0.png" alt="" />
                </div>

                <div>
                    <h3>Keep Proportions / Aspect Ratio</h3>
                    <p>There is also an option "Aspect Ratio" .
                        If this option is checked,
                        the image will keep it's width and height proportion.
                        With other words, if the width will get 2 times wider,
                        the image will get 2 times higher.
                        For most images this is rather important.
                        If you change the width and height proportions,
                        you might end with a blurred image.</p>
                    <img src="/resize-1.png" alt="" />
                </div>

                <h3>click on "resize image" button to see the effect on the image.</h3>
                <Note />
            </div>
        </div>
    )
}
