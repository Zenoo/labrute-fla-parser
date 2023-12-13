import { Symbol } from '../common';
import Symbol211 from './Symbol211';
import Symbol215 from './Symbol215';

const Symbol216: Symbol = {
  "type": "symbol",
  "name": "Symbol216",
  "parts": [
    {
      ...Symbol211,
      "colorIdx": "_col3"
    },
    {
      ...Symbol215,
      "partIdx": "_p7"
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol215",
        "transform": {
          "tx": 2.35,
          "ty": 2.4
        }
      },
      {
        "type": "symbol",
        "name": "Symbol211",
        "transform": {
          "tx": 2.65,
          "ty": -5.9
        }
      }
    ],
    [
      {
        "type": "symbol",
        "name": "Symbol215",
        "transform": {
          "tx": 2.35,
          "ty": 2.4
        }
      },
      {
        "type": "symbol",
        "name": "Symbol211",
        "transform": {
          "tx": 2.65,
          "ty": -5.9
        }
      }
    ]
  ]
};

export default Symbol216;
