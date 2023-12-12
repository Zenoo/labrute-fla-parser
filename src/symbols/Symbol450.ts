import { Symbol } from '../common';
import Symbol448 from './Symbol448';
import Symbol82 from './Symbol82';
import Symbol449 from './Symbol449';

const Symbol450: Symbol = {
  "type": "symbol",
  "name": "Symbol450",
  "parts": [
    {
      ...Symbol448,
      "colorIdx": 4
    },
    {
      ...Symbol82,
      "colorIdx": 0
    },
    {
      ...Symbol449,
      "partIdx": 7
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol449",
        "transform": {
          "tx": 1.9,
          "ty": -0.5
        }
      },
      {
        "type": "symbol",
        "name": "Symbol82",
        "colorOffset": {
          "r": -16,
          "g": -50,
          "b": -80
        },
        "transform": {
          "tx": 0,
          "ty": 0
        }
      }
    ],
    [
      {
        "type": "symbol",
        "name": "Symbol449",
        "transform": {
          "tx": 1.9,
          "ty": -0.5
        }
      },
      {
        "type": "symbol",
        "name": "Symbol448",
        "colorOffset": {
          "r": -16,
          "g": -50,
          "b": -80
        },
        "transform": {
          "tx": 0,
          "ty": 0
        }
      }
    ]
  ]
};

export default Symbol450;
