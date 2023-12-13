import { Symbol } from '../common';
import Symbol650 from './Symbol650';
import Symbol652 from './Symbol652';
import Symbol660 from './Symbol660';

const Symbol661: Symbol = {
  "type": "symbol",
  "name": "Symbol661",
  "parts": [
    {
      ...Symbol650,
      "partIdx": "_p7b"
    },
    {
      ...Symbol652,
      "colorIdx": "_col0"
    },
    {
      ...Symbol660,
      "partIdx": "_p7"
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol660",
        "transform": {
          "tx": -2.95,
          "ty": -1.5
        }
      },
      {
        "type": "symbol",
        "name": "Symbol652",
        "colorOffset": {
          "r": -16,
          "g": -50,
          "b": -80
        },
        "transform": {
          "tx": -3.4,
          "ty": -3.3
        }
      },
      {
        "type": "symbol",
        "name": "Symbol650",
        "transform": {
          "tx": -5.35,
          "ty": 21.3
        }
      }
    ]
  ]
};

export default Symbol661;
