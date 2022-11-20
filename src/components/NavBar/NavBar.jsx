import React from 'react'
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

export default function NavBar() {
  return (
    <div className='navBar'>
      <ul>
        <li>
            <TuneIcon />
            <span>Filter</span>
        </li>
        <li>
            <AspectRatioIcon />
            <span>Resize</span>
        </li>
        <li>
            <CropIcon />
            <span>Crop</span>
        </li>
        <li>
            <CropRotateIcon/>
            <span>transform</span>
        </li>
        <li>
            <BrushIcon />
            <span>Draw</span>
        </li>
        <li>
            <TextIncreaseIcon />
            <span>Text</span>
        </li>
        <li>
            <HexagonOutlinedIcon />
            <span>Sharpes</span>
        </li>
        <li>
            <InsertEmoticonOutlinedIcon />
            <span>Stickers</span>
        </li>
        <li>
            <FilterFramesOutlinedIcon />
            <span>Frame</span>
        </li>
        <li>
            <RoundedCornerOutlinedIcon />
            <span>Corners</span>
        </li>
        <li>
            <WallpaperOutlinedIcon />
            <span>BackGround</span>
        </li>
        
      </ul>
    </div>
  )
}
