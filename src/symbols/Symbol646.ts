import { Symbol } from '../common';
import Symbol645 from './Symbol645';
import Symbol632 from './Symbol632';
import Symbol630 from './Symbol630';

const Symbol646: Symbol = {
  "type": "symbol",
  "name": "Symbol646",
  "parts": [
    {
      ...Symbol645,
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
          "tx": 0,
          "ty": 0
        }
      },
      {
        "type": "symbol",
        "name": "Symbol645",
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
        "name": "Symbol645",
        "transform": {
          "tx": -0.05,
          "ty": 12.75
        }
      }
    ]
  ]
};

export default Symbol646;
