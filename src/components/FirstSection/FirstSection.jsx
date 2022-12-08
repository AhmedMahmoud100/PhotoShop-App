import './FirstSection.scss'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react';

export default function FirstSection({ upload }) {
    const navigate = useNavigate();
    const uploadInput = useRef()

    function HandleUpload() {
        let file = new FileReader();
        file.readAsDataURL(uploadInput.current.files[0]);

        file.onload = function () {
            navigate('./edit', { state: { src: file.result } })
        }

    }

    useEffect(() => {
        if (upload) {
            uploadInput.current.click()
        }
    }, [upload])
    return (
        <div className='firstSection'>
            <h2>Free Online PhotoShop</h2>
            <div className='overLay'>
                <h3>The Free Online PhotoShop lets you edit images ONLINE!</h3>
                <ul>
                    <li>Resize ,rotate and Crop images.</li>
                    <li>Add stickers to an image.</li>
                    <li>Add Text with your own fonts to an image.</li>
                    <li>Add Borders with your color and width to your photo.</li>
                    <li>Put an image in a Photo Frame .</li>
                    <li>Overlay images with filters!</li>
                    <li>Convert, sharpen, reduce size of an image</li>
                    <li>Use the shape Tool to make a heart shape image.</li>
                    <li>Extract colors from image.</li>

                    <div className='upload' >
                        <label htmlFor="upload" >Upload an Image</label>
                        <input type="file" id='upload' onChange={HandleUpload} ref={uploadInput} />
                    </div>
                </ul>
            </div>
        </div>
    )
}
