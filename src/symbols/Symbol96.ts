import { Symbol } from '../common';
import Symbol93 from './Symbol93';
import Symbol95 from './Symbol95';

const Symbol96: Symbol = {
  "type": "symbol",
  "name": "Symbol96",
  "parts": [
    {
      ...Symbol93,
      "colorIdx": 3
    },
    {
      ...Symbol95,
      "colorIdx": 2
    }
  ],
  "frames": [
    [],
    [
      {
        "type": "symbol",
        "name": "Symbol95",
        "transform": {
          "tx": 1.6,
          "ty": 0
        }
      },
      {
        "type": "symbol",
        "name": "Symbol93",
        "transform": {
          "tx": -2,
          "ty": -6.85
        }
      }
    ]
  ]
};

export default Symbol96;
