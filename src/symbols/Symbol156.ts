import { Symbol } from '../common';
import Symbol155 from './Symbol155';
import Symbol153 from './Symbol153';

const Symbol156: Symbol = {
  "type": "symbol",
  "name": "Symbol156",
  "parts": [
    {
      ...Symbol155,
      "colorIdx": 2
    },
    {
      ...Symbol153,
      "colorIdx": 3
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol153",
        "transform": {
          "tx": 0,
          "ty": 0
        }
      }
    ],
    [
      {
        "type": "symbol",
        "name": "Symbol153",
        "transform": {
          "tx": 0,
          "ty": 0
        }
      },
      {
        "type": "symbol",
        "name": "Symbol155",
        "transform": {
          "tx": -3.25,
          "ty": 7.55,
          "a": 0.846160888671875,
          "d": 1
        }
      }
    ]
  ]
};

export default Symbol156;
