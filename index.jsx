import { useState, useCallback } from 'react';
import Digit from './Digit';
import { isValidInteger, makeArrayOfIntegers } from './utils';
import './styles.css';

const SevenSegmentDisplay = ({ number, length = null, mainColor, secondaryColor }) => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  if (!isValidInteger(number)) throw new Error('Please enter a valid integer');
  const integers = makeArrayOfIntegers(number, length);

  const parentContainerRef = useCallback(
    (node) => {
      if (node !== null) {
        const initialWidth = node.getBoundingClientRect().width / integers.length;
        const initialHeight = node.getBoundingClientRect().height;
        const initialWidthHeight = (initialWidth / 58) * 100;
        const initialHeightWidth = (initialHeight / 100) * 58;
        if (initialWidthHeight > initialHeight) {
          setHeight(initialHeight);
          setWidth(initialHeightWidth);
        } else {
          setHeight(initialWidthHeight);
          setWidth(initialWidth);
        }
      }
    },
    [integers],
  );

  return (
    <div className="ssd-container" ref={parentContainerRef}>
      {integers.map((int, x) => (
        <Digit
          number={int}
          height={height}
          width={width}
          mainColor={mainColor}
          secondaryColor={secondaryColor}
          key={x}
        />
      ))}
    </div>
  );
};

export default SevenSegmentDisplay;
