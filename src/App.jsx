import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import View from './pages/View'
import Header from './components/Header'
import Footere from './components/Footere'

function App() {

  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/:id/view' element={<View/>}/>
    </Routes>
    <Footere/>
     </>
  
  )
}

export default App
