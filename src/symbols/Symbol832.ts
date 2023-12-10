import { Symbol } from '../common';
import Symbol831 from './Symbol831';
import Symbol583 from './Symbol583';

const Symbol832: Symbol = {
  "type": "symbol",
  "name": "Symbol832",
  "parts": [
    {
      ...Symbol831,
      "partIdx": 7
    },
    {
      ...Symbol583,
      "colorIdx": 0
    }
  ],
  "frames": [
    [
      {
        "type": "symbol",
        "name": "Symbol583",
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
        "name": "Symbol831",
        "transform": {
          "tx": 1.9,
          "ty": -0.5
        }
      }
    ],
    [
      {
        "type": "symbol",
        "name": "Symbol583",
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
        "name": "Symbol831",
        "transform": {
          "tx": 1.9,
          "ty": -0.5
        }
      }
    ]
  ]
};

export default Symbol832;
