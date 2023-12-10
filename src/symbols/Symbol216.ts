import { Symbol } from '../common';
import Symbol215 from './Symbol215';
import Symbol211 from './Symbol211';

const Symbol216: Symbol = {
  "type": "symbol",
  "name": "Symbol216",
  "parts": [
    {
      ...Symbol215,
      "partIdx": 7
    },
    {
      ...Symbol211,
      "colorIdx": 3
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol211",
        "transform": {
          "tx": 2.65,
          "ty": -5.9
        }
      },
      {
        "type": "symbol",
        "name": "Symbol215",
        "transform": {
          "tx": 2.35,
          "ty": 2.4
        }
      }
    ],
    [
      {
        "type": "symbol",
        "name": "Symbol211",
        "transform": {
          "tx": 2.65,
          "ty": -5.9
        }
      },
      {
        "type": "symbol",
        "name": "Symbol215",
        "transform": {
          "tx": 2.35,
          "ty": 2.4
        }
      }
    ]
  ]
};

export default Symbol216;
