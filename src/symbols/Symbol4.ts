import { Symbol } from '../common';
import { Symbol3 } from './Symbol3';

export const Symbol4: Symbol = {
  "type": "symbol",
  "name": "Symbol4",
  "parts": [
    {
      ...Symbol3
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol3",
        "colorOffset": {
          "r": 45,
          "g": -16,
          "b": -92
        },
        "alpha": 0.3984375,
        "transform": {
          "tx": 0,
          "ty": -0.25,
          "a": 0.20111083984375,
          "d": 0.20111083984375
        }
      }
    ]
  ]
};