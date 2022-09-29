import { useState } from 'react'
import logo from './logo.svg'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './routes/Home';
import Dbase from './routes/Dbase';
import Base from './routes/Base';

import './App.css'
import 'antd/dist/antd.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/done" element={<Dbase />} />
          <Route path="/base" element={<Base />} />
        </Routes>
      </BrowserRouter>

      <footer className="footer">
        Create by FE-XUX
      </footer>
    </div>
  )
}

export default App
