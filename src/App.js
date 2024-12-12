import './App.css';
import Register from './pages/Register/Register';
import Mines from './pages/Mines/Mines';
import Plinko from './pages/Plinko/Plinko';
import Roulette from './pages/Roulette/Roulette';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.js"
import CashHunt from './pages/CashHunt/CashHunt.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CashHunt" element={<CashHunt />} />
        <Route path="/Roulette" element={<Roulette />} />
        <Route path="/Mines" element={<Mines />} />
        <Route path="/Plinko" element={ <Plinko />} />
      </Routes>
    </div>
  );
}

export default App;

