const genClassName = (index) => {
  if ((index + 1) % 4 === 0) return 'orange';
  if (index === 16) return 'double';
  return '';
};

export default genClassName;
