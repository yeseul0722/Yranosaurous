import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dinosaur from './pagecomponents/dinosaurpage';

function App() {
  return (
    <Routes>
      <Route path="/dinosaur" element={<Dinosaur />} />
    </Routes>
  );
}

export default App;
