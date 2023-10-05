import logo from './logo.svg';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Expo from './pagecomponents/expopage';
import Dinosaur from './pagecomponents/dinosaurpage';
import Gosung from './pagecomponents/gosungpage';
import DsDetail from './pagecomponents/dinosaurpage/components/dinosaurdetail';
import Guide from './pagecomponents/guide';
import NavBar from './components/navbar';
import MainLanding from './pagecomponents/mainlanding';
import { AnimatePresence } from 'framer-motion';
import Animation from './components/animation';
function App() {
  const pathname = useLocation().pathname;
  return (
    <div className="App">
      <AnimatePresence>
        <Routes>
          <Route
            path="/"
            element={
              <Animation>
                <MainLanding />
              </Animation>
            }
          />
          <Route path="/Expo" element={<Expo />} />
          <Route
            path="/Dinosaur"
            element={
              <Animation>
                <Dinosaur />
              </Animation>
            }
          />
          <Route
            path="/Gosung"
            element={
              <Animation>
                <Gosung />
              </Animation>
            }
          />
          <Route
            path="/Guide"
            element={
              <Animation>
                <Guide />
              </Animation>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
