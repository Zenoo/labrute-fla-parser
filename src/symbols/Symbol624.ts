import { Symbol } from '../common';
import Symbol621 from './Symbol621';
import Symbol623 from './Symbol623';

const Symbol624: Symbol = {
  "type": "symbol",
  "name": "Symbol624",
  "parts": [
    {
      ...Symbol621,
      "colorIdx": 2
    },
    {
      ...Symbol623,
      "colorIdx": 3
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol621",
        "transform": {
          "tx": 0,
          "ty": 0
        }
      }
    ],
    [
      {
        "type": "symbol",
        "name": "Symbol623",
        "transform": {
          "tx": -1.9,
          "ty": 2.35
        }
      },
      {
        "type": "symbol",
        "name": "Symbol621",
        "transform": {
          "tx": 0,
          "ty": 0
        }
      }
    ]
  ]
};

export default Symbol624;
