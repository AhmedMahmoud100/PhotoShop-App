import './App.scss'
import Header from './components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Main from './Pages/Main/Main'
import HelpResize from './Pages/Help-filters/HelpResize'
import HelpFilters from './Pages/Help-filters/HelpFilters'
import HelpRotate from './Pages/Help-filters/HelpRotate'
import HelpCrop from './Pages/Help-filters/HelpCrop'
import HelpDraw from './Pages/Help-filters/HelpDraw'
import HelpText from './Pages/Help-filters/HelpText'
import HelpShapes from './Pages/Help-filters/HelpShapes'
import HelpFrames from './Pages/Help-filters/HelpFrames'
import HelpStickers from './Pages/Help-filters/HelpStickers'
import HelpBorder from './Pages/Help-filters/HelpBorder'
import HelpColorEx from './Pages/Help-filters/HelpColorEx'
import Examples from './Pages/Examples/Examples'


function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/edit' element={<Main />}></Route>
          <Route path='filters' element={<HelpFilters />} />
          <Route path='/resize' element={<HelpResize />} />
          <Route path='/rotate' element={<HelpRotate />} />
          <Route path='/crop' element={<HelpCrop />} />
          <Route path='/draw' element={<HelpDraw />} />
          <Route path='/text' element={<HelpText />} />
          <Route path='/border' element={<HelpBorder />} />
          <Route path='/shapes' element={<HelpShapes />} />
          <Route path='/frame' element={<HelpFrames />} />
          <Route path='/stickers' element={<HelpStickers />} />
          <Route path='/color' element={<HelpColorEx />} />
          <Route path='/examples' element={<Examples />} />

        </Routes>
      </div>
    </BrowserRouter >
  )
}

export default App
