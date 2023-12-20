import { Symbol } from '../common';
import { Symbol2 } from './Symbol2';

export const Symbol3: Symbol = {
  "type": "symbol",
  "name": "Symbol3",
  "parts": [
    {
      ...Symbol2
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol2",
        "transform": {
          "tx": 0,
          "ty": 0
        }
      }
    ]
  ]
};