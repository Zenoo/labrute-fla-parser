import { Symbol } from '../common';
import Symbol419 from './Symbol419';
import Symbol413 from './Symbol413';

const Symbol420: Symbol = {
  "type": "symbol",
  "name": "Symbol420",
  "parts": [
    {
      ...Symbol419,
      "partIdx": 7
    },
    {
      ...Symbol413,
      "colorIdx": 0
    }
  ],
  "frames": [
    [
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
      },
      {
        "type": "symbol",
        "name": "Symbol419",
        "transform": {
          "tx": -2.75,
          "ty": 7.6
        }
      }
    ]
  ]
};

export default Symbol420;
