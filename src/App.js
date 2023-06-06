import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import './App.css';
import Quote from './components/Quote';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Quote />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  </>
);

export default App;
