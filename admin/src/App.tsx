import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pagecomponents/mainpage';
import MapPage from './pagecomponents/mappage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </div>
  );
}

export default App;
