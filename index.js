'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var Digit = function Digit(_ref) {
  var number = _ref.number,
    height = _ref.height,
    width = _ref.width,
    _ref$mainColor = _ref.mainColor,
    mainColor = _ref$mainColor === void 0 ? '#212121' : _ref$mainColor,
    _ref$secondaryColor = _ref.secondaryColor,
    secondaryColor = _ref$secondaryColor === void 0 ? '#f5f5f5' : _ref$secondaryColor;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'digit',
      style: {
        height: height,
        width: width,
      },
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'left',
      },
      /*#__PURE__*/ React.createElement('div', {
        className: 'side-piece',
        style: setSelected(number, 'f', mainColor, secondaryColor),
      }),
      /*#__PURE__*/ React.createElement('div', {
        className: 'side-piece',
        style: setSelected(number, 'e', mainColor, secondaryColor),
      }),
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'middle',
      },
      /*#__PURE__*/ React.createElement('div', {
        className: 'middle-piece',
        style: setSelected(number, 'a', mainColor, secondaryColor),
      }),
      /*#__PURE__*/ React.createElement('div', {
        className: 'middle-piece',
        style: setSelected(number, 'g', mainColor, secondaryColor),
      }),
      /*#__PURE__*/ React.createElement('div', {
        className: 'middle-piece',
        style: setSelected(number, 'd', mainColor, secondaryColor),
      }),
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'right',
      },
      /*#__PURE__*/ React.createElement('div', {
        className: 'side-piece',
        style: setSelected(number, 'b', mainColor, secondaryColor),
      }),
      /*#__PURE__*/ React.createElement('div', {
        className: 'side-piece',
        style: setSelected(number, 'c', mainColor, secondaryColor),
      }),
    ),
  );
};

var _default = Digit;
exports['default'] = _default;

var setSelected = function setSelected(number, letter, mainColor, secondaryColor) {
  var illuminated = truthTable[number];
  return {
    backgroundColor: illuminated.includes(letter) ? mainColor : secondaryColor,
  };
};

var truthTable = {
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
('use strict');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = require('react');

var _Digit = _interopRequireDefault(require('./Digit'));

var _utils = require('./utils');

require('./styles.css');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) || arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var SevenSegmentDisplay = function SevenSegmentDisplay(_ref) {
  var number = _ref.number,
    _ref$length = _ref.length,
    length = _ref$length === void 0 ? null : _ref$length,
    mainColor = _ref.mainColor,
    secondaryColor = _ref.secondaryColor;

  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    height = _useState2[0],
    setHeight = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    width = _useState4[0],
    setWidth = _useState4[1];

  if (!(0, _utils.isValidInteger)(number)) throw new Error('Please enter a valid integer');
  var integers = (0, _utils.makeArrayOfIntegers)(number, length);
  var parentContainerRef = (0, _react.useCallback)(
    function (node) {
      if (node !== null) {
        var initialWidth = node.getBoundingClientRect().width / integers.length;
        var initialHeight = node.getBoundingClientRect().height;
        var initialWidthHeight = (initialWidth / 58) * 100;
        var initialHeightWidth = (initialHeight / 100) * 58;

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
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'ssd-container',
      ref: parentContainerRef,
    },
    integers.map(function (_int, x) {
      return /*#__PURE__*/ React.createElement(_Digit['default'], {
        number: _int,
        height: height,
        width: width,
        mainColor: mainColor,
        secondaryColor: secondaryColor,
        key: x,
      });
    }),
  );
};

var _default = SevenSegmentDisplay;
exports['default'] = _default;
('use strict');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.setSelected = exports.makeArrayOfIntegers = exports.isValidInteger = void 0;

var isValidInteger = function isValidInteger(num) {
  return Number.isInteger(num);
};

exports.isValidInteger = isValidInteger;

var makeArrayOfIntegers = function makeArrayOfIntegers(num, length) {
  var numberArray = Array.from(num.toString()).map(Number);
  if (!length) return numberArray;

  if (numberArray.length > length) {
    console.warn('WARNING: You have specified a number length shorter than the number provided');
    return numberArray;
  }

  return new Array(length - numberArray.length).fill(0).concat(numberArray);
};

exports.makeArrayOfIntegers = makeArrayOfIntegers;

var setSelected = function setSelected(number, letter, mainColor, secondaryColor) {
  var truthTable = {
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
  var illuminated = truthTable[number];
  return {
    backgroundColor: illuminated.includes(letter) ? mainColor : secondaryColor,
  };
};

exports.setSelected = setSelected;
