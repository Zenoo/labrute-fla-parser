import { Symbol } from '../common';
import Symbol239 from './Symbol239';
import Symbol220 from './Symbol220';
import Symbol149 from './Symbol149';

const Symbol240: Symbol = {
  "type": "symbol",
  "name": "Symbol240",
  "parts": [
    {
      ...Symbol239,
      "partIdx": 7
    },
    {
      ...Symbol220,
      "colorIdx": 3
    },
    {
      ...Symbol149,
      "colorIdx": 0
    },
    {
      ...Symbol149,
      "colorIdx": 3
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol149",
        "colorOffset": {
          "r": -16,
          "g": -50,
          "b": -80
        },
        "transform": {
          "tx": 0,
          "ty": 0
        }
      },
      {
        "type": "symbol",
        "name": "Symbol220",
        "transform": {
          "tx": 0.1,
          "ty": -0.3
        }
      },
      {
        "type": "symbol",
        "name": "Symbol239",
        "transform": {
          "tx": -0.05,
          "ty": 12.75
        }
      }
    ],
    [
      {
        "type": "symbol",
        "name": "Symbol149",
        "colorOffset": {
          "r": -16,
          "g": -50,
          "b": -80
        },
        "transform": {
          "tx": 0,
          "ty": 0
        }
      },
      {
        "type": "symbol",
        "name": "Symbol239",
        "transform": {
          "tx": -0.05,
          "ty": 12.75
        }
      }
    ]
  ]
};

export default Symbol240;
