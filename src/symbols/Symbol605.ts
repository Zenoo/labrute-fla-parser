import { Symbol } from '../common';
import Symbol604 from './Symbol604';
import Symbol117 from './Symbol117';
import Symbol115 from './Symbol115';

const Symbol605: Symbol = {
  "type": "symbol",
  "name": "Symbol605",
  "parts": [
    {
      ...Symbol604,
      "partIdx": 1
    },
    {
      ...Symbol117
    },
    {
      ...Symbol115,
      "partIdx": 1
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol115",
        "transform": {
          "tx": 0,
          "ty": 0
        }
      }
    ],
    [],
    [
      {
        "type": "symbol",
        "name": "Symbol117",
        "transform": {
          "tx": 25.4,
          "ty": -3.4
        }
      }
    ],
    [
      {
        "type": "symbol",
        "name": "Symbol604",
        "transform": {
          "tx": -13.15,
          "ty": -19.4
        }
      }
    ]
  ]
};

export default Symbol605;
