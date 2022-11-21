import Crop from '../crop/Crop'
import Filter from '../options/filters/Filter'
import Resize from '../options/Reasize/Resize'
import Test from '../Test/Test'
import './Aside.scss'

export default function Aside() {
  return (
    <aside>
     <Filter /> 
     <Resize />  
     <Crop />
    </aside>
  )
}
