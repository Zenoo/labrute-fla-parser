import { Symbol } from '../common';
import Symbol698 from './Symbol698';
import Symbol632 from './Symbol632';
import Symbol630 from './Symbol630';

const Symbol699: Symbol = {
  "type": "symbol",
  "name": "Symbol699",
  "parts": [
    {
      ...Symbol698,
      "partIdx": 7
    },
    {
      ...Symbol632,
      "colorIdx": 3
    },
    {
      ...Symbol630,
      "colorIdx": 0
    }
  ],
  "frames": [
    [
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
        "name": "Symbol698",
        "transform": {
          "tx": -0.05,
          "ty": 12.75
        }
      }
    ],
    [
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
      },
      {
        "type": "symbol",
        "name": "Symbol698",
        "transform": {
          "tx": -0.05,
          "ty": 12.75
        }
      }
    ]
  ]
};

export default Symbol699;
