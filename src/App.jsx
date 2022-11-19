import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auth } from './views/Auth';
import { Home } from './views/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/matches" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
