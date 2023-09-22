import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pagecomponents/mainpage';
import MapPage from './pagecomponents/mappage';
import useLoginStore from './stores/login/useLoginStore';

function App() {
  const isLogin = useLoginStore((state) => state.isLogin);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/map" element={isLogin ? <MapPage /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
