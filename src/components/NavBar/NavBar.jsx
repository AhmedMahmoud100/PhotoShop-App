import React, { useEffect } from 'react'
import './NavBar.scss'
import TuneIcon from '@mui/icons-material/Tune';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import CropIcon from '@mui/icons-material/Crop';
import CropRotateIcon from '@mui/icons-material/CropRotate';
import BrushIcon from '@mui/icons-material/Brush';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import HexagonOutlinedIcon from '@mui/icons-material/HexagonOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import FilterFramesOutlinedIcon from '@mui/icons-material/FilterFramesOutlined';
import BorderOuterIcon from '@mui/icons-material/BorderOuter';
import ColorizeIcon from '@mui/icons-material/Colorize';

export default function NavBar({ section }) {

    return (
        <div className='navBar'>
            <ul>
                <li onClick={() => section("filter")}>
                    <TuneIcon />
                    <span>Filter</span>
                </li>
                <li onClick={() => section("resize")}>
                    <AspectRatioIcon />
                    <span>Resize</span>
                </li>
                <li onClick={() => section("crop")}>
                    <CropIcon />
                    <span>Crop</span>
                </li>
                <li onClick={() => section("transform")}>
                    <CropRotateIcon />
                    <span>transform</span>
                </li>
                <li onClick={() => section("draw")}>
                    <BrushIcon />
                    <span>Draw</span>
                </li>
                <li onClick={() => section("text")}>
                    <TextIncreaseIcon />
                    <span>Text</span>
                </li>
                <li onClick={() => section("shape")}>
                    <HexagonOutlinedIcon />
                    <span>Shapes</span>
                </li>
                <li onClick={() => section("sticker")}>
                    <InsertEmoticonOutlinedIcon />
                    <span>Stickers</span>
                </li>
                <li onClick={() => section("frame")}>
                    <FilterFramesOutlinedIcon />
                    <span>Frame</span>
                </li>
                <li onClick={() => section("border")}>
                    <BorderOuterIcon />
                    <span>Border</span>
                </li>
                <li onClick={() => section("color")}>
                    <ColorizeIcon />
                    <span>Color Extraction</span>
                </li>

            </ul>
        </div>
    )
}
