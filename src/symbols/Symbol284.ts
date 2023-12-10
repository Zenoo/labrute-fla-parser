import { Symbol } from '../common';
import Symbol283 from './Symbol283';
import Symbol279 from './Symbol279';
import Symbol281 from './Symbol281';

const Symbol284: Symbol = {
  "type": "symbol",
  "name": "Symbol284",
  "parts": [
    {
      ...Symbol283,
      "colorIdx": 2
    },
    {
      ...Symbol279,
      "colorIdx": 3
    },
    {
      ...Symbol281,
      "colorIdx": 3
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol279",
        "transform": {
          "tx": 1.55,
          "ty": 0,
          "a": 3.2306976318359375,
          "d": 3.2306976318359375
        }
      }
    ],
    [
      {
        "type": "symbol",
        "name": "Symbol283",
        "transform": {
          "tx": -3.25,
          "ty": -5.8
        }
      },
      {
        "type": "symbol",
        "name": "Symbol281",
        "transform": {
          "tx": 1.55,
          "ty": 0,
          "a": 3.2306976318359375,
          "d": 3.2306976318359375
        }
      }
    ]
  ]
};

export default Symbol284;
