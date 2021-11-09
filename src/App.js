import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Menu from './components/Menu';
import Frontpage from './components/Frontpage';
import Sec2 from './components/section2';
import Sec3 from './components/section3';
import Sec4 from './components/section4';

function App() {
  return (
    <>
      <Menu/>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Frontpage />} />
            <Route path="Sec3" element={<Sec3 />} />
            <Route path="Sec2" element={<Sec2 />} />
            <Route path="Sec4" element={<Sec4 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;