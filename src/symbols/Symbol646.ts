import { Symbol } from '../common';
import { Symbol630 } from './Symbol630';
import { Symbol632 } from './Symbol632';
import { Symbol645 } from './Symbol645';

export const Symbol646: Symbol = {
  "type": "symbol",
  "name": "Symbol646",
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
      ...Symbol645,
      "partIdx": "_p7"
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol645",
        "transform": {
          "tx": -0.05,
          "ty": 12.75
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
        "name": "Symbol645",
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