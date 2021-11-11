import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Menu from './components/Menu';
import Frontpage from './components/Frontpage';
import Sec2 from './components/section2';
import Sec3 from './components/section3';
import Sec4 from './components/section4';
import Tutorials from './components/tutorials';
import PWAinstall from './components/PWAinstall';
import Vuosikello from './components/Vuosikello';
import PWAinstallmobile from './components/PWAinstallmobile';

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
            <Route path="Tutorials" element={<Tutorials />} />
            <Route path="PWAinstall" element={<PWAinstall />} />
            <Route path="Vuosikello" element={<Vuosikello />} />
            <Route path="PWAinstallmobile" element={<PWAinstallmobile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;