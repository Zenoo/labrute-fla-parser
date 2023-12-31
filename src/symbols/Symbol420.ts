import { Symbol } from '../common';
import { Symbol413 } from './Symbol413';
import { Symbol419 } from './Symbol419';

export const Symbol420: Symbol = {
  "type": "symbol",
  "name": "Symbol420",
  "parts": [
    {
      ...Symbol413,
      "colorIdx": "_col0"
    },
    {
      ...Symbol419,
      "partIdx": "_p7"
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol419",
        "transform": {
          "tx": -2.75,
          "ty": 7.6
        }
      },
      {
        "type": "symbol",
        "name": "Symbol413",
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