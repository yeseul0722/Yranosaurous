import logo from './logo.svg';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Expo from './pagecomponents/expopage';
import Dinosaur from './pagecomponents/dinosaurpage';
import Gosung from './pagecomponents/gosungpage';
import DsDetail from './pagecomponents/dinosaurpage/components/dinosaurdetail';
import Guide from './pagecomponents/guide';
import NavBar from './components/common';
function App() {
  const pathname = useLocation().pathname;
  return (
    <div className="App">
      {pathname === '/Expo' && <NavBar />}
      <Routes>
        <Route path="/Expo" element={<Expo />} />
        <Route path="/Dinosaur" element={<Dinosaur />} />
        <Route path="/Gosung" element={<Gosung />} />
        <Route path="/Guide" element={<Guide />} />
      </Routes>
    </div>
  );
}

export default App;
