import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'
import Calc from './components/Calc'
import KnowMore from './components/KnowMore'
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Calc />} />
        <Route path="/know" element={<KnowMore />} /> {/* Replace with your actual Know More component */}
      </Routes>
    </Router>
  );
}

export default App
