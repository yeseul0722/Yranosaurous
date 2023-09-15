import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Expo from './pagecomponents/expopage';
import Dinosaur from './pagecomponents/dinosaurpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Expo" element={<Expo />} />
        <Route path="/Dinosaur" element={<Dinosaur />} />
      </Routes>
    </div>
  );
}

export default App;
