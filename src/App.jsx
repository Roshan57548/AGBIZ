import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './componants/Headers/Header/Header'
import Header1 from './componants/Headers/Header-1/Header-1';
import Header2 from './componants/Headers/Header-2/Header-2';
import Header3 from './componants/Headers/Header-3/Header-3';
import Header4 from './componants/Headers/Header-4/Header-4';
import Header5 from './componants/Headers/Header-5/Header-5';
import Header6 from './componants/Headers/Header-6/Header-6';
import Header7 from './componants/Headers/Header-7/Header-7';
import Header8 from './componants/Headers/Header-8/Header-8';
import Header9 from './componants/Headers/Header-9/Header-9';
import Header10 from './componants/Headers/Header-10/Header-10';
const Routing = () => {

  return (
    <Routes>
        <Route path="/Header-1" element={<Header1></Header1>} />
        <Route path="/Header-2" element={<Header2></Header2>} />
        <Route path="/Header-3" element={<Header3></Header3>} />
        <Route path="/Header-4" element={<Header4></Header4>} />
        <Route path="/Header-5" element={<Header5></Header5>} />
        <Route path="/Header-6" element={<Header6></Header6>} />
        <Route path="/Header-7" element={<Header7></Header7>} />
        <Route path="/Header-8" element={<Header8></Header8>} />
        <Route path="/Header-9" element={<Header9></Header9>} />
        <Route path="/Header-10" element={<Header10></Header10>} />
    </Routes>

  )
}
function App() {
  

  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <Routing />
        </BrowserRouter>
    </div>
  )
}

export default App
