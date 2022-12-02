import './App.scss'
import Header from './components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Main from './Pages/Main/Main'

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/edit' element={<Main />}></Route>
        </Routes>
      </div>
    </BrowserRouter >
  )
}

export default App
