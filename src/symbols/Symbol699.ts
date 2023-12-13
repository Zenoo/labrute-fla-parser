import { Symbol } from '../common';
import Symbol630 from './Symbol630';
import Symbol632 from './Symbol632';
import Symbol698 from './Symbol698';

const Symbol699: Symbol = {
  "type": "symbol",
  "name": "Symbol699",
  "parts": [
    {
      ...Symbol630,
      "colorIdx": "_col0"
    },
    {
      ...Symbol632,
      "colorIdx": "_col3"
    },
    {
      ...Symbol698,
      "partIdx": "_p7"
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol698",
        "transform": {
          "tx": -0.05,
          "ty": 12.75
        }
      },
      {
        "type": "symbol",
        "name": "Symbol632",
        "transform": {
          "tx": 0.1,
          "ty": -0.3
        }
      },
      {
        "type": "symbol",
        "name": "Symbol630",
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
        "name": "Symbol698",
        "transform": {
          "tx": -0.05,
          "ty": 12.75
        }
      },
      {
        "type": "symbol",
        "name": "Symbol630",
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

export default Symbol699;
