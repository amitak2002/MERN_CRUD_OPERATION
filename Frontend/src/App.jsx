import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Create from './components/Create.jsx'
import Read from './components/Read.jsx'
import Update from './components/Update.jsx'
import {Toaster} from 'react-hot-toast'
import './App.css'

function App() {
  

  return (
    <>
      <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/create' element={<Create/>}/>
          <Route path='/all' element={<Read/>}/>
          <Route path='/update' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
