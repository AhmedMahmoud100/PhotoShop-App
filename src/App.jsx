import './App.scss'
import Header from './components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Main from './Pages/Main/Main'
import HelpResize from './Pages/Help-filters/HelpResize'
import HelpFilters from './Pages/Help-filters/HelpFilters'
import HelpRotate from './Pages/Help-filters/HelpRotate'
import HelpCrop from './Pages/Help-filters/HelpCrop'

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

        </Routes>
      </div>
    </BrowserRouter >
  )
}

export default App
