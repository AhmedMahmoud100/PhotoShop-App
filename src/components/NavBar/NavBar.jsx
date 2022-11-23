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
import RoundedCornerOutlinedIcon from '@mui/icons-material/RoundedCornerOutlined';
import WallpaperOutlinedIcon from '@mui/icons-material/WallpaperOutlined';

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
                <li onClick={() => section("sharpes")}>
                    <HexagonOutlinedIcon />
                    <span>Sharpes</span>
                </li>
                <li onClick={() => section("stickers")}>
                    <InsertEmoticonOutlinedIcon />
                    <span>Stickers</span>
                </li>
                <li onClick={() => section("frame")}>
                    <FilterFramesOutlinedIcon />
                    <span>Frame</span>
                </li>
                <li onClick={() => section("corners")}>
                    <RoundedCornerOutlinedIcon />
                    <span>Corners</span>
                </li>
                <li onClick={() => section("background")}>
                    <WallpaperOutlinedIcon />
                    <span>BackGround</span>
                </li>

            </ul>
        </div>
    )
}
