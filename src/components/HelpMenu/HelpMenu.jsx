import './HelpMenu.scss'
import { Link } from 'react-router-dom'

export default function HelpMenu({ visibility }) {

  return (
    <div className='main-help' >

      <ul>
        <li onClick={() => visibility(false)}>
          <Link to='/filters'>Add Filters</Link>

        </li>
        <li onClick={() => visibility(false)}>
          <Link to='/resize'>Resize</Link>

        </li>
        <li onClick={() => visibility(false)}>
          <Link to='/frame'> Add Frame</Link>

        </li>
        <li onClick={() => visibility(false)}>
          <Link to='/crop'>Crop</Link>

        </li>
        <li onClick={() => visibility(false)}>
          <Link to='/rotate'>Rotate image</Link>

        </li>
        <li onClick={() => visibility(false)}>
          <Link to='/text'>Add Text</Link>

        </li>
        <li onClick={() => visibility(false)}>
          <Link to='/draw'> Draw on an image</Link>

        </li>
        <li onClick={() => visibility(false)}>
          <Link to='/stickers'>Add stickers </Link>

        </li>
        <li onClick={() => visibility(false)}>
          <Link to='/color'> Extract color from an image </Link>

        </li>
        <li onClick={() => visibility(false)}>
          <Link to='/border'>Add border </Link>

        </li>
        <li onClick={() => visibility(false)}>
          <Link to='/shapes'> Cropping an image into shapes</Link>

        </li>
      </ul>
    </div>
  )
}
