export const isValidInteger = (num) => Number.isInteger(num);

export const makeArrayOfIntegers = (num, length) => {
  const numberArray = Array.from(num.toString()).map(Number);
  if (!length) return numberArray;
  if (numberArray.length > length) {
    console.warn('WARNING: You have specified a number length shorter than the number provided');
    return numberArray;
  }
  return new Array(length - numberArray.length).fill(0).concat(numberArray);
};

export const setSelected = (number, letter, mainColor, secondaryColor) => {
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
  const illuminated = truthTable[number];
  return { backgroundColor: illuminated.includes(letter) ? mainColor : secondaryColor };
};
