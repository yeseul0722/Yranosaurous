import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Expo from './pagecomponents/expopage';
import Dinosaur from './pagecomponents/dinosaurpage';
import Gosung from './pagecomponents/gosungpage';
import DsDetail from './pagecomponents/dinosaurpage/components/dinosaurdetail';
import PerformanceGuide from './pagecomponents/performanceguide';
import NavBar from './components/common';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/Expo" element={<Expo />} />
        <Route path="/Dinosaur" element={<Dinosaur />} />
        <Route path="/Gosung" element={<Gosung />} />
        <Route path="/Performance" element={<PerformanceGuide />} />
      </Routes>
    </div>
  );
}

export default App;
