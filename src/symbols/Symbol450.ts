import { Symbol } from '../common';
import { Symbol448 } from './Symbol448';
import { Symbol82 } from './Symbol82';
import { Symbol449 } from './Symbol449';

export const Symbol450: Symbol = {
  "type": "symbol",
  "name": "Symbol450",
  "parts": [
    {
      ...Symbol448,
      "colorIdx": "_col4"
    },
    {
      ...Symbol82,
      "colorIdx": "_col0"
    },
    {
      ...Symbol449,
      "partIdx": "_p7"
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol449",
        "transform": {
          "tx": 1.9,
          "ty": -0.5
        }
      },
      {
        "type": "symbol",
        "name": "Symbol82",
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
        "name": "Symbol449",
        "transform": {
          "tx": 1.9,
          "ty": -0.5
        }
      },
      {
        "type": "symbol",
        "name": "Symbol448",
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