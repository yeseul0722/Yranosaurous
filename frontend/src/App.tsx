import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Expo from './pagecompontents/expopage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Expo" element={<Expo />} />
      </Routes>
    </div>
  );
}

export default App;
