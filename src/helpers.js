// +++++++++For use in Calculator.js
export const keyPad = [
  'AC',
  '+/-',
  '%',
  '÷',
  '7',
  '8',
  '9',
  'x',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
];

export const genClassName = (index) => {
  if ((index + 1) % 4 === 0 || index === 18) return 'orange';
  if (index === 16) return 'double';
  return '';
};
