import './App.css';
import Mines from './pages/Mines/Mines';
import Roulette from './pages/Roulette/Roulette';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Roulette />} />
        <Route path="/Mines" element={<Mines />} />
      </Routes>
    </div>
  );
}

export default App;

