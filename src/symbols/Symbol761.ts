import { Symbol } from '../common';
import Symbol758 from './Symbol758';
import Symbol760 from './Symbol760';

const Symbol761: Symbol = {
  "type": "symbol",
  "name": "Symbol761",
  "parts": [
    {
      ...Symbol758,
      "colorIdx": 2
    },
    {
      ...Symbol760,
      "colorIdx": 3
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol758",
        "transform": {
          "tx": 0,
          "ty": 0
        }
      }
    ],
    [
      {
        "type": "symbol",
        "name": "Symbol760",
        "transform": {
          "tx": -4.1,
          "ty": 4.2
        }
      },
      {
        "type": "symbol",
        "name": "Symbol758",
        "transform": {
          "tx": 0,
          "ty": 0
        }
      }
    ]
  ]
};

export default Symbol761;
