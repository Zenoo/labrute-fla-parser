import { Symbol } from '../common';
import { Symbol255 } from './Symbol255';

export const Symbol256: Symbol = {
  "type": "symbol",
  "name": "Symbol256",
  "parts": [
    {
      ...Symbol255
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol255",
        "transform": {
          "tx": 0,
          "ty": 0
        }
      }
    ]
  ]
};