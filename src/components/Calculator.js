import { useState } from 'react';
import { keyPad, genClassName } from '../helpers';
import Screen from './Screen';
import calculate from '../logic/calculate';
import calculator from '../styles/Calculator.module.css';

const Calculator = () => {
  const [calcDataObject, setCalcDataObject] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleKeyPress = (event) => {
    setCalcDataObject((prev) => ({
      ...prev,
      ...calculate(calcDataObject, event.target.value),
    }));
  };

  return (
    <main>
      <div className={calculator.pageContainer}>
        <h2 className={calculator.h2}>Let´s do some math!</h2>
        <div className={calculator.calcContainer}>
          <Screen
            total={calcDataObject.total || ''}
            next={calcDataObject.next || ''}
            operation={calcDataObject.operation || ''}
          />
          <div className={calculator.keyPad}>
            {keyPad.map((key, i) => (
              <button
                className={`${calculator[genClassName(i)]} ${calculator.btn}`}
                type="button"
                key={key}
                value={key}
                onClick={handleKeyPress}
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Calculator;
