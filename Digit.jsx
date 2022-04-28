const Digit = ({ number, height, width, mainColor = '#212121', secondaryColor = '#f5f5f5' }) => {
  return (
    <div className="digit" style={{ height, width }}>
      <div className="left">
        <div className="side-piece" style={setSelected(number, 'f', mainColor, secondaryColor)}></div>
        <div className="side-piece" style={setSelected(number, 'e', mainColor, secondaryColor)}></div>
      </div>
      <div className="middle">
        <div className="middle-piece" style={setSelected(number, 'a', mainColor, secondaryColor)}></div>
        <div className="middle-piece" style={setSelected(number, 'g', mainColor, secondaryColor)}></div>
        <div className="middle-piece" style={setSelected(number, 'd', mainColor, secondaryColor)}></div>
      </div>
      <div className="right">
        <div className="side-piece" style={setSelected(number, 'b', mainColor, secondaryColor)}></div>
        <div className="side-piece" style={setSelected(number, 'c', mainColor, secondaryColor)}></div>
      </div>
    </div>
  );
};

export default Digit;

const setSelected = (number, letter, mainColor, secondaryColor) => {
  const illuminated = truthTable[number];
  return { backgroundColor: illuminated.includes(letter) ? mainColor : secondaryColor };
};

const truthTable = {
  0: ['a', 'b', 'c', 'd', 'e', 'f'],
  1: ['b', 'c'],
  2: ['a', 'b', 'd', 'e', 'g'],
  3: ['a', 'b', 'c', 'd', 'g'],
  4: ['b', 'c', 'f', 'g'],
  5: ['a', 'c', 'd', 'f', 'g'],
  6: ['a', 'c', 'd', 'e', 'f', 'g'],
  7: ['a', 'b', 'c'],
  8: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  9: ['a', 'b', 'c', 'd', 'f', 'g'],
};
