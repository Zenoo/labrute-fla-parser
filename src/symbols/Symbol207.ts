import { Symbol } from '../common';
import Symbol145 from './Symbol145';
import Symbol124 from './Symbol124';
import Symbol206 from './Symbol206';

const Symbol207: Symbol = {
  "type": "symbol",
  "name": "Symbol207",
  "parts": [
    {
      ...Symbol145,
      "colorIdx": "_col3"
    },
    {
      ...Symbol124,
      "colorIdx": "_col0"
    },
    {
      ...Symbol206,
      "partIdx": "_p7"
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol206",
        "transform": {
          "tx": 0.55,
          "ty": 1.55
        }
      },
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
      }
    ],
    [
      {
        "type": "symbol",
        "name": "Symbol206",
        "transform": {
          "tx": 0.55,
          "ty": 1.55
        }
      },
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
      }
    ]
  ]
};

export default Symbol207;
