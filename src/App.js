import Calculator from './components/Calculator';
import './App.css';
import Quote from './components/Quote';

const App = () => (
  <>
    <header>
      <h1>Math Magicians</h1>
    </header>
    <main>
      <Quote />
      <Calculator />
    </main>
  </>
);

export default App;
