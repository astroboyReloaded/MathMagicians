import { Route, Routes, NavLink } from 'react-router-dom';
import Calculator from './components/Calculator';
import './App.css';
import Quote from './components/Quote';

const App = () => (
  <>
    <header>
      <h1>Math Magicians</h1>
      <nav>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/calculator">Calculator</NavLink></li>
      </nav>
    </header>

    <Routes>
      <Route path="/" element={<Quote />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  </>
);

export default App;
