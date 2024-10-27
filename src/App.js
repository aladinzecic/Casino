import './App.css';
import Mines from './pages/Mines/Mines';
import Plinko from './pages/Plinko/Plinko';
import Roulette from './pages/Roulette/Roulette';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Roulette />} />
        <Route path="/Mines" element={<Mines />} />
      </Routes> */}
      <Plinko/>
    </div>
  );
}

export default App;

