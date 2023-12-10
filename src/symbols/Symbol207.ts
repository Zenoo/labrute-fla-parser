import { Symbol } from '../common';
import Symbol206 from './Symbol206';
import Symbol124 from './Symbol124';
import Symbol145 from './Symbol145';

const Symbol207: Symbol = {
  "type": "symbol",
  "name": "Symbol207",
  "parts": [
    {
      ...Symbol206,
      "partIdx": 7
    },
    {
      ...Symbol124,
      "colorIdx": 0
    },
    {
      ...Symbol145,
      "colorIdx": 3
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol124",
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
        "name": "Symbol206",
        "transform": {
          "tx": 0.55,
          "ty": 1.55
        }
      }
    ],
    [
      {
        "type": "symbol",
        "name": "Symbol145",
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
        "name": "Symbol206",
        "transform": {
          "tx": 0.55,
          "ty": 1.55
        }
      }
    ]
  ]
};

export default Symbol207;
