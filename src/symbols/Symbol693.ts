import { Symbol } from '../common';
import { Symbol222 } from './Symbol222';
import { Symbol224 } from './Symbol224';

export const Symbol693: Symbol = {
  "type": "symbol",
  "name": "Symbol693",
  "parts": [
    {
      ...Symbol222,
      "colorIdx": "_col3"
    },
    {
      ...Symbol224,
      "colorIdx": "_col2"
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol222",
        "transform": {
          "tx": 0,
          "ty": 1.25
        }
      }
    ],
    [
      {
        "type": "symbol",
        "name": "Symbol224",
        "transform": {
          "tx": 0,
          "ty": 9.5,
          "a": 1.1502838134765625,
          "d": 1.2355804443359375,
          "b": -0.335205078125,
          "c": 0
        }
      },
      {
        "type": "symbol",
        "name": "Symbol222",
        "transform": {
          "tx": 0,
          "ty": 1.25
        }
      }
    ]
  ]
};