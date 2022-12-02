import './FirstSection.scss'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react';
export default function FirstSection() {
    const navigate = useNavigate();
    const uploadInput = useRef()

    function HandleUpload() {
        let file = new FileReader();
        file.readAsDataURL(uploadInput.current.files[0]);

        file.onload = function () {
            navigate('./edit', { state: { src: file.result } })
        }

    }
    return (
        <div className='firstSection'>
            <h2>Free Online Photo Shop</h2>
            <div className='overLay'>
                <h3>The Free Online Photo Shop lets you edit images ONLINE!</h3>
                <ul>
                    <li>Resize or Crop all (animated gif) images.</li>
                    <li>Merge, Blend and Overlay Images with the editor.</li>
                    <li>Add Text with your own fonts to an (animated) image.</li>
                    <li>Add Borders, round corners and shadow to your photo.</li>
                    <li>Put an image in a Photo Frame or add a Mask.</li>
                    <li>Overlay images with predefined animations!</li>
                    <li>Convert, sharpen, reduce size of an animated gif...</li>
                    <li>Use the Cut Out Tool to make a heart shape image.</li>

                    <div className='upload' >
                        <label htmlFor="upload" >Upload an Image</label>
                        <input type="file" id='upload' onChange={HandleUpload} ref={uploadInput}/>
                    </div>
                </ul>
            </div>
        </div>
    )
}
