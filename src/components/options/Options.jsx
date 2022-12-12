import { useEffect, useRef, useState } from 'react';
import './Options.scss'
import UploadIcon from '@mui/icons-material/Upload';
import SaveIcon from '@mui/icons-material/Save';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BrowserUpdatedOutlinedIcon from '@mui/icons-material/BrowserUpdatedOutlined';
import { useNavigate } from 'react-router-dom'

export default function Options({ options }) {
    const uploadInput = useRef()
    const [data, setData] = useState({})
    const navigate = useNavigate();


    function handleUpload() {
        let file = new FileReader();
        file.readAsDataURL(uploadInput.current.files[0]);

        file.onload = function () {
            setData({ ...data, src: file.result })
            options({ ...data, src: file.result })
        }
    }
    function HandleDownload() {
        setData({ ...data, download: true })
        options({ ...data, download: true })
    }

    useEffect(() => {
        setData({ ...data, download: false })
        options({ ...data, download: false })
    }, [data.download])

    function HandleDelete() {
        navigate("/")
    }

    function HandleSave() {
        setData({ ...data, save: true })
        options({ ...data, save: true })
    }

    useEffect(() => {
        setData({ ...data, save: false })
        options({ ...data, save: false })
    }, [data.save])

    return (
        <div className='options'>

            <div className='upload' >
                <UploadIcon className='UploadIcon' />
                <div>
                    <label htmlFor="upload" >Upload new Photo</label>
                    <input type="file" id='upload' onChange={handleUpload} ref={uploadInput} />
                </div>

            </div>
            <div className='down'>
                <button className='download' onClick={HandleDownload}>
                    <BrowserUpdatedOutlinedIcon className='DownloadIcon' />
                    Download
                </button>
                <button className='save' onClick={HandleSave}>
                    <SaveIcon className='SaveIcon' />
                    Save
                </button>
                <button className='delete' onClick={HandleDelete}>
                    <DeleteForeverIcon className='DeleteIcon' />
                    Delete
                </button>

            </div>


        </div>
    )
}
