import keyPad from '../keyPadArr';
import calculator from '../styles/Calculator.module.css';
import genClassName from '../helperFunctions';

const Calculator = () => (
  <div className={calculator.calcContainer}>
    {keyPad.map((key, i) => <button className={`${calculator[genClassName(i)]} ${calculator.btn}`} type="button" key={key}>{key}</button>)}
  </div>
);

export default Calculator;
