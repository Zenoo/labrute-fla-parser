import { Symbol } from '../common';
import { Symbol1 } from './Symbol1';

export const Symbol2: Symbol = {
  "type": "symbol",
  "name": "Symbol2",
  "parts": [
    {
      ...Symbol1
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol1",
        "transform": {
          "tx": 0,
          "ty": 0
        }
      }
    ]
  ]
};