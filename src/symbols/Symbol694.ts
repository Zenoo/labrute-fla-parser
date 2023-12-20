import { Symbol } from '../common';
import { Symbol630 } from './Symbol630';
import { Symbol632 } from './Symbol632';

export const Symbol694: Symbol = {
  "type": "symbol",
  "name": "Symbol694",
  "parts": [
    {
      ...Symbol630,
      "colorIdx": "_col2"
    },
    {
      ...Symbol632,
      "colorIdx": "_col2"
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol632",
        "transform": {
          "tx": 0.15,
          "ty": 3.9
        }
      }
    ],
    [
      {
        "type": "symbol",
        "name": "Symbol630",
        "transform": {
          "tx": 0.1,
          "ty": 3.8,
          "a": 1.01190185546875,
          "d": 1.01190185546875
        }
      }
    ]
  ]
};