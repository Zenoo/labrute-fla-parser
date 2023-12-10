import { Symbol } from '../common';
import Symbol623 from './Symbol623';
import Symbol621 from './Symbol621';

const Symbol624: Symbol = {
  "type": "symbol",
  "name": "Symbol624",
  "parts": [
    {
      ...Symbol623,
      "colorIdx": 3
    },
    {
      ...Symbol621,
      "colorIdx": 2
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
        "name": "Symbol621",
        "transform": {
          "tx": 0,
          "ty": 0
        }
      },
      {
        "type": "symbol",
        "name": "Symbol623",
        "transform": {
          "tx": -1.9,
          "ty": 2.35
        }
      }
    ]
  ]
};

export default Symbol624;
