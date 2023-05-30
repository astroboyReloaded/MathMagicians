import calculator from '../styles/Calculator.module.css';
import { keyPad, genClassName } from '../helpers';
import Screen from './Screen';

const Calculator = () => (
  <div className={calculator.calcContainer}>
    <Screen />
    <div className={calculator.keyPad}>
      {keyPad.map((key, i) => <button className={`${calculator[genClassName(i)]} ${calculator.btn}`} type="button" key={key}>{key}</button>)}
    </div>
  </div>
);

export default Calculator;
