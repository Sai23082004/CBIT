import { useState } from 'preact/hooks'
import viteLogo from '/vite.svg'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './Home'
import DownloadPage from './components/DownloadPage'
import DownloadPageTwo from './components/DownloadPageTwo'
import DownloadPageThree from './components/DownloadPageThree'
import DownloadPageFour from './components/DownloadPageFour'
import DownloadPageEce from './components/DownloadPageEce'
import DownloadPageEee from './components/DownloadPageEee'
import DownloadPageCseDs from './components/DownloadPageCseDs'
import DownloadPageCseAi from './components/DownloadPageCseAi'
import DownloadPageCseAiml from './components/DownloadPageCseAiml'

export function App() {
  const [val,setVal]=useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/download' element={<DownloadPage/>} ></Route>
    <Route path='/downloadtwo' element={<DownloadPageTwo/>} ></Route>
    <Route path='/downloadthree' element={<DownloadPageThree/>} ></Route>
    <Route path='/downloadfour' element={<DownloadPageFour/>} ></Route>
    <Route path='/downloadece' element={<DownloadPageEce/>} ></Route>
    <Route path='/downloadeee' element={<DownloadPageEee/>} ></Route>
    <Route path='/downloadcseds' element={<DownloadPageCseDs/>} ></Route>
    <Route path='/downloadcseai' element={<DownloadPageCseAi/>} ></Route>
    <Route path='/downloadcseaiml' element={<DownloadPageCseAiml/>} ></Route>


    <Route path='*' element={<Navigate to="/"/>} ></Route>
    
    </Routes>
    
    </BrowserRouter>
  )
}
